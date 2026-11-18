"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Search, LinkIcon } from 'lucide-react';
import { articles } from '../data';
import { useLang } from './LangProvider';

export default function HomeContent() {
  const { lang } = useLang();
  
  // We use simple local state and avoid URL updates to ensure Static HTML generation doesn't get opted out or require Suspense wrappers.
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Job', 'Scheme', 'Scholarship', 'Service', 'Admission', 'Utility', 'Information', 'Status & Solutions'];

  const filteredArticles = articles.filter(article => {
    const localeObj = article[lang] || article.en;
    const matchesSearch = 
      article.portalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keyword?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      localeObj.title.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const uiTexts = {
    en: {
      title: 'AssamPortalHub',
      desc: 'Your fast, minimal directory for Assam Government utilities. Find direct links, bypass broken sites, and get things done quickly.',
      searchPlaceholder: 'Search portals (e.g., APDCL, Samarth)...',
    },
    as: {
      title: 'AssamPortalHub',
      desc: 'অসম চৰকাৰৰ সেৱাসমূহৰ এক দ্ৰুত আৰু সৰল ডাইৰেক্টৰি। পোনপটীয়া লিংক বিচাৰি উলিয়াওক, সময় বচাওক আৰু দ্ৰুতভাৱে কাম সম্পূৰ্ণ কৰক।',
      searchPlaceholder: 'প\'ৰ্টেল বিচাৰক (যেনে APDCL, Samarth)...',
    }
  };

  const t = uiTexts[lang];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
      <header className="mb-12 text-center mt-4 sm:mt-8">
        <div className="inline-flex items-center justify-center p-4 sm:p-5 bg-white shadow-xl shadow-green-600/10 border border-green-100 rounded-3xl mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-300">
          <LinkIcon className="w-10 h-10 sm:w-12 sm:h-12 text-green-500" />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4 sm:mb-6 font-display">
          {t.title}
        </h1>
        <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed px-4">
          {t.desc}
        </p>
      </header>

      {/* Search Bar */}
      <div className="relative mb-8 sm:mb-12 max-w-2xl mx-auto group">
        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-transform group-focus-within:scale-110">
          <Search className="h-6 w-6 text-slate-400 group-focus-within:text-green-500 transition-colors" />
        </div>
        <input
          type="text"
          className="block w-full pl-14 pr-6 py-4 sm:py-5 sm:text-lg border-2 border-slate-200/80 hover:border-slate-300 rounded-3xl leading-5 bg-white/80 backdrop-blur-sm placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all shadow-sm"
          placeholder={t.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="relative max-w-4xl mx-auto mb-10 sm:mb-14">
        {/* Subtle fade edges for horizontal scrolling */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-10"></div>
        
        <div className="flex overflow-x-auto hide-scrollbar space-x-3 px-4 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 translate-y-0 text-base'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100 hover:text-slate-900 hover:-translate-y-0.5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <section className="space-y-4">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-10 text-slate-500 bg-white border border-slate-100 rounded-2xl">
            No portals found matching your search or category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
            {filteredArticles.map((article) => {
              const content = article[lang] || article.en;
              const href = lang === 'as' ? `/as/portal/${article.id}` : `/portal/${article.id}`;
              return (
                <Link 
                  key={article.id} 
                  href={href}
                  className="group relative bg-white border border-slate-200/80 overflow-hidden rounded-[1.5rem] p-6 sm:p-7 hover:shadow-2xl hover:shadow-green-500/10 hover:border-green-300/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -mr-16 -mt-16"></div>
                  
                  <div className="flex justify-between items-start gap-4 mb-4 relative z-10">
                    <div className="flex-1 pr-4">
                      <div className="flex flex-wrap items-center gap-2.5 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 uppercase tracking-widest border border-slate-200/60 group-hover:bg-green-100 group-hover:text-green-800 transition-colors">
                          {article.category}
                        </span>
                        <span className="text-sm text-slate-500 font-medium">{article.department}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight group-hover:text-green-600 transition-colors font-display">
                        {article.portalName}
                      </h2>
                    </div>
                    <div className="flex-shrink-0 bg-white shadow-sm border border-slate-100 rounded-full p-3 group-hover:bg-green-500 group-hover:border-green-500 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-green-500/30">
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-base text-slate-600 mt-auto line-clamp-2 relative z-10 font-medium">
                    {content.hookSentences?.[0] || content.services}
                  </p>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
