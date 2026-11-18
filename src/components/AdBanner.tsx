"use client";
import React from 'react';

interface AdBannerProps {
  className?: string;
}

export default function AdBanner({ className = '' }: AdBannerProps) {
  const desktopSrcDoc = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: transparent; display: flex; justify-content: center; align-items: center; overflow: hidden; }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      atOptions = {
        'key' : 'f90d94f27d5a589e4c9e8c06a8f0279c',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://bicea.org/22/f90d94f27d5a589e4c9e8c06a8f0279c"></script>
  </body>
</html>`;

  const mobileSrcDoc = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { background: transparent; display: flex; justify-content: center; align-items: center; overflow: hidden; }
    </style>
  </head>
  <body>
    <script type="text/javascript">
      atOptions = {
        'key' : 'efce4082bba9af9cba17bcd4dfc41a77',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    </script>
    <script type="text/javascript" src="https://bicea.org/22/efce4082bba9af9cba17bcd4dfc41a77"></script>
  </body>
</html>`;

  return (
    <aside aria-label="Advertisement" className={`my-8 flex flex-col items-center justify-center ${className}`}>
      <span className="text-[10px] font-medium tracking-wider text-slate-400 uppercase mb-1.5 select-none">
        Advertisement
      </span>
      {/* Desktop Banner: 728x90 */}
      <div className="hidden md:flex justify-center items-center w-[728px] h-[90px] min-h-[90px] overflow-hidden bg-slate-100/50 rounded-lg">
        <iframe
          title="Sponsored Ad 728x90"
          width={728}
          height={90}
          srcDoc={desktopSrcDoc}
          className="border-0 overflow-hidden"
          loading="lazy"
          scrolling="no"
        />
      </div>
      {/* Mobile Banner: 320x50 */}
      <div className="flex md:hidden justify-center items-center w-[320px] h-[50px] min-h-[50px] overflow-hidden bg-slate-100/50 rounded-lg">
        <iframe
          title="Sponsored Ad 320x50"
          width={320}
          height={50}
          srcDoc={mobileSrcDoc}
          className="border-0 overflow-hidden"
          loading="lazy"
          scrolling="no"
        />
      </div>
    </aside>
  );
}
