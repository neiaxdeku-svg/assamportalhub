import React from 'react';
import { db } from '../../../lib/firebase/client';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Assam Govt News & Scheme Updates | AssamPortalHub',
  description: 'Latest news, AI-summarized updates, and announcements regarding Assam government schemes, portals, and services.',
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function NewsPage() {
  let newsItems: any[] = [];
  try {
    const q = query(collection(db, 'news'), orderBy('publishDate', 'desc'), limit(20));
    const snapshot = await getDocs(q);
    newsItems = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      publishDate: doc.data().publishDate?.toDate ? doc.data().publishDate.toDate() : new Date()
    }));
  } catch (error) {
    console.error('Error fetching news in client SDK:', error);
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight mb-4">
          Assam News & <span className="text-green-600">Updates</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          AI-summarized latest announcements and scheme updates for the public of Assam.
        </p>
      </div>

      <div className="space-y-8">
        {newsItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-slate-200">
            <p className="text-slate-500">No recent updates found. Check back later.</p>
          </div>
        ) : (
          newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
                  {item.category || 'Update'}
                </span>
                <time className="text-sm font-medium text-slate-500">
                  {new Date(item.publishDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                </time>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h2>
              <p className="text-slate-700 text-base mb-6 max-w-4xl">{item.summary}</p>
              
              <div className="prose prose-slate prose-green max-w-none text-slate-600">
                {/* Extremely basic markdown rendering for simplicity */}
                {item.content?.split('\n').map((paragraph: string, i: number) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {item.sourceUrl && (
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:text-green-700 text-sm">
                    Read original source &rarr;
                  </a>
                </div>
              )}
            </article>
          ))
        )}
      </div>
    </main>
  );
}
