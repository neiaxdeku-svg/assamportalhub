import React from 'react';
import { LangProvider } from '../../components/LangProvider';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'as' }];
}

export default async function LangLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  // Ensure we pass only valid languages
  const safeLang = lang === 'as' ? 'as' : 'en';

  return (
    <LangProvider initialLang={safeLang}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </LangProvider>
  );
}
