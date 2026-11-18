"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type Lang = 'en' | 'as';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  toggleLang: () => {},
});

export function LangProvider({ children, initialLang = 'en' }: { children: React.ReactNode, initialLang?: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setLang(initialLang);
  }, [initialLang]);

  const toggleLang = () => {
    const nextLayer = lang === 'en' ? 'as' : 'en';
    
    // We compute the new path. 
    // Wait, the Next.js active pathname for "app/[lang]/about" will be "/en/about" or "/as/about".
    // Wait, because we used a rewrite, `pathname` inside client components actually reflects the user's visible URL !
    // So if the user is on `/`, pathname is `/`. If the user is on `/about`, pathname is `/about`.
    // If the user is on `/as/about`, pathname is `/as/about`.
    
    // If current is 'as', remove the '/as' prefix.
    if (lang === 'as') {
      const newPath = pathname.replace(/^\/as/, '') || '/';
      router.push(newPath);
    } else {
      // Current is 'en', but visible path is like `/` or `/about`
      // We prepend `/as`
      const newPath = `/as${pathname === '/' ? '' : pathname}`;
      router.push(newPath);
    }
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
