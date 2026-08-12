import React from 'react';

interface BagsBannerProps {
  onExploreClick?: () => void;
}

export const BagsBanner: React.FC<BagsBannerProps> = () => {
  return (
    <section id="bags-banner" className="relative w-full overflow-hidden bg-black">
      <img
        src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/kkbags.png"
        alt="AURA Bags Collection"
        referrerPolicy="no-referrer"
        className="w-full h-auto object-cover block"
      />
    </section>
  );
};
