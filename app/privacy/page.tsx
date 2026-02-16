import type { Metadata } from 'next';
import LegalContent from '@/components/pages/legal/legal-content';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy',
  description: 'Review how Afterlife Systems collects, uses, and protects personal information across our services.',
  path: '/privacy',
  keywords: ['privacy policy', 'data protection', 'afterlife systems privacy']
});

export default function PrivacyRoute() {
  return <LegalContent type="privacy" />;
}
