import { memo } from 'react';

interface LogoProps {
  variant?: 'default' | 'white';
}

function Logo({ variant = 'default' }: LogoProps) {
  const logoUrl = variant === 'white'
    ? 'https://staging.jestoneedu.com/wp-content/uploads/2024/12/JESTONE-LOGO-white-1.png'
    : 'https://staging.jestoneedu.com/wp-content/uploads/2024/12/jestone-logo.png';

  return (
    <a href="/" className="flex items-center">
      <img 
        src={logoUrl}
        alt="Jestone Education Logo"
        className="h-10 w-auto"
        style={{
          minWidth: '180px',
          objectFit: 'contain',
          objectPosition: 'left center'
        }}
      />
    </a>
  );
}

export default memo(Logo);