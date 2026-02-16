import type { Metadata } from 'next';
import HeroSection from '@/components/pages/home/hero-section';
import StatsStrip from '@/components/pages/home/stats-strip';
import ServicesGrid from '@/components/pages/home/services-grid';
import ProcessSection from '@/components/pages/home/process-section';
import ProductsGrid from '@/components/pages/products/products-grid';
import FaqSection from '@/components/pages/home/faq-section';
import PartnershipCtaSection from '@/components/pages/home/partnership-cta-section';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Home',
  description:
    'Afterlife Systems builds and operates scalable software ecosystems through product strategy, full-cycle engineering, and operational excellence.',
  path: '/',
  keywords: ['software ecosystems', 'technology ventures', 'product engineering']
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesGrid />
      <ProcessSection />
      <ProductsGrid />
      <FaqSection />
      <PartnershipCtaSection />
    </>
  );
}
