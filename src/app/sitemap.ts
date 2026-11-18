import { MetadataRoute } from 'next';
import { articles } from '../data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://assamportalhub.vercel.app';

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
    }
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
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.6,
    },
    {
      url: `${baseUrl}/as${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.6,
    }
  ]);

  return [...staticUrls, ...portalUrls];
}
