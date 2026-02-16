import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';

export const metadata: Metadata = {
  title: 'Afterlife Systems',
  description:
    'Corporate portfolio website for Afterlife Systems, a technology company building scalable software products.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-indigo-500/30 selection:text-white">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
