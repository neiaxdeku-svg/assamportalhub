import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');

import fs from 'fs';
import path from 'path';
import Parser from 'rss-parser';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load .env.local first, then .env
const projectRoot = process.cwd();
if (fs.existsSync(path.join(projectRoot, '.env.local'))) {
  dotenv.config({ path: path.join(projectRoot, '.env.local') });
} else {
  dotenv.config();
}

const NEWS_DATA_PATH = path.join(projectRoot, 'src', 'newsData.json');

// High volume Assam search queries
const RSS_QUERIES = [
  'assam+government+scheme+OR+assam+cabinet+decision',
  'assam+direct+recruitment+OR+ADRE+OR+SLRC+result',
  'orunodoi+3.0+OR+nijut+moina+OR+cmaaa+assam',
  'assam+police+recruitment+OR+APSC+exam',
  'assam+ration+card+OR+bhumiputra+OR+mission+basundhara'
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80);
}

function loadExistingNews() {
  try {
    if (fs.existsSync(NEWS_DATA_PATH)) {
      const data = fs.readFileSync(NEWS_DATA_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Error reading newsData.json:', e.message);
  }
  return [];
}

function saveNews(newsList) {
  // Sort by publishDate desc
  newsList.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  fs.writeFileSync(NEWS_DATA_PATH, JSON.stringify(newsList, null, 2), 'utf-8');
  console.log(`Saved ${newsList.length} articles to ${NEWS_DATA_PATH}`);
}

// Fallback generator when Gemini API is unavailable
function generateFallbackArticle(item) {
  const cleanTitle = (item.title || '').replace(/ - .*$/, '').trim();
  const sourceName = (item.title || '').includes(' - ') ? item.title.split(' - ').pop().trim() : 'Assam News Bureau';
  const snippet = item.contentSnippet || item.content || item.summary || 'Official announcement and latest news regarding government schemes and public services in Assam.';
  
  // Categorize
  let category = 'Alert';
  const lowerTitle = cleanTitle.toLowerCase();
  if (lowerTitle.includes('scheme') || lowerTitle.includes('yojana') || lowerTitle.includes('orunodoi') || lowerTitle.includes('moina')) {
    category = 'Scheme';
  } else if (lowerTitle.includes('recruitment') || lowerTitle.includes('job') || lowerTitle.includes('adre') || lowerTitle.includes('post') || lowerTitle.includes('vacancy')) {
    category = 'Job';
  } else if (lowerTitle.includes('exam') || lowerTitle.includes('admission') || lowerTitle.includes('result') || lowerTitle.includes('hslc')) {
    category = 'Admission';
  } else if (lowerTitle.includes('cabinet') || lowerTitle.includes('decision')) {
    category = 'Cabinet';
  }

  const baseKeywords = [
    'Assam govt news',
    'Assam portal updates',
    cleanTitle.toLowerCase(),
    'অসম চৰকাৰী আঁচনি'
  ];

  const slug = slugify(cleanTitle) + '-' + Date.now().toString().slice(-4);

  return {
    id: slug,
    category,
    keywords: baseKeywords,
    metaDescription: `${cleanTitle}: Get the latest details, official updates, and eligibility guidelines on AssamPortalHub.`,
    publishDate: item.isoDate || new Date().toISOString(),
    sourceUrl: item.link,
    sourceName,
    en: {
      title: cleanTitle,
      summary: snippet.slice(0, 220) + (snippet.length > 220 ? '...' : ''),
      content: `### Overview\n\n${snippet}\n\n### Key Highlights\n- Direct update for citizens of Assam.\n- Check official eligibility and guidelines on the department portal.\n- Keep required documentation handy for quick application.\n\n### What You Should Do\n1. Verify your credentials on the official portal.\n2. Follow the verified link below to read the original press announcement.`,
      keyPoints: [
        'Latest regional update for Assam',
        'Direct links and verified portal access',
        'Official citizen welfare guidelines'
      ]
    },
    as: {
      title: `${cleanTitle} (অসমীয়া তথ্য)`,
      summary: `অসম চৰকাৰৰ শেহতীয়া গুৰুত্বপূৰ্ণ ঘোষণা আৰু প'ৰ্টেল সেৱা সংক্রান্ত আপডেট।`,
      content: `### চমু বিৱৰণ\n\nঅসম চৰকাৰৰ সংশ্লিষ্ট বিভাগৰ পৰা এই শেহতীয়া তথ্য প্ৰকাশ পাইছে। সাধাৰণ নাগৰিক আৰু আবেদনকাৰীসকলে এই সম্পৰ্কে সচেতন হোৱা উচিত।\n\n### গুৰুত্বপূৰ্ণ দিশসমূহ\n- অসমৰ নাগৰিকসকলৰ বাবে পোনপটীয়া জাননী।\n- অফিচিয়েল প'ৰ্টেলত নিৰ্দেশনা আৰু যোগ্যতা পৰীক্ষা কৰক।\n- প্ৰয়োজনীয় নথিপত্ৰ সাজু ৰাখক।\n\n### আপুনি কি কৰা উচিত?\n১. অফিচিয়েল ৱেবছাইটত গৈ সত্যাসত্য পৰীক্ষা কৰক।\n২. প্ৰয়োজনীয় আপডেট আৰু আবেদনৰ বাবে তলৰ অফিচিয়েল লিংক ব্যৱহাৰ কৰক।`,
      keyPoints: [
        'অসমৰ নাগৰিকৰ বাবে শেহতীয়া আপডেট',
        'পোনপটীয়া অফিচিয়েল লিংক আৰু সহায়িকা',
        'আবেদন প্ৰক্ৰিয়া আৰু নিয়মাবলী'
      ]
    }
  };
}

async function generateWithGemini(ai, item) {
  const prompt = `You are an SEO specialist and regional journalist for 'AssamPortalHub', a trusted high-traffic directory for Assam Government utilities, schemes, and exams.
A new news item has been published:
Title: ${item.title}
Link: ${item.link}
Content Snippet: ${item.contentSnippet || item.content || item.summary || ''}

Generate a comprehensive, high-volume SEO news update in BOTH English and Assamese (অসমীয়া).
Include high-intent Assam keywords (e.g., ADRE result, Orunodoi 3.0, Assam police, beneficiary list, Assam govt scheme).

Return ONLY valid JSON matching this exact structure:
{
  "category": "Scheme" | "Job" | "Scholarship" | "Admission" | "Alert" | "Cabinet",
  "keywords": ["5 to 8 high search volume keywords in English and Assamese"],
  "metaDescription": "Concise 150-160 char meta description targeting high CTR in Google Search",
  "sourceName": "Publisher / Source name",
  "en": {
    "title": "Engaging, SEO-optimized title in English",
    "summary": "Clear 2-sentence summary in English",
    "content": "Full formatted article in Markdown with headings (###), bullet points, eligibility, and steps to apply/check.",
    "keyPoints": ["3-4 key takeaways"]
  },
  "as": {
    "title": "SEO-optimized Assamese (অসমীয়া) title",
    "summary": "Clear 2-sentence summary in Assamese (অসমীয়া)",
    "content": "Full formatted article in Assamese (অসমীয়া) with headings (###), bullet points, and steps.",
    "keyPoints": ["3-4 key takeaways in Assamese"]
  }
}`;

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json'
    }
  });

  const parsed = JSON.parse(response.text);
  const cleanTitle = (item.title || '').replace(/ - .*$/, '').trim();
  const slug = slugify(parsed.en?.title || cleanTitle) + '-' + Date.now().toString().slice(-4);

  return {
    id: slug,
    category: parsed.category || 'Alert',
    keywords: parsed.keywords || ['Assam govt news', 'AssamPortalHub'],
    metaDescription: parsed.metaDescription || cleanTitle,
    publishDate: item.isoDate || new Date().toISOString(),
    sourceUrl: item.link,
    sourceName: parsed.sourceName || (item.title.includes(' - ') ? item.title.split(' - ').pop().trim() : 'Official Source'),
    en: parsed.en,
    as: parsed.as
  };
}

export async function syncNews() {
  console.log('--- Starting AssamPortalHub News Autoposter ---');
  const existingNews = loadExistingNews();
  const existingUrls = new Set(existingNews.map(n => n.sourceUrl));
  const existingTitles = new Set(existingNews.map(n => n.en.title.toLowerCase().trim()));

  const parser = new Parser({
    requestOptions: {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }
  });

  let ai = null;
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.length > 10) {
    try {
      ai = new GoogleGenAI({ apiKey });
      console.log('Gemini AI initialized for high-SEO keyword & translation generation.');
    } catch (e) {
      console.warn('Could not initialize Gemini AI, falling back to smart extractor:', e.message);
    }
  } else {
    console.log('No GEMINI_API_KEY found or is placeholder. Using smart extractor fallback.');
  }

  let newArticlesAdded = 0;

  for (const query of RSS_QUERIES) {
    const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-IN&gl=IN&ceid=IN:en`;
    try {
      console.log(`Fetching RSS feed for query: ${query}...`);
      const feed = await parser.parseURL(url);
      
      for (const item of (feed.items || []).slice(0, 4)) {
        if (!item.link || !item.title) continue;
        if (existingUrls.has(item.link)) continue;
        
        const cleanTitle = item.title.replace(/ - .*$/, '').toLowerCase().trim();
        if (existingTitles.has(cleanTitle)) continue;

        console.log(`Processing new article: ${item.title}`);
        let article = null;

        if (ai) {
          try {
            article = await generateWithGemini(ai, item);
          } catch (aiErr) {
            console.warn(`Gemini generation failed for "${item.title}". Falling back to smart extractor:`, aiErr.message);
            article = generateFallbackArticle(item);
          }
        } else {
          article = generateFallbackArticle(item);
        }

        if (article) {
          existingNews.unshift(article);
          existingUrls.add(item.link);
          existingTitles.add(cleanTitle);
          newArticlesAdded++;
        }
      }
    } catch (err) {
      console.error(`Failed to fetch RSS for query ${query}:`, err.message);
    }
  }

  if (newArticlesAdded > 0) {
    saveNews(existingNews);
    console.log(`Successfully autoposted ${newArticlesAdded} new articles!`);
  } else {
    console.log('No new articles found to post (all up to date).');
  }

  return { added: newArticlesAdded, total: existingNews.length };
}

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith('sync-news.mjs')) {
  syncNews()
    .then(res => {
      console.log(`Done! ${res.added} added. Total articles: ${res.total}`);
      process.exit(0);
    })
    .catch(err => {
      console.error('Fatal error syncing news:', err);
      process.exit(1);
    });
}
