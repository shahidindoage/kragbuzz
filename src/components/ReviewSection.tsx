import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ShieldCheck, MapPin, ShoppingBag } from 'lucide-react';
import { Review } from '../types';

interface ReviewSectionProps {
  reviews: Review[];
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeReview = reviews[currentIndex] || reviews[0];

  // Optional auto-slide interval
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
    <section id="review-section" className="py-20 sm:py-28 bg-neutral-50 text-[#313131] relative overflow-hidden border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 border-b border-neutral-200 pb-6">
          <div>
            {/* <div className="flex items-center space-x-2 text-emerald-700 font-inter text-xs tracking-[0.25em] uppercase font-bold mb-2">
              <ShieldCheck size={16} />
              <span>VERIFIED ATHLETE DISPATCHES</span>
            </div>  */}
            <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl text-black tracking-wider uppercase">
              ATHLETE REVIEWS
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4 mt-6 sm:mt-0">
            {/* <span className="font-mono text-xs text-neutral-500 tracking-widest uppercase">
              {String(currentIndex + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}
            </span> */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black text-black transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                aria-label="Previous Review"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 border border-neutral-300 bg-white hover:bg-black hover:text-white hover:border-black text-black transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
                aria-label="Next Review"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Two-Column Layout: Left Stacked Reviewer Image Cards | Right Feedback Content */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT SIDE: STACKED REVIEWER IMAGE CARDS */}
          <div className="lg:col-span-5 flex flex-col space-y-3 justify-center">
            <p className="text-[11px] font-inter font-bold text-neutral-500 tracking-[0.2em] uppercase mb-1">
              SELECT ATHLETE REVIEWER
            </p>

            <div className="space-y-3">
              {reviews.map((rev, idx) => {
                const isActive = idx === currentIndex;

                return (
                  <div
                    key={rev.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`group relative p-4 rounded-none border transition-all duration-300 cursor-pointer flex items-center space-x-4 ${
                      isActive
                        ? 'bg-white border-black shadow-md translate-x-1 sm:translate-x-2'
                        : 'bg-neutral-100/80 border-neutral-200 hover:border-neutral-400 hover:bg-white'
                    }`}
                  >
                    {/* Active Accent Bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#E72F07]" />
                    )}

                    {/* Reviewer Image Card Thumbnail */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 bg-neutral-200 overflow-hidden border border-neutral-300 group-hover:border-neutral-500 transition-colors">
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
                        <div className="w-full h-full flex items-center justify-center font-anton text-lg text-neutral-600 bg-neutral-200">
                          {rev.customerName.charAt(0)}
                        </div>
                      )}

                      {rev.isVerified && (
                        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border border-white flex items-center justify-center">
                          <CheckCircle size={10} className="text-white fill-emerald-500" />
                        </span>
                      )}
                    </div>

                    {/* Reviewer Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <h4 className={`font-anton text-base tracking-wide uppercase truncate ${isActive ? 'text-black' : 'text-neutral-700 group-hover:text-black'}`}>
                          {rev.customerName}
                        </h4>

                        <div className="flex items-center space-x-1 text-amber-500">
                          <Star size={12} className="fill-amber-400" />
                          <span className="font-mono text-xs font-bold text-neutral-700">{rev.rating}.0</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2 text-[11px] font-inter text-neutral-500 truncate">
                        {rev.location && (
                          <span className="flex items-center space-x-1 shrink-0">
                            <MapPin size={10} className="text-[#E72F07]" />
                            <span>{rev.location}</span>
                          </span>
                        )}
                        <span>•</span>
                        <span className="truncate text-neutral-500">{rev.productPurchased}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: FEEDBACK OF SELECTED REVIEWER */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 p-8 sm:p-10 lg:p-12 relative flex flex-col justify-between shadow-sm overflow-hidden">
            <Quote className="absolute top-6 right-6 text-neutral-100 w-32 h-32 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Top Header info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-neutral-200">
                <div className="flex items-center space-x-1">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-mono text-xs font-bold text-amber-600 ml-2">
                    5.0 / 5.0 RATING
                  </span>
                </div>

               
              </div>

              {/* Review Title */}
              <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl text-black tracking-wider uppercase leading-tight">
                "{activeReview.title}"
              </h3>

              {/* Review Comment Body */}
              <p className="font-inter text-base sm:text-lg text-neutral-700 font-normal leading-relaxed italic">
                "{activeReview.comment}"
              </p>

              {/* Product Badge Tag */}
              <div className="pt-2">
                <div className="inline-flex items-center space-x-2 bg-neutral-100 border border-neutral-200 px-4 py-2 text-xs font-inter text-neutral-700">
                  <ShoppingBag size={14} className="text-[#E72F07]" />
                  <span>PRODUCT TESTED:</span>
                  <span className="font-bold text-black uppercase">{activeReview.productPurchased}</span>
                </div>
              </div>
            </div>

            {/* Bottom Reviewer Footer */}
            <div className="relative z-10 pt-8 mt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#E72F07] text-white flex items-center justify-center font-anton text-base">
                  <img
                          src={activeReview.avatarImage}
                          alt={activeReview.customerName}
                          referrerPolicy="no-referrer"
                          className={`w-full h-full object-cover transition-transform duration-500 rounded-full ${
                            true ? 'scale-105 grayscale-0' : 'grayscale group-hover:grayscale-0'
                          }`}
                        />
                </div>
                <div>
                  <p className="font-anton text-sm text-black tracking-wider uppercase">
                    {activeReview.customerName}
                  </p>
                  <p className="text-[11px] font-inter text-neutral-500 flex items-center space-x-1">
                    <MapPin size={10} className="text-[#E72F07]" />
                    <span>{activeReview.location || 'GLOBAL ATHLETE'}</span>
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
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

