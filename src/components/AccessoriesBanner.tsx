import React from 'react';
import { Link } from 'react-router-dom';

interface AccessoriesBannerProps {
  onExploreClick?: () => void;
}

export const AccessoriesBanner: React.FC<AccessoriesBannerProps> = ({ onExploreClick }) => {
  return (
    <section id="accessories-banner" className="relative w-full overflow-hidden bg-black min-h-[400px] md:min-h-[500px] flex items-center justify-center md:justify-start">
      {/* 1. Background Image */}
      <img
        src="/caps.png"
        alt="Sports Caps Collection"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Dark Overlays */}
      {/* Mobile: Solid Dark Backdrop for Center Contrast */}
      <div className="md:hidden absolute inset-0 bg-black/70 z-10" />

      {/* Desktop: Dark Left-to-Right Gradient */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent z-10" />

      {/* 3. Content Container (Centered on mobile, Left-aligned on desktop) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full py-12 md:py-20">
        <div className="max-w-xl space-y-4 md:space-y-6 text-center md:text-left mx-auto md:mx-0">
          
          {/* Main Heading (Split across 2 lines) */}
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-anton uppercase tracking-tight leading-[1] md:leading-[0.95]">
            <span className="block text-white">SPORTS CAPS</span>
            <span className="block text-[#C8E6CA]">COLLECTION</span>
          </h2>

          {/* Subtext / Body */}
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-md leading-relaxed mx-auto md:mx-0">
            Durable. Stylish. Built for every move.<br />
            From the gym to game day—carry your gear with confidence.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
            to="/krag-caps"
              onClick={onExploreClick}
              className="border-2 border-white bg-white text-black font-bold tracking-wider text-xs sm:text-sm uppercase px-8 py-3.5 transition-all duration-300 hover:bg-[#C8E6CA] hover:border-[#C8E6CA] hover:text-black shadow-xl inline-block"
            >
              EXPLORE COLLECTION
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};