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
import { HEADWEAR, KIDS,REVIEWS } from '../data/mockData';
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
            <span className="block text-[#E72F07]">WITH STYLE</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg text-zinc-300 font-medium leading-relaxed max-w-md">
            Comfortable. Playful. Made for every adventure. Gear up your little champ for non-stop fun.
          </p>

          {/* CTA Button */}
          <div>
            <Link
             to="/collections/kids" 
              onClick={() => console.log('Explore Collection clicked')}
              className="inline-block bg-transparent border border-[#E72F07] hover:bg-[#E72F07] hover:text-black text-[#E72F07] font-bold tracking-wider text-xs sm:text-sm uppercase px-8 py-4 transition-all duration-300 active:scale-95"
            >
              EXPLORE CREATORY
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
export const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] text-[#313131] py-10 md:py-14 border-b border-neutral-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Tag / Subtitle */}
            <div className="flex items-center space-x-2 text-neutral-600 font-inter text-xs tracking-[0.25em] uppercase font-bold">
              <span className="w-2.5 h-2.5 bg-[#E72F07]" />
              <span>ABOUT US</span>
            </div>

            {/* Shortened Heading */}
            <h2 className="font-anton text-3xl sm:text-4xl lg:text-7xl tracking-wider uppercase text-black leading-tight">
              BORN TO PLAY. <br />
              <span className="text-[#E72F07]">MADE TO LAST.</span>
            </h2>

            {/* Expanded Description */}
            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl">
              <p>
                We design vibrant, ultra-comfortable clothing made specifically for kids who never stop moving. Every piece blends playful aesthetics with breathable, skin-friendly fabrics to keep up with non-stop adventures.
              </p>
              <p>
                From schoolyard games to weekend playground explorations, our apparel is crafted to withstand endless washes and rough-and-tumble play while keeping your little ones smiling all day long.
              </p>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-neutral-200 w-full max-w-xl">
              <div>
                <span className="block font-anton text-2xl text-[#E72F07]">100%</span>
                <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">Skin Safe</span>
              </div>
              <div>
                <span className="block font-anton text-2xl text-[#E72F07]">SUPER</span>
                <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">Soft Stretch</span>
              </div>
              <div>
                <span className="block font-anton text-2xl text-[#E72F07]">BUILT</span>
                <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">For Play</span>
              </div>
            </div>

            {/* Action Button */}
            {/* <div className="pt-2">
              <a
                href="#collection"
                className="inline-block bg-black border border-black text-white hover:bg-[#E72F07] hover:border-[#E72F07] font-bold tracking-wider text-xs uppercase px-8 py-4 transition-all duration-300 active:scale-95 shadow-sm"
              >
                EXPLORE KIDS COLLECTION
              </a>
            </div> */}

          </div>

          {/* RIGHT SIDE: LOGO / BRAND BOX */}
          <div className="flex justify-center items-center w-full">
            <div className="relative w-full max-w-md aspect-square bg-white border border-neutral-200 p-8 flex items-center justify-center group overflow-hidden shadow-sm">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E72F07]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E72F07]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#E72F07]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E72F07]" />

              <img
                src="/catt.webp"
                alt="Brand Logo"
                className="w-[400px] h-[400px] object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const instagramPosts = [
  {
    id: 1,
    image: 'https://scontent.cdninstagram.com/v/t51.82787-15/772707883_18487934509103941_8529184125632274115_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=JJH66Dm86toQ7kNvwGte7BO&_nc_oc=AdrU1xj-oBIFkB5PG_f6gGO6YyyhYC276KOzZ7i07Q3HxtVIz6YTFZBunkpCQIaT50ZLiit547Y2ucYR2PTJIJj6&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=w7vg3vUIlu1sY6qYTMZj5g&_nc_ss=7b689&oh=00_AQFznF-f_rTSdp5MJXiKP6vi-QEcQ8xOvoPKzCsZVeGFaw&oe=6A83866C',
    rotate: '-rotate-3 hover:rotate-0',
    translateY: 'translate-y-2',
    handle: '@kragbuzz',
  },
  {
    id: 2,
    image: 'https://scontent.cdninstagram.com/v/t51.82787-15/770679027_18487547005103941_5440605636682047131_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=104&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=_m6Mayr1hCUQ7kNvwHin_wR&_nc_oc=Adoqdy4_Dz7M6-89ov2g_peOQ-azv4qMWe8dGT8wL2bB1qvf1O4HZPFinRAwMtcLtqVnwywq2oT6-jeeiwpn59QA&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=w7vg3vUIlu1sY6qYTMZj5g&_nc_ss=7b689&oh=00_AQEbp7Kth-bKl792KqlchTG-jSrXV8GVRXDjY8otZIdzLg&oe=6A837930',
    rotate: 'rotate-0',
    translateY: '-translate-y-3',
    handle: '@kragbuzz',
  },
  {
    id: 3,
    image: 'https://scontent.cdninstagram.com/v/t51.82787-15/746484865_18482369110103941_4421872527170441768_n.heic?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=110&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=ny-7t2YbYtgQ7kNvwH3GMm4&_nc_oc=AdoQHP2SMlYQplW4_Hcm0eWPxw7ms1w_yMQAltGbzFd6WizEbDSQS0C6_PwZij2u3vQyYsg9asF8xud2S9skr7UO&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=w3_CzIXigiSySeH3lELqOw&_nc_ss=7b689&oh=00_AQElK7y3SFlmlG2HqW9xT3VwYo_Ojq2Cm8uOsZAAygaFxw&oe=6A836E0C',
    rotate: 'rotate-2 hover:rotate-0',
    translateY: 'translate-y-1',
    handle: '@kragbuzz',
  },
  {
    id: 4,
    image: 'https://scontent.cdninstagram.com/v/t51.82787-15/762629958_18486132856103941_7280916661743167748_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=UsSTsF5Ghg4Q7kNvwEWFg2d&_nc_oc=AdqTzUSRTFx3pl4IgjRmO1Kl6Cuo1tUANWDv_wzi-xEKFTRdAaJuPRUZdbAlSPh8ImwWzCUsHD6gXtaBP7gqUxJG&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=JaBHFMbqbIQKT089Chlp3Q&_nc_ss=7b689&oh=00_AQHi2yqHGhZlKy5MtR8GbAKusnDEwbk7Z_t8exD3S2rGfw&oe=6A8367C1',
    rotate: '-rotate-2 hover:rotate-0',
    translateY: 'translate-y-4',
    handle: '@kragbuzz',
  },
];

export const InstagramSection = () => {
  return (
    <section className="relative w-full bg-[#FAFAFA] py-10 md:py-14 overflow-hidden border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        
        {/* TOP SUBTITLE */}
        <p className="text-[#E72F07] text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mb-3 font-inter">
          @INSTAGRAM
        </p>

        {/* BOLD STACKED HEADING */}
        <h2 className="font-anton uppercase tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-[1] md:leading-[0.95] text-black mb-12 sm:mb-16">
          <span className="block text-black">THE LOOKS</span>
          <span className="block text-[#E72F07]">EVERYONE'S</span>
          <span className="block text-black">TALKING ABOUT!</span>
        </h2>

        {/* TILTED INSTAGRAM IMAGE GALLERY */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-center justify-center mb-14 max-w-5xl mx-auto">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative aspect-[3/4] bg-white p-2 sm:p-3 shadow-lg shadow-black/5 transition-all duration-300 transform hover:scale-105 hover:z-20 ${post.rotate} ${post.translateY}`}
            >
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden bg-neutral-100">
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Instagram Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  {/* Instagram Icon */}
                  <svg
                    className="w-8 h-8 text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="text-[11px] font-bold tracking-wider uppercase">
                    {post.handle}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CALL TO ACTION BUTTON */}
        <div>
          <a
            href="https://www.instagram.com/kragbuzz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[#E72F07] hover:bg-black text-white font-bold tracking-wider text-xs sm:text-sm uppercase px-8 py-4 transition-all duration-300 active:scale-95 shadow-md shadow-red-950/10"
          >
            <span>FOLLOW US ON INSTAGRAM</span>
            <span className="text-base">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};


import { Star, ChevronLeft, Quote, CheckCircle, ShoppingBag } from 'lucide-react';
import { Review } from '../types';
import { Link } from 'react-router-dom';

interface ReviewSectionProps {
  reviews?: Review[];
  title?: string;
  subtitle?: string;
  fallbackTag?: string; // Fallback tag e.g. "PRO HEADWEAR" or "VERIFIED PARENT"
}

export const ReviewSection2: React.FC<ReviewSectionProps> = ({
  reviews = [],
  title = "COMMUNITY REVIEWS",
  subtitle = "SELECT REVIEWER",
  fallbackTag = "VERIFIED ATHLETE",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 1. Guard against empty / undefined reviews array to fix TypeError
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const activeReview = reviews[currentIndex] || reviews[0];

  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="review-section" className="py-10 sm:py-14 bg-black text-neutral-200 relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 border-b border-neutral-900 pb-6">
          <div>
            <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl text-white tracking-wider uppercase">
              {title}
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 mt-6 sm:mt-0">
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-neutral-800 bg-neutral-900 hover:bg-[#E72F07] hover:text-white hover:border-[#E72F07] text-white transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous Review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-neutral-800 bg-neutral-900 hover:bg-[#E72F07] hover:text-white hover:border-[#E72F07] text-white transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                aria-label="Next Review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT SIDE: STACKED REVIEWER IMAGE CARDS */}
          <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
            <p className="text-[11px] font-inter font-bold text-neutral-500 tracking-[0.2em] uppercase mb-1">
              {subtitle}
            </p>

            <div className="space-y-3">
              {reviews.map((rev, idx) => {
                const isActive = idx === currentIndex;

                return (
                  <div
                    key={`${rev.id || 'rev'}-${idx}`}
                    onClick={() => setCurrentIndex(idx)}
                    className={`group relative p-4 rounded-none border transition-all duration-300 cursor-pointer flex items-center space-x-4 ${
                      isActive
                        ? 'bg-neutral-900 border-neutral-700 shadow-xl translate-x-1 sm:translate-x-2'
                        : 'bg-neutral-950/80 border-neutral-900 hover:border-neutral-800 hover:bg-neutral-900/60'
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#E72F07]" />
                    )}

                    {/* Reviewer Image Card Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-neutral-900 overflow-hidden border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                      {rev.avatarImage ? (
                        <img
                          src={rev.avatarImage}
                          alt={rev.customerName}
                          referrerPolicy="no-referrer"
                          className={`w-full h-full object-cover transition-transform duration-500 ${
                            isActive ? 'scale-105 grayscale-0' : 'grayscale group-hover:grayscale-0'
                          }`}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center font-anton text-lg text-neutral-400 bg-neutral-900">
                          {rev.customerName?.charAt(0)}
                        </div>
                      )}

                      {rev.isVerified && (
                        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border border-black flex items-center justify-center">
                          <CheckCircle size={10} className="text-black fill-emerald-500" />
                        </span>
                      )}
                    </div>

                    {/* Reviewer Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-anton text-base tracking-wide uppercase truncate ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                          {rev.customerName}
                        </h4>

                        <div className="flex items-center space-x-1 text-amber-400">
                          <Star size={12} className="fill-amber-400" />
                          <span className="font-mono text-xs font-bold text-neutral-300">{rev.rating}.0</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-[11px] font-inter text-neutral-500 truncate">
                        {rev.location && (
                          <span className="flex items-center space-x-1 shrink-0">
                            <MapPin size={10} className="text-[#E72F07]" />
                            <span className="text-neutral-400">{rev.location}</span>
                          </span>
                        )}
                        <span>•</span>
                        <span className="truncate text-neutral-400">{rev.productPurchased}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: FEEDBACK OF SELECTED REVIEWER */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 p-8 sm:p-10 lg:p-12 relative flex flex-col justify-between shadow-2xl overflow-hidden">
            <Quote className="absolute top-6 right-6 text-neutral-800/40 w-32 h-32 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Top Header info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-800">
                <div className="flex items-center space-x-1">
                  {[...Array(activeReview.rating || 5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-mono text-xs font-bold text-amber-400 ml-2">
                    {activeReview.rating || 5}.0 / 5.0 RATING
                  </span>
                </div>
              </div>

              {/* Review Title */}
              <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl text-white tracking-wider uppercase leading-tight">
                "{activeReview.title}"
              </h3>

              {/* Review Comment Body */}
              <p className="font-inter text-base sm:text-lg text-neutral-300 font-normal leading-relaxed italic">
                "{activeReview.comment}"
              </p>

              {/* Product Badge Tag */}
              <div className="pt-2">
                <div className="inline-flex items-center space-x-2 bg-neutral-950 border border-neutral-800 px-4 py-2 text-xs font-inter text-neutral-400">
                  <ShoppingBag size={14} className="text-[#E72F07]" />
                  <span>PRODUCT TESTED:</span>
                  <span className="font-bold text-white uppercase">{activeReview.productPurchased}</span>
                </div>
              </div>
            </div>

            {/* Bottom Reviewer Footer */}
            <div className="relative z-10 pt-8 mt-8 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#E72F07] text-white flex items-center justify-center font-anton text-base overflow-hidden">
                  {activeReview.avatarImage ? (
                    <img
                      src={activeReview.avatarImage}
                      alt={activeReview.customerName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <span>{activeReview.customerName?.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <p className="font-anton text-sm text-white tracking-wider uppercase">
                    {activeReview.customerName}
                  </p>
                  <p className="text-[11px] font-inter text-neutral-400 flex items-center space-x-1">
                    <MapPin size={10} className="text-[#E72F07]" />
                    <span>{activeReview.location || fallbackTag}</span>
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest">
                  Ordered: {activeReview.date}
                </p>
              </div>
            </div>
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
      <AboutSection/>
      <BestSellers3Section
  subtitle="The Creatory"
  title="Little Fits, Big Adventures"
  products={KIDS}
  onQuickView={onQuickView}
  onAddToCart={onAddToCart}
  onToggleWishlist={onToggleWishlist}
  wishlistIds={wishlistIds}
/>
     <InstagramSection/>
     <ReviewSection2 
  reviews={REVIEWS}
  title="PARENT & KIDS REVIEWS"
  subtitle="SELECT PARENT TESTIMONIAL"
  fallbackTag="VERIFIED PARENT"
/>
    </main>
  );
}