import React from 'react';

interface CricketBannerProps {
  onExploreClick?: () => void;
}

export const CricketBanner: React.FC<CricketBannerProps> = () => {
  return (
    <section id="cricket-banner" className="relative w-full overflow-hidden bg-black">
      <img
        src="/kk.png"
        alt="AURA Cricket Collection"
        referrerPolicy="no-referrer"
        className="w-full h-auto object-cover block"
      />
    </section>
  );
};
