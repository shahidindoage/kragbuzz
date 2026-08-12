import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ManAndWomanBannerProps {
  onSelectCategory?: (targetId: string) => void;
}

export const ManAndWomanBanner: React.FC<ManAndWomanBannerProps> = ({ onSelectCategory }) => {
  const handleClick = () => {
    if (onSelectCategory) {
      onSelectCategory('best-sellers-section');
    } else {
      const el = document.getElementById('best-sellers-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="man-woman-banner" className="relative w-full overflow-hidden bg-neutral-900 group">
      {/* Background Banner Image */}
      <img
        src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/kkfer.png"
        alt="AURA Womenswear Athletic Collection"
        referrerPolicy="no-referrer"
        className="w-full h-auto min-h-[360px] sm:min-h-[480px] lg:min-h-[580px] object-cover block"
      />

      {/* Right Bottom Content Overlay */}
      <div className="absolute bottom-[40%] sm:bottom-[40%] lg:bottom-[40%] right-6 sm:right-12 lg:right-20 max-w-3xl z-10 flex flex-col items-end text-right pl-6">
        {/* White Heading - 2 Rows */}
        <h2 className="font-anton text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-white uppercase tracking-wider leading-[1] mb-4 sm:mb-6 drop-shadow-md text-right">
          <span className="block whitespace-nowrap">A STYLE REVOLUTION.</span>
          <span className="block whitespace-nowrap">IN MOTION.</span>
        </h2>

        {/* Explore The Drop Button */}
        <button
          onClick={handleClick}
          className="bg-white hover:bg-neutral-100 text-black font-inter font-extrabold text-[6px] sm:text-sm tracking-[0.2em] uppercase px-3 sm:px-8 py-3 sm:py-4 transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3 group cursor-pointer border border-black/10 active:scale-95"
        >
          <span>EXPLORE THE DROP</span>
          <ArrowRight size={18} className="hidden sm:block group-hover:translate-x-1.5 transition-transform text-black" />
        </button>
      </div>
    </section>
  );
};

