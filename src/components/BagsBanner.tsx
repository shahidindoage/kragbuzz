import React from 'react';

interface BagsBannerProps {
  onExploreClick?: () => void;
}

export const BagsBanner: React.FC<BagsBannerProps> = ({ onExploreClick }) => {
  return (
    <section id="bags-banner" className="relative w-full overflow-hidden bg-black min-h-[400px] md:min-h-[500px] flex items-center justify-center md:justify-end">
      {/* 1. Background Image */}
      <img
        src="/a4.png"
        alt="AURA Bags Collection"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Mobile Only Overlay for Legibility (Hidden on Desktop) */}
      <div className="md:hidden absolute inset-0 bg-black/70 z-10" />

      {/* 3. Content Container (Right half of banner, left-aligned text on desktop) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full py-12 md:py-20 flex justify-center md:justify-end">
        <div className="max-w-xl space-y-4 md:space-y-6 text-center md:text-left mx-auto md:mx-0">
          
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-anton uppercase tracking-tight leading-[0.95]">
            <span className="block text-white">PERFORMANCE</span>
            <span className="block text-[#FFE000]">BAGS & GEAR</span>
          </h2>

          {/* Description / Subtext */}
          <p className="text-white text-sm sm:text-base md:text-lg max-w-md leading-relaxed mx-auto md:mx-0 drop-shadow-sm">
            Engineered for durability. Built for seamless movement.
            Carry your essentials from training days to travel with uncompromised utility.
          </p>

          {/* CTA Button (White back, hover transparent) */}
          <div className="pt-2">
            <a href="https://kragbuzz.com/collections/bags"
              onClick={onExploreClick}
              className="border-2 border-white bg-white text-black font-bold tracking-wider text-xs sm:text-sm uppercase px-8 py-3.5 transition-all duration-300 hover:bg-[#FFE000] hover:text-black hover:border-[#FFE000] shadow-xl inline-block"
            >
              EXPLORE COLLECTION
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};