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
