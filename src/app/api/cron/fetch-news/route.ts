export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { db } from '../../../../lib/firebase/client';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import Parser from 'rss-parser';

export async function GET(request: Request) {
  const authHeader = request.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Debug keys availability
  console.log("Checking Environment Keys in Cron:");
  console.log("GEMINI_API_KEY exists:", !!process.env.GEMINI_API_KEY);
  console.log("Does GEMINI_APT_KEY exist (Typo check)?", !!process.env.GEMINI_APT_KEY);

  if (!process.env.GEMINI_API_KEY) {
    if (process.env.GEMINI_APT_KEY) {
      return NextResponse.json({ error: "Configuration Error: You typed 'GEMINI_APT_KEY' instead of 'GEMINI_API_KEY' in Vercel. Please fix the typo." }, { status: 500 });
    }
    return NextResponse.json({ error: "Configuration Error: GEMINI_API_KEY is missing in Vercel Environment Variables." }, { status: 500 });
  }

  try {
    const parser = new Parser({
      requestOptions: {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      }
    });

    let feed;
    try {
      feed = await parser.parseURL('https://news.google.com/rss/search?q=assam+government+scheme+OR+portal+OR+assam+chief+minister&hl=en-IN&gl=IN&ceid=IN:en');
    } catch (parseError: any) {
      console.error("RSS Parsing failed (possibly blocked by Google):", parseError.message);
      return NextResponse.json({ error: "Failed to fetch RSS. Google might be blocking the request." }, { status: 502 });
    }

    if (!feed || !feed.items || feed.items.length === 0) {
      return NextResponse.json({ message: 'No news found' });
    }

    const { env } = process;
    const ai = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
    
    let postedCount = 0;

    // Check last 5 news items
    for (const item of feed.items.slice(0, 5)) {
      if (!item.title || !item.link) continue;

      // Check if we already processed this URL
      const q = query(collection(db, 'news'), where('sourceUrl', '==', item.link));
      const existingRef = await getDocs(q);
      if (!existingRef.empty) {
        continue;
      }

      // Generate content using Gemini
      const prompt = `You are an assistant for the 'AssamPortalHub' website. 
A new news article has been published:
Title: ${item.title}
Link: ${item.link}
Content Snippet: ${item.contentSnippet || item.content || item.summary || ''}

Write a helpful, concise update post for the citizens of Assam formatting this news. 
It should be well-structured. Extract what the scheme/update is about, who is eligible, and what actions to take. 
Return the result in JSON format with these exact fields:
{
  "title": "A clear, user-friendly title",
  "summary": "A short 1-2 sentence summary snippet",
  "content": "The full formatted content in Markdown. Keep it strictly focused on facts. Do not invent details.",
  "category": "e.g., 'New Scheme', 'Updates', 'Alerts'"
}`;

      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: "application/json",
          }
        });

        const responseText = response.text;
        let generatedData;
        if (responseText) {
            generatedData = JSON.parse(responseText);
        } else {
            continue;
        }

        await addDoc(collection(db, 'news'), {
          title: generatedData.title,
          summary: generatedData.summary,
          content: generatedData.content,
          category: generatedData.category || 'News',
          sourceUrl: item.link,
          publishDate: new Date(),
          originalTitle: item.title
        });

        postedCount++;
      } catch (genError: any) {
         console.error("Gemini Generation Error:", genError);
         // If one item fails, we try the next one.
      }
    }

    return NextResponse.json({ message: 'News synced successfully', postedCount });

  } catch (error: any) {
    console.error('CRITICAL ERROR fetching/syncing news:', error);
    return NextResponse.json({ 
        error: error.message || 'Unknown Server Error',
        stack: error.stack
    }, { status: 500 });
  }
}
