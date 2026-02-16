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
      <path
        d="M20 3L35.5885 12V30L20 39L4.41154 30V12L20 3Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M20 10V22M20 22L12 28M20 22L28 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="20" cy="22" r="3" fill="currentColor" />
      <circle cx="12" cy="28" r="1.5" fill="currentColor" />
      <circle cx="28" cy="28" r="1.5" fill="currentColor" />
      <circle cx="20" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
};
