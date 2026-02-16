import { ImageResponse } from 'next/og';
import { COMPANY_NAME, TAGLINE } from '@/site-constants';
import { LogoMarkSvg } from '@/lib/logo-image';

export const alt = `${COMPANY_NAME} Open Graph Image`;
export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          backgroundColor: '#020617',
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.25), transparent 40%)',
          color: '#e2e8f0'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '999px',
              padding: '10px 20px',
              fontSize: 24,
              fontWeight: 600,
              color: '#c7d2fe'
            }}
          >
            Venture Studio & Technology Operator
          </div>
          <div
            style={{
              width: 78,
              height: 78,
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(129, 140, 248, 0.4)',
              backgroundColor: 'rgba(129, 140, 248, 0.08)'
            }}
          >
            <LogoMarkSvg size={46} color="#A5B4FC" />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 700, color: '#ffffff', maxWidth: '90%' }}>
            {COMPANY_NAME}
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.3, maxWidth: '80%', color: '#94a3b8' }}>{TAGLINE}</div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
