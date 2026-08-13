/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Layers, 
  Palette, 
  Settings, 
  MapPin, 
  Mail, 
  Phone, 
  Factory, 
  ShieldCheck,
  ArrowRight,
  Maximize2,
  Cpu
} from 'lucide-react';
import { 
  CAP_STYLES, 
  CROWN_TYPES, 
  PEAK_STYLES, 
  FABRICS, 
  COLORS, 
  BRANDING_TYPES, 
  BRANDING_LOCATIONS, 
  ADDONS, 
  CLIENTS, 
  CONTACT_INFO, 
  CLOSURE_STYLES
} from '../data/caps';
import { HEADWEAR, KIDS } from '../data/mockData';
import { BestSellers2Section } from '../components/BestSellers2Section';
import { BestSellers3Section } from '../components/BestSellers3Section';




const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen bg-[#1F1F1F] md:bg-black flex items-center overflow-hidden border-b border-zinc-800">
      {/* Background Banner Image (Low opacity on mobile, full opacity on md+) */}
      <img
        src="/cate.png"
        alt="Kids Collection Banner"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-25 md:opacity-100"
      />

      {/* Dark Overlay (Hidden on mobile) */}
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />

      {/* Content Container (Centered on mobile, Left-aligned on md+) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="max-w-xl flex flex-col items-center md:items-start text-center md:text-left space-y-6 mx-auto md:mx-0">
          
          {/* Heading */}
          <h1 className="uppercase font-black tracking-wider leading-[1.1] text-4xl sm:text-6xl lg:text-[85px] font-anton">
            <span className="block text-white">FUN STARTS</span>
            <span className="block text-[#A0D136]">WITH STYLE</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-medium leading-relaxed max-w-md">
            Comfortable. Playful. Made for every adventure. Gear up your little champ for non-stop fun.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#best-sellers-section2"
              onClick={() => console.log('Explore Collection clicked')}
              className="inline-block bg-transparent border border-[#A0D136] hover:bg-[#A0D136] hover:text-black text-[#A0D136] font-bold tracking-wider text-xs sm:text-sm uppercase px-8 py-4 transition-all duration-300 active:scale-95"
            >
              EXPLORE CREATORY
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};




export function Creatory({ onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds}:any) {
  return (
    /* Add padding-top to account for fixed header */
    <main>
      <HeroBanner />
      {/* <About /> */}
      <BestSellers3Section
  subtitle="The Creatory"
  title="Little Fits, Big Adventures"
  products={KIDS}
  onQuickView={onQuickView}
  onAddToCart={onAddToCart}
  onToggleWishlist={onToggleWishlist}
  wishlistIds={wishlistIds}
/>
     
    </main>
  );
}