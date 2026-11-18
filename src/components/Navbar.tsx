"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, Zap } from 'lucide-react';
import { useLang } from './LangProvider';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLang();

  const t = {
    en: { home: 'Home', news: 'News & Updates', about: 'About', contact: 'Contact', toggle: 'Assamese' },
    as: { home: 'মুখ্যপৃষ্ঠা', news: 'খবৰ আৰু আপডেট', about: 'আমাৰ বিষয়ে', contact: 'যোগাযোগ', toggle: 'English' }
  }[lang];

  // Helper to construct locale-aware paths
  const lPath = (path: string) => {
    if (lang === 'en') return path;
    if (path === '/') return '/as';
    return `/as${path}`;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200/60 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href={lPath('/')} className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
              <div className="bg-green-600 p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-slate-800 hidden sm:block">AssamPortalHub</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href={lPath('/')} className="text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors">{t.home}</Link>
            <Link href={lPath('/news')} className="text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors flex items-center gap-1"><span className="relative flex h-2 w-2 mr-1"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>{t.news}</Link>
            <Link href={lPath('/about')} className="text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors">{t.about}</Link>
            <Link href={lPath('/contact')} className="text-sm font-semibold text-slate-600 hover:text-green-600 transition-colors">{t.contact}</Link>
            
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-1.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-green-700 px-4 py-2 rounded-full transition-colors border border-slate-200 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              <span>{t.toggle}</span>
            </button>
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-1 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full border border-slate-200 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.toggle}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white shadow-lg absolute w-full left-0">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href={lPath('/')} 
              className="block px-4 py-3 sm:px-6 text-base font-semibold text-slate-700 hover:text-green-600 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {t.home}
            </Link>
            <Link 
              href={lPath('/news')} 
              className="block px-4 py-3 sm:px-6 text-base font-semibold text-slate-700 hover:text-green-600 hover:bg-slate-50 flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative flex h-2 w-2 mr-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
              {t.news}
            </Link>
            <Link 
              href={lPath('/about')} 
              className="block px-4 py-3 sm:px-6 text-base font-semibold text-slate-700 hover:text-green-600 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {t.about}
            </Link>
            <Link 
              href={lPath('/contact')} 
              className="block px-4 py-3 sm:px-6 text-base font-semibold text-slate-700 hover:text-green-600 hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {t.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
