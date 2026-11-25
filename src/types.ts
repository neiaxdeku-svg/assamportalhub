export interface FAQ {
  question: string;
  answer: string;
}

export interface LocalizedContent {
  title: string;
  hookSentences: [string, string];
  services: string;
  checklist: string[];
  ctaText: string;
  faqs: FAQ[];
}

export interface ArticleData {
  id: string;
  category: string;
  keyword: string;
  metaDescription: string;
  portalName: string;
  department: string;
  ctaLink: string;
  en: LocalizedContent;
  as: LocalizedContent;
}

export interface LocalizedNewsContent {
  title: string;
  summary: string;
  content: string;
  keyPoints: string[];
}

export interface NewsItem {
  id: string;
  category: string;
  keywords: string[];
  metaDescription: string;
  publishDate: string;
  sourceUrl: string;
  sourceName: string;
  en: LocalizedNewsContent;
  as: LocalizedNewsContent;
  uploadedAt?: string; // Timestamp when the article was added to our platform
}
