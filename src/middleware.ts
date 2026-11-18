import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip api, _next, and files with extensions (like favicon.ico, images)
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // If path starts with /as, it naturally hits app/[lang]/... with lang="as"
  if (pathname === '/as' || pathname.startsWith('/as/')) {
    return NextResponse.next();
  }

  // If path starts with /en, redirect to canonical / since English is default
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const newPath = pathname.replace(/^\/en/, '') || '/';
    return NextResponse.redirect(new URL(newPath, request.url));
  }

  // Rewrite all other paths (which represent English) to /en/...
  // For example, / -> /en, /about -> /en/about
  return NextResponse.rewrite(new URL(`/en${pathname === '/' ? '' : pathname}`, request.url));
}

export const config = {
  matcher: [
    // Ignore api and static files
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|google*.html).*)',
  ],
};
