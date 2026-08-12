import React from 'react';

interface AccessoriesBannerProps {
  onExploreClick?: () => void;
}

export const AccessoriesBanner: React.FC<AccessoriesBannerProps> = () => {
  return (
    <section id="accessories-banner" className="relative w-full overflow-hidden bg-black">
      <img
        src="/kkccaps.png"
        alt="AURA Accessories Collection"
        referrerPolicy="no-referrer"
        className="w-full h-auto object-cover block"
      />
    </section>
  );
};
