import React from 'react';
import { getAllNews, getNewsById } from '../../../../news';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

export function generateStaticParams() {
  const news = getAllNews();
  return news.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
  const { lang, id } = await params;
  const isAssamese = lang === 'as';
  const article = getNewsById(id);

  if (!article) return { title: 'News Not Found | AssamPortalHub' };

  const loc = isAssamese ? article.as : article.en;
  const canonicalUrl = `https://assamportalhub.vercel.app${isAssamese ? '/as' : ''}/news/${article.id}`;

  return {
    title: `${loc.title} | AssamPortalHub`,
    description: article.metaDescription || loc.summary,
    keywords: article.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: loc.title,
      description: loc.summary,
      url: canonicalUrl,
      type: 'article',
      publishedTime: article.publishDate,
      authors: ['AssamPortalHub News Desk'],
      tags: article.keywords,
    },
    twitter: {
      card: 'summary_large_image',
      title: loc.title,
      description: loc.summary,
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ lang: string; id: string }>;
}) {
  const { lang, id } = await params;
  const isAssamese = lang === 'as';
  const article = getNewsById(id);

  if (!article) {
    notFound();
  }

  const loc = isAssamese ? article.as : article.en;
  const otherNews = getAllNews()
    .filter((n) => n.id !== article.id)
    .slice(0, 3);

  const langPrefix = isAssamese ? '/as' : '';
  const oppositePrefix = isAssamese ? '' : '/as';
  const switchLangLabel = isAssamese ? 'Read in English' : 'অসমীয়াত পঢ়ক';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: loc.title,
    description: loc.summary,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://assamportalhub.vercel.app${langPrefix}/news/${article.id}`,
    },
    author: {
      '@type': 'Organization',
      name: 'AssamPortalHub Regional Desk',
      url: 'https://assamportalhub.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AssamPortalHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://assamportalhub.vercel.app/favicon.ico',
      },
    },
    keywords: (article.keywords || []).join(', '),
  };

  return (
    <>
      <script
        key="schema-news-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Breadcrumb & Language Switch */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-sm text-slate-500">
          <nav className="flex items-center gap-2">
            <Link href={`${langPrefix}/`} className="hover:text-green-600">
              {isAssamese ? 'গৃহ' : 'Home'}
            </Link>
            <span>/</span>
            <Link href={`${langPrefix}/news`} className="hover:text-green-600">
              {isAssamese ? 'বাতৰি' : 'News'}
            </Link>
            <span>/</span>
            <span className="text-slate-800 font-medium truncate max-w-[200px]">
              {loc.title}
            </span>
          </nav>

          <Link
            href={`${oppositePrefix}/news/${article.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 border border-green-200 text-green-700 text-xs font-semibold rounded-full hover:bg-green-100 transition-colors"
          >
            🌐 {switchLangLabel}
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {article.category}
            </span>
            <span className="text-xs font-medium text-slate-500">
              {isAssamese ? 'উৎস:' : 'Source:'} {article.sourceName}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <time className="text-xs font-medium text-slate-500" dateTime={article.publishDate}>
              {new Date(article.publishDate).toLocaleDateString(isAssamese ? 'as-IN' : 'en-US', {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {loc.title}
          </h1>

          <div className="p-4 sm:p-5 bg-gradient-to-r from-green-50/80 to-emerald-50/50 border-l-4 border-green-500 rounded-r-2xl">
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              {loc.summary}
            </p>
          </div>
        </header>

        {/* Key Takeaways */}
        {loc.keyPoints && loc.keyPoints.length > 0 && (
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-8">
            <h2 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-green-600">📌</span>
              {isAssamese ? 'মুখ্য আকৰ্ষণ আৰু তথ্য' : 'Key Highlights & Takeaways'}
            </h2>
            <ul className="space-y-2">
              {loc.keyPoints.map((kp, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700">
                  <span className="text-green-500 font-bold mt-0.5">✓</span>
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Content */}
        <article className="prose prose-slate prose-green max-w-none text-slate-700 text-base sm:text-lg leading-relaxed mb-10">
          {loc.content.split('\n').map((line, idx) => {
            if (line.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3">
                  {line.replace('### ', '')}
                </h3>
              );
            }
            if (line.startsWith('- ')) {
              return (
                <li key={idx} className="ml-4 list-disc text-slate-700 my-1">
                  {line.replace('- ', '')}
                </li>
              );
            }
            if (/^\d+\.\s/.test(line)) {
              return (
                <div key={idx} className="ml-4 font-medium text-slate-700 my-1">
                  {line}
                </div>
              );
            }
            if (line.trim().length === 0) return null;
            return (
              <p key={idx} className="mb-4">
                {line}
              </p>
            );
          })}
        </article>

        {/* Source and Verification */}
        {article.sourceUrl && (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
            <div>
              <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                {isAssamese ? 'মূল উৎস সত্যাপন' : 'Original Source Verification'}
              </p>
              <p className="text-sm text-slate-600">
                {isAssamese
                  ? 'এই তথ্য প্ৰকাশ কৰিছে চৰকাৰী সংবাদ বা প্ৰেছ এজেন্সীয়ে।'
                  : `Reported via ${article.sourceName}.`}
              </p>
            </div>
            <a
              href={article.sourceUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors whitespace-nowrap"
            >
              {isAssamese ? 'মূল বাতৰি চাওক' : 'View Original Source'}
              <span>&rarr;</span>
            </a>
          </div>
        )}

        {/* SEO Keywords tags */}
        {article.keywords && article.keywords.length > 0 && (
          <div className="mb-12">
            <p className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
              {isAssamese ? 'সম্পৰ্কিত সন্ধান শব্দ (Keywords)' : 'Related Search Topics'}
            </p>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related News */}
        {otherNews.length > 0 && (
          <section className="pt-10 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 font-display">
              {isAssamese ? 'অন্যান্য শেহতীয়া বাতৰি' : 'More Latest Assam Updates'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherNews.map((on) => {
                const onLoc = isAssamese ? on.as : on.en;
                return (
                  <Link
                    key={on.id}
                    href={`${langPrefix}/news/${on.id}`}
                    className="p-4 bg-white rounded-xl border border-slate-200 hover:border-green-300 hover:shadow-sm transition-all group"
                  >
                    <span className="text-[11px] font-bold text-green-700 uppercase mb-2 block">
                      {on.category}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-800 group-hover:text-green-600 transition-colors line-clamp-2 mb-2">
                      {onLoc.title}
                    </h3>
                    <time className="text-[11px] text-slate-400 block">
                      {new Date(on.publishDate).toLocaleDateString(isAssamese ? 'as-IN' : 'en-US', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </time>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
