import { ImageResponse } from 'next/og';

interface LogoMarkSvgProps {
  size: number;
  color: string;
  opacity?: number;
}

export const LogoMarkSvg = ({ size, color, opacity = 0.2 }: LogoMarkSvgProps) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4L4 36H12L20 20L28 36H36L20 4Z" fill={color} fillOpacity={opacity} />
    <path d="M20 4L9 36H15L20 24L25 36H31L20 4Z" fill={color} />
    <circle cx="20" cy="14" r="3" fill={color} />
    <rect x="18" y="32" width="4" height="4" fill={color} />
  </svg>
);

interface GenerateLogoIconOptions {
  width: number;
  height: number;
  backgroundColor?: string;
  logoColor?: string;
}

export const generateLogoIcon = ({
  width,
  height,
  backgroundColor = '#020617',
  logoColor = '#a5b4fc'
}: GenerateLogoIconOptions) => {
  const logoSize = Math.floor(Math.min(width, height) * 0.72);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor
        }}
      >
        <LogoMarkSvg size={logoSize} color={logoColor} />
      </div>
    ),
    { width, height }
  );
};

