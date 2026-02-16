import { ImageResponse } from 'next/og';
import { COMPANY_NAME, SUB_TAGLINE } from '@/site-constants';
import { LogoMarkSvg } from '@/lib/logo-image';

export const alt = `${COMPANY_NAME} Twitter Card Image`;
export const size = {
  width: 1200,
  height: 600
};

export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 24,
          padding: '64px',
          backgroundColor: '#020617',
          backgroundImage: 'radial-gradient(circle at 80% 10%, rgba(59, 130, 246, 0.22), transparent 35%)',
          color: '#ffffff'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>{COMPANY_NAME}</div>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(129, 140, 248, 0.4)',
              backgroundColor: 'rgba(129, 140, 248, 0.08)'
            }}
          >
            <LogoMarkSvg size={50} color="#A5B4FC" />
          </div>
        </div>
        <div style={{ fontSize: 30, lineHeight: 1.35, maxWidth: '90%', color: '#cbd5e1' }}>{SUB_TAGLINE}</div>
      </div>
    ),
    {
      ...size
    }
  );
}
