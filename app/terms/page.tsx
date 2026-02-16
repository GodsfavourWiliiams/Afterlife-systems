import type { Metadata } from 'next';
import LegalContent from '@/components/pages/legal/legal-content';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Terms of Service',
  description: 'Read the terms governing access and use of Afterlife Systems products, services, and website content.',
  path: '/terms',
  keywords: ['terms of service', 'website terms', 'afterlife systems legal']
});

export default function TermsRoute() {
  return <LegalContent type="terms" />;
}
