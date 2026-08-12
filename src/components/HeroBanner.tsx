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



import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HERO_SLIDES = [
  {
    id: 1,
    titleTop: 'SPORTS CAPS',
    titleBottom: 'COLLECTION',
    description: 'Durable. Stylish. Built for every move. From the gym to game day—carry your gear with confidence.',
    bgImage: '/capsbg.png',
    modelImage: '/capscutout.png',
    buttonText: 'EXPLORE COLLECTION',
    accentColor: '#E72F07',
  },
  {
    id: 2,
    titleTop: 'URBAN STREET',
    titleBottom: 'HEADWEAR',
    description: 'Elevate your everyday look with modern 5-panel cuts and premium breathable materials.',
    bgImage: '/capsbg2.png',
    modelImage: '/capscutout2.png',
    buttonText: 'DISCOVER STYLES',
    accentColor: '#10B981',
  },
  {
    id: 3,
    titleTop: 'PERFORMANCE',
    titleBottom: 'PRO SERIES',
    description: 'Engineered moisture-wicking fabrics paired with laser-cut ventilation for maximum comfort.',
    bgImage: '/capsbg3.png',
    modelImage: '/capscutout3.png',
    buttonText: 'SHOP PRO SERIES',
    accentColor: '#3B82F6',
  },
];

export const HeroBannerSlider = () => {
  const bannerImages = [
    'hero2.png',
    'hero3.png',
    'kk.png',
  ];

  return (
    <section className="relative w-full h-[85vh] min-h-[500px] select-none overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
        }}
        className="w-full h-full"
      >
        {bannerImages.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Glassy Red Dots */}
      <div className="hero-pagination !absolute !right-6 !left-auto !top-1/2 !-translate-y-1/2 !bottom-auto !z-30 !flex !flex-col !items-center !gap-3 !w-auto [&_.swiper-pagination-bullet]:!bg-red-500/40 [&_.swiper-pagination-bullet]:!backdrop-blur-md [&_.swiper-pagination-bullet]:!border [&_.swiper-pagination-bullet]:!border-white/40 [&_.swiper-pagination-bullet]:!shadow-lg [&_.swiper-pagination-bullet]:!w-2 [&_.swiper-pagination-bullet]:!h-2 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!opacity-80 [&_.swiper-pagination-bullet-active]:!bg-red-600/90 [&_.swiper-pagination-bullet-active]:!border-white/80 [&_.swiper-pagination-bullet-active]:!w-4 [&_.swiper-pagination-bullet-active]:!h-4 [&_.swiper-pagination-bullet-active]:!opacity-100 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:duration-300" />
    </section>
  );
};



export const TrustedByMarquee = () => {
  const BRAND_LOGOS = [
    { name: 'NewsX', src: 'https://kragbuzz.com/cdn/shop/files/News-X-no-bg-3-1.png?v=1760640674&width=400' },
    { name: 'Media Partner', src: 'https://kragbuzz.com/cdn/shop/files/images_1.png?v=1760640674&width=400' },
    { name: 'Sportzpower', src: 'https://kragbuzz.com/cdn/shop/files/Sportzpower-Logo.png?v=1760640822&width=400' },
    { name: 'Channel', src: 'https://kragbuzz.com/cdn/shop/files/channels4_profile.jpg?v=1760640674&width=400' },
    { name: 'News18', src: 'https://kragbuzz.com/cdn/shop/files/122895-News18Network.avif?v=1760640674&width=400' },
    { name: 'Main Logo', src: 'https://kragbuzz.com/cdn/shop/files/main_logo.png?v=1760640674&width=400' },
  ];

  const marqueeLogos = [...BRAND_LOGOS, ...BRAND_LOGOS];

  return (
    <section className="w-full bg-white overflow-hidden select-none border-b border-neutral-300">
      <div className="flex flex-col md:flex-row items-stretch">
        
        {/* Left Portion: Full Height Red Background */}
        <div className="bg-red-600 px-8 py-6 flex items-center justify-center shrink-0">
          <span className="text-sm font-black uppercase tracking-widest text-white whitespace-nowrap">
            Trusted By
          </span>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-zinc-300 my-4 shrink-0" />
        <div className="block md:hidden h-px w-full bg-zinc-200 shrink-0" />

        {/* Right Portion: Marquee Logos */}
        <div className="relative flex-1 py-6 overflow-hidden flex items-center [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex w-max items-center gap-12 md:gap-16 animate-marquee hover:[animation-play-state:paused]">
            {marqueeLogos.map((logo, index) => (
              <div
                key={index}
                className="w-32 h-12 flex items-center justify-center shrink-0 cursor-pointer transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name || `Brand ${index + 1}`}
                  className="max-h-full max-w-full w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


interface CategoryCardProps {
  title: string;
  imageSrc: string;
  className?: string;
  onSelectCategory?: (category: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  imageSrc,
  className = '',
  onSelectCategory,
}) => {
  return (
    <div
      onClick={() => onSelectCategory && onSelectCategory(title.toLowerCase())}
      className={`relative group overflow-hidden cursor-pointer w-full h-full rounded-sm ${className}`}
    >
      {/* Background Image with Hover Zoom */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />

      {/* Subtle Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

      {/* Category Title */}
      <h3 className="absolute top-4 left-6 text-white font-anton text-2xl sm:text-3xl tracking-tight drop-shadow-md z-10">
        {title}
      </h3>
    </div>
  );
};

interface CategoryGridProps {
  onSelectCategory?: (category: string) => void;
}

export const CategoryGridSection: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      title: 'Men',
      imageSrc: 'kkmm.png',
    },
    {
      title: 'Women',
      imageSrc: 'ww.png',
    },
    {
      title: 'Bags',
      imageSrc:
        'https://kragbuzz.com/cdn/shop/files/6_757f052b-4ac8-4348-b149-8304a4b1570b.jpg?v=1784984455&width=720',
    },
    {
      title: 'Headwear',
      imageSrc: 'headwear.webp',
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Grid Layout without height restriction bottlenecks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Left Column - Large Men Card */}
        <div className="aspect-[4/5] lg:aspect-auto lg:h-full w-full min-h-[400px]">
          <CategoryCard
            title={categories[0].title}
            imageSrc={categories[0].imageSrc}
            onSelectCategory={onSelectCategory}
          />
        </div>

        {/* Right Column - Top (Women) & Bottom (Bags + Headwear) */}
        <div className="flex flex-col gap-4 lg:gap-6 w-full">
          {/* Top Half - Women Card */}
          <div className="aspect-[16/9] lg:aspect-none lg:h-1/2 w-full min-h-[200px]">
            <CategoryCard
              title={categories[1].title}
              imageSrc={categories[1].imageSrc}
              onSelectCategory={onSelectCategory}
            />
          </div>

          {/* Bottom Half - Split 2 Columns for Bags & Headwear */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 aspect-[16/9] lg:aspect-none lg:h-1/2 w-full min-h-[200px]">
            <CategoryCard
              title={categories[2].title}
              imageSrc={categories[2].imageSrc}
              onSelectCategory={onSelectCategory}
            />
            <CategoryCard
              title={categories[3].title}
              imageSrc={categories[3].imageSrc}
              onSelectCategory={onSelectCategory}
            />
          </div>
        </div>
      </div>
    </section>
  );
};


import { useEffect } from 'react';
import { Heart, ShoppingBag, Eye, Star } from 'lucide-react';
import { Product } from '../types';
import { ACCESSORIES, KIDS, HEADWEAR, BAGS, CRICKET } from '../data/mockData';

export type CategoryKey = 'accessories' | 'kids' | 'headwear' | 'bags' | 'cricket';

interface MultiCategoryProductsSectionProps {
  accessoriesProducts?: Product[];
  kidsProducts?: Product[];
  headwearProducts?: Product[];
  bagsProducts?: Product[];
  cricketProducts?: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

const CATEGORY_CONFIG: Record<CategoryKey, { label: string; badge: string; tagline: string }> = {
  accessories: {
    label: 'ACCESSORIES',
    badge: 'EQUIPMENT & PERFORMANCE ACCS',
    tagline: 'Essential tactical gear and hydration tools engineered for peak effort.',
  },
  kids: {
    label: 'KIDS',
    badge: 'JUNIOR ATHLETIC SERIES',
    tagline: 'High-performance activewear sets engineered for the next generation of athletes.',
  },
  headwear: {
    label: 'HEADWEAR',
    badge: 'TACTICAL & PERFORMANCE CAPS',
    tagline: 'Laser-perforated snapbacks and lightweight visors engineered for maximum focus.',
  },
  bags: {
    label: 'BAGS',
    badge: 'TACTICAL CARRY & EXPEDITION',
    tagline: 'Precision duffels and waterproof commute packs designed to guard your gear.',
  },
  cricket: {
    label: 'CRICKET',
    badge: 'PRO CRICKET GEAR & APPAREL',
    tagline: 'Grade 1+ English Willow bats, ultralight protection pads, and pro-grade equipment.',
  },
};

export const MultiCategoryProductsSection: React.FC<MultiCategoryProductsSectionProps> = ({
  accessoriesProducts = ACCESSORIES,
  kidsProducts = KIDS,
  headwearProducts = HEADWEAR,
  bagsProducts = BAGS,
  cricketProducts = CRICKET,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [activeTab, setActiveTab] = useState<CategoryKey>('accessories');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const productDataMap: Record<CategoryKey, Product[]> = {
    accessories: accessoriesProducts,
    kids: kidsProducts,
    headwear: headwearProducts,
    bags: bagsProducts,
    cricket: cricketProducts,
  };

  const currentProducts = productDataMap[activeTab] || [];

  // Responsive breakpoints
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, currentProducts.length - itemsPerPage);

  // Reset index on tab change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Auto sliding
  useEffect(() => {
    if (isPaused || currentProducts.length <= itemsPerPage) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex, currentProducts.length, itemsPerPage]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="unified-products-section" className="py-20 sm:py-24 bg-white text-[#313131] relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Subtitle Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-neutral-200 pb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E72F07] inline-block animate-pulse" />
              <span className="font-inter text-xs font-extrabold tracking-[0.25em] text-[#E72F07] uppercase">
                TRENDING NOW
              </span>
            </div>
            
            <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl text-black tracking-wider uppercase">
              NO FLEX. JUST FLOW.
            </h2>
            {/* <p className="font-inter text-xs text-neutral-500 mt-2 max-w-xl">
              {CATEGORY_CONFIG[activeTab].tagline}
            </p> */}
          </div>

          {/* Unified Tab Bar */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-neutral-100 p-1.5 rounded-none border border-neutral-300 self-start md:self-auto">
            {(Object.keys(CATEGORY_CONFIG) as CategoryKey[]).map((key) => {
              const count = productDataMap[key]?.length || 0;
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-2 px-3.5 sm:px-4 py-2 font-inter text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-black text-white shadow-md'
                      : 'text-neutral-700 hover:text-black hover:bg-neutral-200'
                  }`}
                >
                  <span>{CATEGORY_CONFIG[key].label}</span>
                  {/* <span
                    className={`text-[10px] px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-[#E72F07] text-white' : 'bg-neutral-300 text-neutral-800'
                    }`}
                  >
                    {count}
                  </span> */}
                </button>
              );
            })}
          </div>
        </div>

        {/* Status Bar & Slider Arrows */}
        {/* <div className="flex justify-between items-center mb-6 text-xs font-inter text-neutral-600">
          <span className="invisible font-mono text-[11px] text-neutral-500 font-semibold uppercase tracking-widest">
            SHOWING {currentProducts.length} ITEMS
          </span>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 bg-white border border-neutral-300 hover:bg-black hover:text-white hover:border-black text-neutral-800 flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
              title="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 bg-white border border-neutral-300 hover:bg-black hover:text-white hover:border-black text-neutral-800 flex items-center justify-center transition-colors cursor-pointer shadow-xs active:scale-95"
              title="Next Slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div> */}

        {/* Product Carousel Track */}
        <div
          className="relative overflow-hidden py-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-out -mx-3"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {currentProducts.map((product) => {
              const isWishlisted = wishlistIds.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex flex-col"
                >
                  <div className="bg-white border border-neutral-200 group hover:border-black transition-all duration-300 flex-1 flex flex-col justify-between shadow-xs hover:shadow-md h-full">
                    {/* Image Container */}
                    <div
                      className="relative aspect-square bg-neutral-100 overflow-hidden cursor-pointer"
                      onClick={() => onQuickView(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {product.secondaryImage && (
                        <img
                          src={product.secondaryImage}
                          alt={product.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      )}

                      {product.isNew && (
                        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#E72F07] text-white font-inter text-[10px] font-extrabold uppercase tracking-widest">
                          NEW DROP
                        </span>
                      )}

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(product);
                        }}
                        className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                          isWishlisted
                            ? 'bg-red-600 text-white shadow-sm'
                            : 'bg-white/90 text-black border border-neutral-200 hover:bg-black hover:text-white'
                        }`}
                      >
                        <Heart size={16} className={isWishlisted ? 'fill-white' : ''} />
                      </button>

                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white via-white/95 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onQuickView(product);
                          }}
                          className="flex-1 py-2.5 bg-black text-white font-inter font-bold text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-1"
                        >
                          <Eye size={14} />
                          <span>VIEW SPECS</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(
                              product,
                              product.colors[0]?.name || 'Standard',
                              product.sizes[0] || 'Standard'
                            );
                          }}
                          className="p-2.5 bg-white border border-neutral-300 text-black hover:bg-neutral-100 transition-colors"
                          title="Quick Add to Bag"
                        >
                          <ShoppingBag size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between bg-white">
                      <div>
                        <div className="flex justify-between items-center text-[10px] font-inter font-bold text-neutral-600 tracking-widest uppercase mb-1">
                          <span>{product.categoryLabel}</span>
                          <span className="flex items-center text-amber-500">
                            <Star size={12} className="fill-amber-400 mr-1 text-amber-500" />
                            {product.rating}
                          </span>
                        </div>

                        <h3
                          onClick={() => onQuickView(product)}
                          className="font-anton text-lg text-black tracking-wide uppercase group-hover:text-neutral-600 cursor-pointer transition-colors"
                        >
                          {product.name}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                        <div className="flex space-x-1.5">
                          {product.colors.map((c) => (
                            <span
                              key={c.name}
                              className="w-3.5 h-3.5 rounded-full border border-neutral-300 shadow-2xs"
                              style={{ backgroundColor: c.hex }}
                              title={c.name}
                            />
                          ))}
                        </div>

                        <div className="flex items-center space-x-2">
                          {product.originalPrice && (
                            <span className="font-inter text-xs text-neutral-400 line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                          <span className="font-inter text-sm font-bold text-black">
                            ₹{product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Indicators */}
        {maxIndex > 0 && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-black' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
                title={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

import { ArrowUpRight, Clock, Bookmark } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  image: string;
  isFeatured?: boolean;
}

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'ENGINEERING FOR PEAK EFFORT: INSIDE OUR NEW FABRIC MATRIX',
    excerpt: 'An inside look at how laser-perforated textiles and high-density moisture management redefine high-output training gear.',
    category: 'LAB NOTES',
    author: {
      name: 'Dr. Aris Thorne',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    publishedAt: 'MAY 18, 2026',
    readTime: '6 MIN READ',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=1200',
    isFeatured: true,
  },
  {
    id: '2',
    title: 'THE ART OF TACTICAL CARRY: DUFFELS BUILT FOR EXPEDITION',
    excerpt: 'Balancing structural integrity, modular storage, and weatherproofing for seamless transit from gym to tarmac.',
    category: 'GEAR GUIDE',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
    publishedAt: 'MAY 14, 2026',
    readTime: '4 MIN READ',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'GRADE 1+ ENGLISH WILLOW: PRESERVING CRAFT IN PRO CRICKET',
    excerpt: 'Selecting timber, perfecting blade balance, and hand-knocking bats for uncompromising power transfer at the crease.',
    category: 'EQUIPMENT',
    author: {
      name: 'Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    },
    publishedAt: 'MAY 02, 2026',
    readTime: '8 MIN READ',
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'JUNIOR ATHLETIC SERIES: NEXT-GEN ERGONOMICS',
    excerpt: 'Designing high-performance activewear adapted for growing endurance athletes without sacrificing durability.',
    category: 'JUNIOR LAB',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    },
    publishedAt: 'APR 26, 2026',
    readTime: '5 MIN READ',
    image: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'AERODYNAMIC HEADWEAR: VENTILATION FOR MAXIMUM FOCUS',
    excerpt: 'Evaluating heat dissipation profiles in laser-cut caps during extreme heat endurance sessions.',
    category: 'HEADWEAR',
    author: {
      name: 'Devon Vance',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
    },
    publishedAt: 'APR 18, 2026',
    readTime: '3 MIN READ',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&q=80&w=800',
  },
];

interface BlogSectionProps {
  posts?: BlogPost[];
  onSelectPost?: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  posts = SAMPLE_POSTS,
  onSelectPost,
}) => {
  const [savedPostIds, setSavedPostIds] = useState<string[]>([]);

  const featuredPost = posts.find((p) => p.isFeatured) || posts[0];
  const gridPosts = posts.filter((p) => p.id !== featuredPost?.id).slice(0, 4);

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPostIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-20 sm:py-24 bg-white text-[#313131] border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-neutral-200 pb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E72F07] inline-block animate-pulse" />
              <span className="font-inter text-xs font-extrabold tracking-[0.25em] text-[#E72F07] uppercase">
                DISPATCHES & FIELD NOTES
              </span>
            </div>
            <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl text-black tracking-wider uppercase">
              INSIGHTS & INNOVATION
            </h2>
          </div>
        </div>

        {/* Main Split Layout: Left Featured, Right 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Featured Article */}
          {featuredPost && (
            <div
              onClick={() => onSelectPost?.(featuredPost)}
              className="lg:col-span-5 group relative bg-black text-white flex flex-col justify-between overflow-hidden cursor-pointer border border-neutral-200 hover:border-black transition-colors"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-[#E72F07] text-white font-inter text-[10px] font-extrabold uppercase tracking-widest">
                    FEATURED STORY
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between bg-black">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-xs font-inter font-semibold text-neutral-400">
                    <span className="text-[#E72F07] uppercase font-bold tracking-widest">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide uppercase leading-tight group-hover:text-neutral-300 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="font-inter text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-neutral-700"
                    />
                    <div>
                      <p className="font-inter text-xs font-bold text-white uppercase tracking-wider">
                        {featuredPost.author.name}
                      </p>
                      <p className="font-inter text-[10px] text-neutral-500">
                        {featuredPost.publishedAt}
                      </p>
                    </div>
                  </div>

                  <span className="w-9 h-9 bg-neutral-800 group-hover:bg-[#E72F07] text-white flex items-center justify-center transition-colors">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Right Side: 2 Rows Grid (4 Articles total) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {gridPosts.map((post) => {
              const isSaved = savedPostIds.includes(post.id);

              return (
                <article
                  key={post.id}
                  onClick={() => onSelectPost?.(post)}
                  className="bg-white border border-neutral-200 group hover:border-black transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-16/10 overflow-hidden bg-neutral-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <button
                        onClick={(e) => toggleSave(post.id, e)}
                        className={`absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                          isSaved
                            ? 'bg-black text-white'
                            : 'bg-white/80 text-black hover:bg-black hover:text-white'
                        }`}
                      >
                        <Bookmark size={14} className={isSaved ? 'fill-white' : ''} />
                      </button>
                      <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-black/80 text-white font-inter text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-xs">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <div className="flex items-center space-x-2 font-inter text-[10px] text-neutral-500 font-semibold tracking-wider uppercase">
                        <span>{post.publishedAt}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Clock size={11} className="mr-1" />
                          {post.readTime}
                        </span>
                      </div>

                      <h4 className="font-anton text-lg text-black tracking-wide uppercase group-hover:text-neutral-600 transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h4>

                      <p className="font-inter text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-transparent group-hover:border-neutral-100 flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full object-cover border border-neutral-200"
                      />
                      <span className="font-inter text-[10px] font-bold text-neutral-800 uppercase tracking-wider">
                        {post.author.name}
                      </span>
                    </div>

                    <span className="text-black group-hover:translate-x-1 transition-transform">
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};