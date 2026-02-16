import { ImageResponse } from 'next/og';

export const size = {
  width: 512,
  height: 512
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#020617'
        }}
      >
        <div
          style={{
            width: 380,
            height: 380,
            borderRadius: 96,
            border: '18px solid #818cf8',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontSize: 180,
            fontWeight: 700
          }}
        >
          A
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}

