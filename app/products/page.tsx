import type { Metadata } from 'next';
import ProductsPageContent from '@/components/pages/products/products-page-content';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Products',
  description:
    'Explore the Afterlife Systems product portfolio, including fintech and developer tooling ventures designed for reliability, performance, and scale.',
  path: '/products',
  keywords: ['product portfolio', 'fintech products', 'developer tools']
});

export default function ProductsRoute() {
  return <ProductsPageContent />;
}
