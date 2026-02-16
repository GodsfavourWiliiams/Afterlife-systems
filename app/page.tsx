import HeroSection from '@/components/pages/home/hero-section';
import StatsStrip from '@/components/pages/home/stats-strip';
import ServicesGrid from '@/components/pages/home/services-grid';
import ProcessSection from '@/components/pages/home/process-section';
import ProductsGrid from '@/components/pages/products/products-grid';
import FaqSection from '@/components/pages/home/faq-section';
import PartnershipCtaSection from '@/components/pages/home/partnership-cta-section';

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
