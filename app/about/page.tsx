import type { Metadata } from 'next';
import AboutPageContent from '@/components/pages/about/about-page-content';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description:
    'Learn how Afterlife Systems operates as an engineering-first venture studio focused on resilient product infrastructure and long-term value creation.',
  path: '/about',
  keywords: ['about afterlife systems', 'venture studio model', 'engineering culture']
});

export default function AboutRoute() {
  return <AboutPageContent />;
}
