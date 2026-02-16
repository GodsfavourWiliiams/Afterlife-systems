import type { Metadata } from 'next';
import ContactSection from '@/components/pages/contact/contact-section';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact Afterlife Systems for product partnerships, strategic collaborations, and technology venture opportunities.',
  path: '/contact',
  keywords: ['contact afterlife systems', 'technology partnership', 'venture collaboration']
});

export default function ContactRoute() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  );
}
