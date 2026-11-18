import { NewsItem } from './types';
import newsJson from './newsData.json';

export const newsArticles: NewsItem[] = (newsJson as any) || [];

export function getAllNews(): NewsItem[] {
  return [...newsArticles].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function getNewsById(id: string): NewsItem | undefined {
  return newsArticles.find(n => n.id === id);
}
