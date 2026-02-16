import { generateLogoIcon } from '@/lib/logo-image';

export const contentType = 'image/png';

export async function GET() {
  return generateLogoIcon({ width: 192, height: 192 });
}

