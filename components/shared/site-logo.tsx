interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className = '', size = 32 }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Afterlife Systems Logo"
    >
      <path d="M20 4L4 36H12L20 20L28 36H36L20 4Z" fill="currentColor" fillOpacity="0.2" />
      <path d="M20 4L9 36H15L20 24L25 36H31L20 4Z" fill="currentColor" />
      <circle cx="20" cy="14" r="3" fill="currentColor" className="animate-pulse" />
      <rect x="18" y="32" width="4" height="4" fill="currentColor" />
    </svg>
  );
};
