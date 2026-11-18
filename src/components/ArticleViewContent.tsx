"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Zap, Info } from 'lucide-react';
import { useLang } from './LangProvider';

export default function ArticleViewContent({ article }: { article: any }) {
  const { lang } = useLang();
  
  if (!article) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Portal Not Found</h2>
        <Link href="/" className="text-green-600 hover:underline">Return Home</Link>
      </div>
    );
  }

  const content = article[lang] || article.en;

  const t = {
    en: { back: 'Directory', checklist: 'Checklist Before Applying', open: 'Open', faq: 'Frequently Asked Questions', services: 'Services Covered', dept: 'Department', portal: 'Portal', highlights: 'Portal Highlights' },
    as: { back: 'ডাইৰেক্টৰি', checklist: 'আবেদনৰ আগত প্ৰয়োজনীয় নথিপত্ৰ', open: 'খোলক', faq: 'সঘনাই সুধা প্ৰশ্ন', services: 'অন্তৰ্ভুক্ত সেৱাসমূহ', dept: 'বিভাগ', portal: 'প\'ৰ্টেল', highlights: 'প\'ৰ্টেলৰ মূল কথা' }
  }[lang];

  return (
    <article className="max-w-3xl mx-auto px-4 py-8 sm:py-12 min-h-screen">
      
      {/* Breadcrumb / Back Link */}
      <nav className="mb-8 block">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-green-600 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200/80 shadow-sm"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          {t.back}
        </Link>
      </nav>

      {/* Main H1 Title */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight font-display">
        {content.title}
      </h1>

      {/* Hook Sentences */}
      <div className="text-lg text-slate-700 leading-relaxed mb-8">
        <p className="mb-3 font-semibold text-slate-800">{content.hookSentences[0]}</p>
        <p>
          {content.hookSentences[1].replace(/\[.*?\]/, '')}
        </p>
      </div>

      {/* Primary CTA Button */}
      <a 
        href={article.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white p-4 sm:p-5 rounded-2xl font-bold text-base sm:text-lg shadow-lg shadow-green-600/20 transition-all duration-200 active:scale-[0.98] mb-10 group"
      >
        <Zap className="w-5 h-5 mr-2 -ml-2 text-green-100 group-hover:text-white" />
        {content.ctaText.replace('👉 ', '')}
      </a>

      {/* Highlights Table Alternative */}
      <section className="mb-10 bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm">
        <h3 className="flex items-center text-sm font-bold text-slate-500 uppercase tracking-widest mb-5">
          <Info className="w-4 h-4 mr-2" /> {t.highlights}
        </h3>
        <dl className="space-y-4">
          <div className="grid grid-cols-3 gap-2 border-b border-slate-200/60 pb-3">
            <dt className="text-slate-500 text-sm font-medium">{t.portal}</dt>
            <dd className="col-span-2 text-slate-900 font-semibold text-sm">{article.portalName}</dd>
          </div>
          <div className="grid grid-cols-3 gap-2 border-b border-slate-200/60 pb-3">
            <dt className="text-slate-500 text-sm font-medium">{t.dept}</dt>
            <dd className="col-span-2 text-slate-900 font-medium text-sm">{article.department}</dd>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <dt className="text-slate-500 text-sm font-medium">{t.services}</dt>
            <dd className="col-span-2 text-slate-900 font-medium text-sm">{content.services}</dd>
          </div>
        </dl>
      </section>

      {/* Step-by-Step Mobile Checklist */}
      <section className="mb-12 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">{t.checklist}</h3>
        <ul className="space-y-5">
          {content.checklist.map((step, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-green-50 text-green-600 font-bold text-sm mt-0.5 mr-4 border border-green-100">
                {index + 1}
              </span>
              <span className="text-slate-700 text-base leading-relaxed">{step}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Secondary CTA Button */}
      <div className="mb-12 pt-6">
        <a 
          href={article.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full bg-slate-900 hover:bg-black text-white p-5 rounded-2xl font-semibold transition-all duration-200 active:scale-[0.98] shadow-lg shadow-slate-200"
        >
          <span>{t.open} {article.portalName}</span>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </a>
      </div>

      {/* FAQs */}
      <section className="mb-12 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-900 mb-6 font-display pb-3 border-b border-slate-100">{t.faq}</h3>
        <div className="space-y-6">
          {content.faqs.map((faq, index) => (
            <div key={index}>
              <h4 className="text-base font-bold text-slate-900 mb-2 flex items-start">
                <span className="text-green-600 mr-2 shrink-0">Q.</span>
                {faq.question}
              </h4>
              <p className="text-slate-600 text-base leading-relaxed flex items-start">
                <span className="text-slate-300 font-bold mr-2 shrink-0">A.</span>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
