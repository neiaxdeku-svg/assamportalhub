import React from 'react';
import { getAllNews } from '../../../news';
import { Metadata } from 'next';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isAssamese = lang === 'as';

  return {
    title: isAssamese
      ? 'শেহতীয়া অসম বাতৰি আৰু চৰকাৰী আঁচনি আপডেট | AssamPortalHub'
      : 'Latest Assam Govt News, ADRE, Schemes & Job Updates | AssamPortalHub',
    description: isAssamese
      ? 'অসম চৰকাৰৰ শেহতীয়া আঁচনি, নিযুক্তি (ADRE), অৰুণোদয়, ছাত্ৰবৃত্তি আৰু চৰকাৰী সেৱাৰ সত্যাসত্য তথ্য।'
      : 'Real-time verified news and updates on Assam Direct Recruitment (ADRE), Orunodoi 3.0, Nijut Moina, scholarship, and govt schemes.',
    keywords: [
      'Assam govt news',
      'ADRE result 2026',
      'Orunodoi 3.0 list',
      'Assam police recruitment',
      'Assam cabinet decisions',
      'অসম বাতৰি',
      'অসম চৰকাৰী আঁচনি'
    ],
  };
}

export const revalidate = 60;

export default async function NewsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const isAssamese = lang === 'as';
  const newsItems = getAllNews();

  const langPrefix = isAssamese ? '/as' : '';

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-green-700 text-xs font-semibold mb-4 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          {isAssamese ? 'লাইভ আঞ্চলিক আপডেট' : 'Live Regional News'}
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
          {isAssamese ? (
            <>অসমৰ শেহতীয়া <span className="text-green-600">বাতৰি আৰু আপডেট</span></>
          ) : (
            <>Assam News & <span className="text-green-600">Scheme Updates</span></>
          )}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          {isAssamese
            ? 'অসম চৰকাৰৰ আঁচনি, নিযুক্তি (ADRE), অৰুণোদয় আৰু গুৰুত্বপূৰ্ণ জনসেৱা সন্দৰ্ভত শেহতীয়া সত্যাসত্য তথ্য।'
            : 'Verified, auto-updated alerts on Assam Government schemes, ADRE recruitment, Orunodoi, and student scholarships.'}
        </p>
      </div>

      <div className="space-y-6">
        {newsItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl shadow-sm border border-slate-200">
            <p className="text-slate-500 text-lg">
              {isAssamese ? 'কোনো শেহতীয়া আপডেট পোৱা নগ\'ল।' : 'No recent updates found. Check back soon.'}
            </p>
          </div>
        ) : (
          newsItems.map((item) => {
            const loc = isAssamese ? item.as : item.en;
            const articleUrl = `${langPrefix}/news/${item.id}`;
            const categoryColors: Record<string, string> = {
              Scheme: 'bg-emerald-50 text-emerald-700 border-emerald-200',
              Job: 'bg-blue-50 text-blue-700 border-blue-200',
              Admission: 'bg-indigo-50 text-indigo-700 border-indigo-200',
              Cabinet: 'bg-purple-50 text-purple-700 border-purple-200',
              Alert: 'bg-amber-50 text-amber-700 border-amber-200',
            };
            const badgeClass = categoryColors[item.category] || 'bg-slate-50 text-slate-700 border-slate-200';

            return (
              <article
                key={item.id}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-green-300 transition-all duration-200"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${badgeClass} uppercase tracking-wider`}>
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-medium text-slate-500">{item.sourceName}</span>
                  </div>
                  <time className="text-xs font-medium text-slate-500" dateTime={item.publishDate}>
                    {new Date(item.publishDate).toLocaleDateString(isAssamese ? 'as-IN' : 'en-US', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-green-600 transition-colors mb-3 leading-snug">
                  <Link href={articleUrl}>
                    {loc.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base mb-5 leading-relaxed line-clamp-3">
                  {loc.summary}
                </p>

                {/* Key Points snippet */}
                {loc.keyPoints && loc.keyPoints.length > 0 && (
                  <div className="bg-slate-50 rounded-xl p-4 mb-5 border border-slate-100">
                    <p className="text-xs font-bold uppercase text-slate-500 mb-2 tracking-wider">
                      {isAssamese ? 'মুখ্য দিশসমূহ' : 'Key Highlights'}
                    </p>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-700">
                      {loc.keyPoints.slice(0, 2).map((kp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {(item.keywords || []).slice(0, 3).map((kw, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                        #{kw}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={articleUrl}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:text-green-700"
                  >
                    {isAssamese ? 'সম্পূৰ্ণ পঢ়ক' : 'Read Full Update'}
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                </div>
              </article>
            );
          })
        )}
      </div>
    </main>
  );
}
