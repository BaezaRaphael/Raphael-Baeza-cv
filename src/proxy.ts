import { NextResponse, type NextRequest } from 'next/server';

const locales = ['fr', 'en'] as const;
const defaultLocale = 'fr';

function getLocale(request: NextRequest): string {
  const accept = request.headers.get('accept-language') ?? '';
  const preferred = accept.split(',')[0]?.split('-')[0]?.toLowerCase();
  if (preferred && (locales as readonly string[]).includes(preferred)) {
    return preferred;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\.).*)'],
};
