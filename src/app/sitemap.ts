import { MetadataRoute } from 'next';
import { articles } from '../data';
import { getAllNews } from '../news';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://assamportalhub.vercel.app';
  const news = getAllNews();

  const newsUrls = news.flatMap((item) => [
    {
      url: `${baseUrl}/news/${item.id}`,
      lastModified: new Date(item.publishDate),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/as/news/${item.id}`,
      lastModified: new Date(item.publishDate),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]);

  const portalUrls = articles.flatMap((article) => [
    {
      url: `${baseUrl}/portal/${article.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/as/portal/${article.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]);

  const staticUrls = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-conditions',
    '/disclaimer',
    '/news',
  ].flatMap((route) => [
    {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/news' ? ('hourly' as const) : ('weekly' as const),
      priority: route === '' ? 1.0 : route === '/news' ? 0.9 : 0.6,
    },
    {
      url: `${baseUrl}/as${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/news' ? ('hourly' as const) : ('weekly' as const),
      priority: route === '' ? 1.0 : route === '/news' ? 0.9 : 0.6,
    },
  ]);

  return [...staticUrls, ...newsUrls, ...portalUrls];
}
