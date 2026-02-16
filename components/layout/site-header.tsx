'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { COMPANY_NAME, NAV_ITEMS } from '@/site-constants';
import { Icon } from '@/components/shared/site-icon';
import { Logo } from '@/components/shared/site-logo';

const SiteHeader = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-full border transition-all duration-300 ${
          isScrolled
            ? 'border-white/10 bg-slate-950/80 px-6 py-3 shadow-lg backdrop-blur-xl'
            : 'border-transparent bg-transparent px-0 py-4'
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-shrink-0 items-center gap-3 focus:outline-none">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/20 bg-indigo-500/10">
              <Logo className="text-indigo-400" size={22} />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-white">{COMPANY_NAME}</span>
          </Link>

          <nav className="hidden items-center space-x-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all focus:outline-none ${
                  isActive(item.href) ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-slate-200 focus:outline-none"
            >
              Get in Touch
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute left-4 right-4 top-24 z-50 rounded-3xl border border-white/10 bg-slate-900 p-4 shadow-2xl md:hidden">
          <div className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`block w-full rounded-xl px-4 py-3 text-left text-base font-medium ${
                  isActive(item.href) ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 block w-full rounded-xl bg-indigo-500/10 px-4 py-3 text-left text-base font-bold text-indigo-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
