"use client";
import React from 'react';
import Link from 'next/link';
import { useLang } from './LangProvider';

export default function Footer() {
  const { lang } = useLang();

  const t = {
    en: {
      desc: 'Your fast directory for Assam Government utilities. Not officially affiliated with the government.',
      about: 'About Us',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      disclaimer: 'Disclaimer'
    },
    as: {
      desc: 'অসম চৰকাৰৰ সেৱাসমূহৰ বাবে আপোনাৰ দ্ৰুত ডাইৰেক্টৰি। চৰকাৰৰ সৈতে কোনো আধিকাৰিক সম্পৰ্ক নাই।',
      about: 'আমাৰ বিষয়ে',
      contact: 'যোগাযোগ কৰক',
      privacy: 'গোপনীয়তা নীতি',
      terms: 'সেৱাৰ চৰ্তসমূহ',
      disclaimer: 'অস্বীকাৰযোগ্যতা'
    }
  }[lang];

  // Helper to construct locale-aware paths
  const lPath = (path: string) => {
    if (lang === 'en') return path;
    if (path === '/') return '/as';
    return `/as${path}`;
  };

  return (
    <footer className="bg-white/70 backdrop-blur-lg border-t border-slate-200/60 mt-auto z-10 relative">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <span className="font-display font-extrabold text-xl tracking-tight text-slate-800 block mb-3">AssamPortalHub</span>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{t.desc}</p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href={lPath('/')} className="text-sm font-medium text-slate-500 hover:text-green-600 transition-colors">Home</Link></li>
              <li><Link href={lPath('/about')} className="text-sm font-medium text-slate-500 hover:text-green-600 transition-colors">{t.about}</Link></li>
              <li><Link href={lPath('/contact')} className="text-sm font-medium text-slate-500 hover:text-green-600 transition-colors">{t.contact}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              <li><Link href={lPath('/privacy-policy')} className="text-sm font-medium text-slate-500 hover:text-green-600 transition-colors">{t.privacy}</Link></li>
              <li><Link href={lPath('/terms-conditions')} className="text-sm font-medium text-slate-500 hover:text-green-600 transition-colors">{t.terms}</Link></li>
              <li><Link href={lPath('/disclaimer')} className="text-sm font-medium text-slate-500 hover:text-green-600 transition-colors">{t.disclaimer}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 mt-8 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-slate-400">&copy; {new Date().getFullYear()} AssamPortalHub.vercel.app</p>
        </div>
      </div>
    </footer>
  );
}
