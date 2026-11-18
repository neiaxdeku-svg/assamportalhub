"use client";
import React, { useEffect, useRef } from 'react';

interface NativeAdProps {
  className?: string;
}

export default function NativeAd({ className = '' }: NativeAdProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if script is already in the document
    const scriptId = 'adsterra-native-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.setAttribute('data-cfasync', 'false');
      script.src = 'https://bicea.org/21/a187d44c3035458cf7190c0db42070cf';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <aside aria-label="Sponsored Content" className={`my-8 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Sponsored Recommendations
        </span>
        <div className="h-px bg-slate-200/80 flex-grow"></div>
      </div>
      <div
        ref={containerRef}
        className="w-full min-h-[100px] rounded-2xl overflow-hidden flex justify-center items-center bg-slate-100/40 p-2"
      >
        <div id="container-a187d44c3035458cf7190c0db42070cf" className="w-full"></div>
      </div>
    </aside>
  );
}
