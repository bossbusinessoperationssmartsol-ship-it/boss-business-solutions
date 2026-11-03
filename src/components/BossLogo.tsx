import React from 'react';

interface BossLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<BossLogoProps['size']>, string> = {
  sm: 'w-9 h-9',
  md: 'w-11 h-11',
  lg: 'w-16 h-16',
  xl: 'w-24 h-24 sm:w-28 sm:h-28',
};

export const BossLogo: React.FC<BossLogoProps> = ({
  size = 'md',
  className = '',
}) => {
  const logoSrc = `${import.meta.env.BASE_URL}assets/aistudio/image_cdeb0153.png`;

  return (
    <div
      className={`${SIZE_CLASSES[size]} aspect-square rounded-full overflow-hidden shrink-0 select-none ring-1 ring-[#D6B36A]/45 shadow-sm bg-[#0B2234] ${className}`}
    >
      <img
        src={logoSrc}
        alt="BOSS. — Business Operations & Smart Solutions official emblem"
        className="w-full h-full object-cover scale-[1.015]"
      />
    </div>
  );
};
