import type { Metadata } from 'next';
import { COMPANY_NAME } from '@/site-constants';

const FALLBACK_SITE_URL = 'https://afterlifesystems.space';
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

export const SITE_URL = configuredSiteUrl.endsWith('/')
  ? configuredSiteUrl.slice(0, -1)
  : configuredSiteUrl;

const metadataBase = new URL(SITE_URL);
const defaultTitle = `${COMPANY_NAME} | Venture Studio & Technology Operator`;
const defaultDescription =
  'Afterlife Systems is a venture studio and technology operator designing resilient software products across fintech, developer tools, and digital infrastructure.';
const defaultOgImage = '/opengraph-image';
const defaultTwitterImage = '/twitter-image';

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const rootMetadata: Metadata = {
  metadataBase,
  applicationName: COMPANY_NAME,
  manifest: '/manifest.webmanifest',
  title: {
    default: defaultTitle,
    template: `%s | ${COMPANY_NAME}`
  },
  description: defaultDescription,
  keywords: [
    'Afterlife Systems',
    'venture studio',
    'technology operator',
    'software ecosystem',
    'digital products',
    'fintech',
    'developer tools',
    'product engineering'
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  category: 'technology',
  alternates: {
    canonical: '/'
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512', sizes: '512x512', type: 'image/png' }
    ],
    shortcut: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/favicon.svg', color: '#818cf8' }]
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: '/',
    siteName: COMPANY_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} Open Graph Image`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultTwitterImage]
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  verification: googleVerification
    ? {
        google: googleVerification
      }
    : undefined
};

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords
}: PageMetadataInput): Metadata => ({
  title,
  description,
  keywords,
  alternates: {
    canonical: path
  },
  openGraph: {
    title: `${title} | ${COMPANY_NAME}`,
    description,
    url: path,
    type: 'website',
    locale: 'en_US',
    siteName: COMPANY_NAME,
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} Open Graph Image`
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | ${COMPANY_NAME}`,
    description,
    images: [defaultTwitterImage]
  }
});
