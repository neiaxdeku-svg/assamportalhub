"use client";
import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Zap, Info, Download, FileText, ExternalLink } from 'lucide-react';
import { useLang } from './LangProvider';

const SMART_LINK = 'https://asiafilm.org/4/03bfdcef8a23043e029419ccf984f059';

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
    <article className="max-w-3xl mx-auto px-4 py-8 sm:py-12 pb-24 sm:pb-12 min-h-screen">
      
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

      {/* Primary Dual Server CTAs */}
      <div className="mb-10 space-y-2.5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Server 1 - Official Govt Link */}
          <a 
            href={article.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white p-4 sm:p-4.5 rounded-2xl font-bold text-base shadow-md shadow-green-600/20 transition-all duration-200 active:scale-[0.98] group"
          >
            <Zap className="w-5 h-5 mr-2 -ml-1 text-green-100 group-hover:text-white" />
            <span>{lang === 'as' ? 'ছাৰ্ভাৰ ১: অফিচিয়েল প\'ৰ্টেল' : 'Server 1: Official Portal'}</span>
          </a>

          {/* Server 2 - Fast Access Smartlink */}
          <a 
            href={SMART_LINK}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="flex items-center justify-center w-full bg-slate-900 hover:bg-black text-white p-4 sm:p-4.5 rounded-2xl font-bold text-base shadow-md shadow-slate-900/10 transition-all duration-200 active:scale-[0.98] group"
          >
            <ExternalLink className="w-5 h-5 mr-2 -ml-1 text-emerald-400 group-hover:text-white" />
            <span>{lang === 'as' ? 'ছাৰ্ভাৰ ২: দ্ৰুত লিংক (Direct)' : 'Server 2: Fast Link (Mirror)'}</span>
          </a>
        </div>
        <p className="text-center text-xs text-slate-500 font-medium">
          {lang === 'as' ? '💡 অফিচিয়েল চাৰ্ভাৰ ব্যস্ত থাকিলে ছাৰ্ভাৰ ২ ব্যৱহাৰ কৰক' : '💡 If official server takes time to respond, use Server 2 for quick access.'}
        </p>
      </div>

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

      {/* Guidelines & Application Form PDF Card */}
      <section className="mb-12 bg-gradient-to-br from-emerald-50 via-teal-50/40 to-white border border-emerald-200/80 rounded-2xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full mb-2">
              <FileText className="w-3.5 h-3.5 mr-1" />
              {lang === 'as' ? 'নিৰ্দেশনাৱলী আৰু প্ৰপত্ৰ' : 'User Guide & Checklist'}
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              {lang === 'as' ? `${article.portalName} সহায়িকা আৰু প্ৰপত্ৰ (PDF)` : `Download ${article.portalName} User Guide (PDF)`}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {lang === 'as' ? 'প্ৰয়োজনীয় নথিপত্ৰৰ তালিকা, যোগ্যতা আৰু আবেদনৰ নিৰ্দেশনা।' : 'Direct checklist, requirements, and offline process walkthrough.'}
            </p>
          </div>
          <a
            href={SMART_LINK}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-5 py-3.5 rounded-xl shadow-md transition-all duration-200 active:scale-[0.98]"
          >
            <Download className="w-4 h-4 mr-2" />
            {lang === 'as' ? 'ডাউনলোড কৰক (PDF)' : 'Download PDF / Guide'}
          </a>
        </div>
      </section>

      {/* Secondary Dual CTA Section */}
      <div className="mb-12 pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a 
          href={article.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between w-full bg-slate-900 hover:bg-black text-white p-4.5 sm:p-5 rounded-2xl font-semibold transition-all duration-200 active:scale-[0.98] shadow-md shadow-slate-200"
        >
          <span>{t.open} {article.portalName}</span>
          <ChevronRight className="w-5 h-5 text-slate-400" />
        </a>
        <a 
          href={SMART_LINK}
          target="_blank"
          rel="nofollow sponsored noopener"
          className="flex items-center justify-between w-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200/90 p-4.5 sm:p-5 rounded-2xl font-semibold transition-all duration-200 active:scale-[0.98] shadow-sm"
        >
          <span className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2.5"></span>
            {lang === 'as' ? 'অনলাইন ষ্টেটাছ / সমাধান' : 'Check Status / Solutions'}
          </span>
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

      {/* Sticky Mobile Bottom Quick Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2.5 sm:hidden shadow-2xl">
        <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
          <a
            href={article.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white text-xs font-bold py-3 px-2 rounded-xl text-center shadow-sm active:scale-[0.98]"
          >
            <span>{lang === 'as' ? 'অফিচিয়েল প\'ৰ্টেল ↗' : 'Official Portal ↗'}</span>
          </a>
          <a
            href={SMART_LINK}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="flex items-center justify-center bg-slate-900 hover:bg-black text-white text-xs font-bold py-3 px-2 rounded-xl text-center shadow-sm active:scale-[0.98]"
          >
            <span className="flex items-center">
              <Zap className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              {lang === 'as' ? 'দ্ৰুত লিংক ⚡' : 'Fast Link ⚡'}
            </span>
          </a>
        </div>
      </div>

    </article>
  );
}
