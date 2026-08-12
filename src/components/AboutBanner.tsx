import React from 'react';
import { ArrowRight } from 'lucide-react';

interface AboutBannerProps {
  onExploreClick?: () => void;
}

export const AboutBanner: React.FC<AboutBannerProps> = ({ onExploreClick }) => {
  const handleClick = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('man-woman-banner') || document.getElementById('best-sellers-section');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="about-banner" className="relative w-full overflow-hidden bg-neutral-900 group">
      {/* Background Banner Image */}
      <img
        src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/kkaboutr.png"
        alt="AURA Menswear Collection"
        referrerPolicy="no-referrer"
        className="w-full h-auto min-h-[360px] sm:min-h-[480px] lg:min-h-[580px] object-cover block"
      />

      {/* Top Left Content Overlay */}
      <div className="absolute top-6 sm:top-10 lg:top-24 left-6 sm:left-12 lg:left-20 max-w-xl z-10 flex flex-col items-start pr-6">
        {/* Black Heading related to Menswear (3 Rows, Larger Size) */}
        <h2 className="font-anton text-3xl sm:text-5xl lg:text-8xl xl:text-8xl text-black uppercase tracking-widest leading-[1] mb-3 sm:mb-5 drop-shadow-sm">
          ENGINEERED<br />
          ATHLETIC<br />
          MENSWEAR
        </h2>

        {/* White Short Description related to Menswear */}
        <p className="hidden sm:block font-inter text-xs sm:text-sm text-white font-medium leading-relaxed  mb-4 sm:mb-6 max-w-md drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Discover precision-crafted athletic menswear designed for ultimate endurance, peak performance, and modern streetwear style.
        </p>

        {/* Explore Collection Button (Black Background with White Text) */}
        <button
          onClick={handleClick}
          className="bg-black hover:bg-neutral-900 text-white font-inter font-extrabold text-[6px] sm:text-sm tracking-[0.2em] uppercase px-3 sm:px-8 py-3 sm:py-4 transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3 group cursor-pointer border border-white/20 active:scale-95"
        >
          <span>EXPLORE COLLECTION</span>
          <ArrowRight size={18} className="hidden sm:block group-hover:translate-x-1.5 transition-transform text-white" />
        </button>
      </div>
    </section>
  );
};

