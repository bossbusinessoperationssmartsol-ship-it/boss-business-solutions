import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden bg-[#142B3B]',
  fallbackLabel = 'BOSS. Business Operations & Smart Solutions',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={containerClassName}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setHasError(true)}
          className={className}
        />
      ) : (
        <div className="w-full h-full min-h-[240px] flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#142B3B] via-[#18384D] to-[#087F72]/60 text-[#F7F8F5]">
          <BookOpen className="w-8 h-8 text-[#D6B36A] mb-3" />
          <p className="font-display text-lg font-medium tracking-tight text-[#F7F8F5]">
            {fallbackLabel}
          </p>
        </div>
      )}
    </div>
  );
};
