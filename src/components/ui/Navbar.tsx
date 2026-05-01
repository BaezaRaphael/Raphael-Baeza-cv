'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import type { Locale } from '@/app/[lang]/dictionaries';
import ThemeToggle from './ThemeToggle';

type NavDict = {
  about: string;
  journey: string;
  skills: string;
  projects: string;
  passions: string;
  contact: string;
  downloadCV: string;
};

export default function Navbar({ dict, currentLang }: { dict: NavDict; currentLang: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  const otherLang: Locale = currentLang === 'fr' ? 'en' : 'fr';
  const switchPath = pathname.replace(/^\/(fr|en)/, `/${otherLang}`);

  const links = [
    { href: '#about', label: dict.about },
    { href: '#journey', label: dict.journey },
    { href: '#skills', label: dict.skills },
    { href: '#projects', label: dict.projects },
    { href: '#passions', label: dict.passions },
    { href: '#contact', label: dict.contact },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-nav-bg border-b border-border-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href={`/${currentLang}`}
          className="text-sm font-mono tracking-tight text-foreground hover:opacity-70 transition-opacity"
        >
          RB.
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-foreground transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href={switchPath}
            className="text-xs font-mono uppercase tracking-wider text-subtle hover:text-foreground transition-colors"
          >
            {currentLang === 'fr' ? 'EN' : 'FR'}
          </Link>
          <ThemeToggle />
          <a
            href="/cv.pdf"
            download
            className="hidden sm:inline-block text-xs px-4 py-2 rounded-full border border-border-strong text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
          >
            {dict.downloadCV}
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
