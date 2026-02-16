import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Afterlife Systems',
    short_name: 'Afterlife',
    description: 'Venture studio and technology operator building scalable software ecosystems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#020617',
    icons: [
      {
        src: '/icon-192',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/icon-512',
        sizes: '512x512',
        type: 'image/png'
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png'
      }
    ]
  };
}
