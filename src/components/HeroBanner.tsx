import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  onExploreClick: () => void;
  onSecondaryClick?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExploreClick }) => {
  const marqueeItems = [
    'AURA ATHLETICS',
    'NEW COLLECTION 2026',
    'LIMITLESS MOTION',
    'ENGINEERED PERFORMANCE',
    'FREE SHIPPING OVER $100',
    'DESIGNED TO MOVE',
    'BUILT TO STAND OUT',
  ];

  return (
    <section
      id="hero-banner"
      className="relative min-h-[calc(100vh-60px)] w-full overflow-x-clip overflow-y-visible flex flex-col justify-between pt-4 lg:pt-6 pb-0 bg-white"
    >
      {/* Half White & Half Red Diagonal Background Split */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Left/Top White Side */}
        <div className="absolute inset-0 bg-[#f8f9fa]" />

        {/* Diagonal Red Slice (Ends at 75% width at top, 25% width at bottom) */}
        <div
          className="absolute inset-0 bg-[#E72F07]"
          style={{
            clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 25% 100%)',
          }}
        />

        {/* Subtle accent line along diagonal edge */}
        <div
          className="absolute inset-0 bg-white/20"
          style={{
            clipPath: 'polygon(74.3% 0, 75.7% 0, 25.7% 100%, 24.3% 100%)',
          }}
        />

        {/* Giant Watermark Display Text in Background */}
        <div className="absolute top-[35%] lg:top-[24%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 select-none pointer-events-none">
          <span className="font-anton text-[16vw] sm:text-[15vw] lg:text-[23vw] leading-none tracking-tighter uppercase text-black/[0.04] block drop-shadow-sm">
            KRAGBUZZ
          </span>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4 pt-4 pb-0">
        {/* Left Side: Typography & CTA */}
        <div className="w-full lg:w-1/2 space-y-5 text-left pt-4 lg:pt-[200px] z-20 self-center">
          {/* Main Headline */}
          <div className="space-y-2">
            <h1 className="font-anton text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-neutral-900 tracking-tight uppercase leading-[1] whitespace-nowrap">
              DESIGNED TO MOVE. <br />
              <span className="text-[#E72F07] drop-shadow-sm">BUILT TO STAND OUT.</span>
            </h1>
          </div>

          {/* Subheading / Description */}
          <p className="font-inter text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed max-w-md sm:max-w-lg hidden sm:block">
            From city streets to high-intensity arenas, athletic fashion crafted for everyday comfort, bold performance, and all-day confidence.
          </p>

          {/* CTA Buttons */}
          <div className="pt-1 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreClick}
              className="px-8 py-4 bg-[#E72F07] hover:bg-[#c02402] text-white font-inter font-extrabold text-xs tracking-[0.2em] uppercase transition-all shadow-xl hover:shadow-2xl flex items-center space-x-3 group cursor-pointer"
            >
              <span>EXPLORE SHOP</span>
              <ArrowRight size={18} className="hidden sm:block group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Side: Cutout Model Image */}
        <div className="w-full lg:w-1/2 flex items-center justify-center relative z-40 min-h-[350px] sm:min-h-[440px] lg:min-h-[500px] -translate-x-2 sm:-translate-x-6 lg:-translate-x-8">
          {/* Subtle Glow behind model */}
          <div className="absolute w-[80%] h-[80%] rounded-full bg-white/20 blur-3xl -z-10 pointer-events-none" />

          <img
            src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/kkherobanner.png"
            alt="AURA Athletic Model"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[520px] sm:max-h-[600px] lg:max-h-[650px] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] hover:scale-[1.02] transition-transform duration-500 ease-out"
          />
        </div>
      </div>

      {/* Diagonal Marquee Banner Strip */}
      <div className="relative z-30 w-[110%] -left-[5%] -rotate-0 sm:-rotate-3 bg-black text-white py-4 sm:py-5 overflow-hidden border-y-2 border-[#E72F07] shadow-2xl -mt-10 sm:-mt-16 mb-0">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 text-base sm:text-lg lg:text-xl font-anton tracking-wider uppercase">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-10">
              <span className="text-white hover:text-[#E72F07] transition-colors">{item}</span>
              <span className="text-[#E72F07] font-extrabold text-lg sm:text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



