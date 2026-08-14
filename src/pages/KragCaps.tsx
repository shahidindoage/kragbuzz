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
import { BestSellersSection } from '../components/BestSellersSection';
import { HEADWEAR,REVIEWS } from '../data/mockData';




const HeroBanner = () => {
  return (
    <section className="relative w-full h-[85vh] min-h-[550px] overflow-hidden bg-black flex items-center justify-center md:justify-start">
      {/* 1. Background Image Layer */}
      <img
        src="/capsbg.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80 md:opacity-100"
      />

      {/* 2. Model Cutout Layer (Underneath red overlay on mobile, top on desktop) */}
      <img
        src="/capscutout.png"
        alt="Model Wearing Cap"
        className="block absolute right-0 bottom-0 h-[65%] sm:h-[80%] md:h-full w-auto object-cover object-right z-10 md:z-30 pointer-events-none"
      />

      {/* 3. Red Main Overlay (Slightly reduced opacity on mobile to bg-[#E72F07]/65) */}
      <div 
        className="absolute top-0 left-0 h-full w-full bg-[#E72F07]/83 md:bg-[#E72F07] z-20 md:z-10 md:[clip-path:polygon(0_0,75.7%_0,40%_100%,0_100%)]"
      />

      {/* 4. White Accent Line (Hidden on mobile) */}
      <div
        className="hidden md:block absolute top-0 left-0 h-full w-full bg-white/20 z-20 pointer-events-none"
        style={{
          clipPath: 'polygon(75.2% 0, 75.5% 0, 40% 100%, 39.7% 100%)',
        }}
      />

      {/* 5. Content Container */}
      <div className="relative z-40 max-w-4xl px-6 text-center md:text-left sm:pl-12 lg:pl-20 text-white space-y-6">
        <div className="uppercase font-black tracking-tight leading-[0.95] text-4xl sm:text-6xl lg:text-7xl">
          <span className="block text-white drop-shadow-md">PREMIUM </span>
          <span className="block text-black">SPORTS CAPS</span>
        </div>

        <p className="text-sm sm:text-base md:text-lg text-white font-medium max-w-md mx-auto md:mx-0 leading-snug drop-shadow-md">
          Durable. Stylish. Built for every move.<br />
          From the gym to game day—carry your gear with confidence.
        </p>

        <div>
          <a 
            href="#best-sellers-section2" 
            onClick={() => console.log('Explore Collection clicked')}
            className="border-2 border-black text-white font-bold tracking-wider text-xs sm:text-sm uppercase px-8 py-3 bg-black transition-all duration-300 hover:bg-black hover:text-[#E72F07] inline-block shadow-lg"
          >
            EXPLORE KRAGCAPS
          </a>
        </div>
      </div>
    </section>
  );
};


const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-50">
    {/* Subtle Background Elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.03),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.015]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-6xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Central Logo Focus - Black & Red */}
        <div className="mb-12 md:mb-16 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* <div className="text-black font-black text-[100px] sm:text-[180px] md:text-[240px] lg:text-[280px] tracking-[-0.08em] leading-[0.8] mb-4 md:mb-6">KC</div> */}
           
            <img src="logok.png" alt="" />
           
            <div className="flex items-center">
              {/* <span className="text-black font-bold text-lg sm:text-xl md:text-3xl tracking-[0.4em] sm:tracking-[0.8em] uppercase">KRAG</span>
              <span className="text-red-600 font-bold text-lg sm:text-xl md:text-3xl tracking-[0.4em] sm:tracking-[0.8em] uppercase ml-2 sm:ml-4">CAPS</span> */}

             
            </div>
          </motion.div>
          <div className="w-16 md:w-24 h-[1px] bg-zinc-200 mt-10 md:mt-4" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-black mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[1] font-display uppercase max-w-4xl">
          The Global Standard <br className="hidden sm:block" />
          <span className="text-zinc-300">In Custom Manufacturing</span>
        </h1>
        
        <p className="text-[10px] sm:text-xs md:text-base text-zinc-500 max-w-xl mx-auto font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] leading-relaxed">
          Crafting Legacy in Every Stitch
        </p>
      </motion.div>
    </div>

    {/* Minimal Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
    >
      {/* <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300">Explore Collection</span> */}
      <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-200 to-transparent" />
    </motion.div>
  </section>
);

const About = () => (
  <section className="py-24 bg-zinc-950 border-y border-zinc-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            DESIGNED BY ATHLETE, <br />
            <span className="text-red-600">FOR ATHLETES.</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Established in 2015, Kragbuzz is a rapidly growing manufacturer and exporter of sports apparel and cricket equipment from Delhi.
            </p>
            <p>
              Trusted supplier for prestigious international leagues, our top-quality products are favored by elite cricketers worldwide. Every item embodies our dedication to excellence, empowering athletes to train with purpose.
            </p>
            <p className="italic text-white">
              "Where passion meets innovation. Crafted by athletes for athletes, our gear is meticulously designed to maximize performance in any condition."
            </p>
          </div>
          <div className="mt-10 flex gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">2015</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">50+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Pro Teams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Customized</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 p-4">
            <img 
              src="https://kragbuzzsports.com/wp-content/uploads/2023/07/3_3_11zon.jpg" 
              alt="Athlete focused design" 
              className="w-full h-full object-cover rounded-xl opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-red-600 p-8 rounded-2xl shadow-2xl hidden lg:block">
            <ShieldCheck size={48} className="text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);



export const StyleCard = ({ style, index }: { style: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05, duration: 0.4 }}
    className="group bg-zinc-950 border border-zinc-800 rounded-none overflow-hidden hover:border-[#E72F07] transition-all duration-500 flex flex-col h-full select-none cursor-pointer"
  >
    {/* Compact Images Grid */}
    <div className="p-3 grid grid-cols-2 gap-2 bg-zinc-900/40">
      {/* Primary Image */}
      <div className="col-span-2 aspect-[4/3] overflow-hidden rounded-none bg-zinc-900 relative">
        <img 
          src={style.img1} 
          alt={`${style.name} variation 1`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-2 left-2 px-2 py-0.5 bg-black/80 backdrop-blur-md text-[9px] text-white font-bold rounded-none uppercase tracking-widest border border-zinc-800">
          Primary
        </div>
      </div>

      {/* Secondary Image */}
      <div className="aspect-[4/3] overflow-hidden rounded-none bg-zinc-900">
        <img 
          src={style.img2} 
          alt={`${style.name} variation 2`}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Tertiary Image */}
      <div className="aspect-[4/3] overflow-hidden rounded-none bg-zinc-900">
        <img 
          src={style.img3} 
          alt={`${style.name} variation 3`}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>

    {/* Compact Content Section */}
    <div className="p-4 flex flex-col justify-between flex-grow border-t border-zinc-900">
      <div className="flex justify-between items-start gap-2 mb-1">
        <h3 className="text-white font-anton text-base tracking-wider uppercase group-hover:text-[#E72F07] transition-colors">
          {style.name}
        </h3>
        <span className="text-[8px] bg-zinc-900 text-zinc-400 px-2 py-0.5 rounded-none font-bold whitespace-nowrap uppercase tracking-widest border border-zinc-800">
          3 VARIATIONS
        </span>
      </div>
      
      <p className="text-zinc-400 text-xs line-clamp-2 leading-relaxed">
        {style.description}
      </p>
    </div>
  </motion.div>
);

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 const StylesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Athletic', 'Classic', 'Lifestyle', 'Specialized'];

  const getCategory = (id: string) => {
    const athletic = ['runner-ultra', 'visor', 'golf', 'side-mesh', 'fishing'];
    const classic = ['5-panel', '6-panel', 'moon-cut', 'snapback', 'cadet'];
    const lifestyle = ['baggy', 'hat', 'woollen', 'bucket', 'beanie'];
    const specialized = ['air-hostess', 'chef'];

    if (athletic.includes(id)) return 'Athletic';
    if (classic.includes(id)) return 'Classic';
    if (lifestyle.includes(id)) return 'Lifestyle';
    if (specialized.includes(id)) return 'Specialized';
    return 'Classic';
  };

  const filteredStyles = activeCategory === 'All' 
    ? CAP_STYLES 
    : CAP_STYLES.filter(style => getCategory(style.id) === activeCategory);

  return (
    <section id="styles" className="py-10 md:py-14 bg-black overflow-hidden relative border-t border-neutral-900">
      {/* Red Swiper Pagination Overrides - Sharp Edges */}
      <style>{`
        .styles-swiper-container .swiper-pagination-bullet {
          background-color: #52525b !important;
          opacity: 0.6;
          width: 12px;
          height: 3px;
          border-radius: 0px !important;
          transition: all 0.3s ease;
        }
        .styles-swiper-container .swiper-pagination-bullet-active {
          background-color: #E72F07 !important;
          opacity: 1;
          width: 28px;
          height: 3px;
          border-radius: 0px !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Filter Bar in 2-Column Split */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 border-b border-zinc-900 pb-8">
          
          {/* LEFT SIDE: Heading & Description */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center space-x-2 text-[#E72F07] font-inter text-xs tracking-[0.25em] uppercase font-bold">
              <span className="w-2.5 h-2.5 bg-[#E72F07]" />
              <span>THE COLLECTION</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-anton text-white tracking-wider uppercase leading-none">
              TYPES OF CAPS
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              From classic baseball silhouettes to specialized performance gear, we offer a comprehensive range of engineered headwear tailored for every movement.
            </p>
          </div>

          {/* RIGHT SIDE: Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 lg:justify-end shrink-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all border ${
                  activeCategory === cat 
                    ? 'bg-[#E72F07] border-[#E72F07] text-white shadow-lg' 
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Cap Styles Slider */}
        <div className="relative styles-swiper-container">
          <Swiper
            key={activeCategory} // Force swiper re-initialization on category change
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }}
            className="!pb-16"
          >
            {filteredStyles.map((style, idx) => (
              <SwiperSlide key={style.id} className="h-auto">
                <StyleCard style={style} index={idx} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Squared Navigation Arrows */}
          <button 
            className="swiper-button-prev-custom absolute top-1/2 -left-4 -translate-y-1/2 z-20 bg-zinc-900/90 hover:bg-[#E72F07] border border-zinc-800 text-white w-10 h-10 rounded-none backdrop-blur-md transition-all hidden lg:flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Previous Slide"
          >
            ‹
          </button>
          <button 
            className="swiper-button-next-custom absolute top-1/2 -right-4 -translate-y-1/2 z-20 bg-zinc-900/90 hover:bg-[#E72F07] border border-zinc-800 text-white w-10 h-10 rounded-none backdrop-blur-md transition-all hidden lg:flex items-center justify-center cursor-pointer active:scale-95"
            aria-label="Next Slide"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};



export const CustomizationSection = () => {
  const [activeTab, setActiveTab] = useState('crown');

  const tabs = [
    { id: 'crown', name: 'Crown Profiles', icon: <Layers size={18} /> },
    { id: 'peak', name: 'Peak & Visor', icon: <Maximize2 size={18} /> },
    { id: 'closures', name: 'Closures', icon: <Settings size={18} /> },
  ];

  return (
    <section id="customization" className="py-10 md:py-14 bg-[#FAFAFA] relative border-t border-zinc-200">
      {/* Red Swiper Pagination Overrides - Sharp Geometric Styling */}
      <style>{`
        #customization .swiper-pagination-bullet {
          background-color: #a1a1aa !important;
          opacity: 0.6;
          width: 12px;
          height: 3px;
          border-radius: 0px !important;
          transition: all 0.3s ease;
        }
        #customization .swiper-pagination-bullet-active {
          background-color: #E72F07 !important;
          opacity: 1;
          width: 28px;
          height: 3px;
          border-radius: 0px !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header & Tabs Split Header (Left: Heading & Description, Right: Tabs) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 border-b border-zinc-200 pb-8">
          
          {/* LEFT SIDE: Heading & Description */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center space-x-2 text-[#E72F07] font-inter text-xs tracking-[0.25em] uppercase font-bold">
              <span className="w-2.5 h-2.5 bg-[#E72F07]" />
              <span>CUSTOM SPECIFICATIONS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-anton text-zinc-900 tracking-wider uppercase leading-none">
              UNLIMITED CUSTOMIZATION
            </h2>
            <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
              Every detail matters. Select a category to explore our precision-engineered profile structures, visor cuts, and closure mechanisms.
            </p>
          </div>

          {/* RIGHT SIDE: Tab Navigation Buttons */}
          <div className="flex flex-wrap items-center gap-2 lg:justify-end shrink-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-none font-bold text-xs uppercase tracking-widest transition-all border ${
                  activeTab === tab.id
                    ? 'bg-[#E72F07] border-[#E72F07] text-white shadow-md'
                    : 'bg-white border-zinc-300 text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50'
                }`}
              >
                {tab.icon}
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

        </div>

        {/* Content Sliders */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {/* CROWN PROFILES SLIDER */}
            {activeTab === 'crown' && (
              <motion.div
                key="crown"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  grabCursor={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 24 },
                  }}
                  className="!pb-12"
                >
                  {CROWN_TYPES.map((type, idx) => (
                    <SwiperSlide key={idx} className="h-auto">
                      <div className="group bg-white rounded-none border border-zinc-200 hover:border-[#E72F07] transition-all shadow-xs overflow-hidden h-full flex flex-col select-none">
                        <div className="aspect-square bg-zinc-100 overflow-hidden relative rounded-none">
                          <img
                            src={type.img1}
                            alt={type.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                          <div className="absolute inset-0 p-6 flex flex-col justify-end">
                            <h4 className="text-white font-anton text-2xl uppercase tracking-wider mb-2">
                              {type.name}
                            </h4>
                            <p className="text-zinc-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {type.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            )}

            {/* PEAK & VISOR SLIDER */}
            {activeTab === 'peak' && (
              <motion.div
                key="peak"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-8"
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={24}
                  slidesPerView={1}
                  grabCursor={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 4, spaceBetween: 24 },
                  }}
                  className="!pb-12"
                >
                  {PEAK_STYLES.map((peak, idx) => (
                    <SwiperSlide key={idx} className="h-auto">
                      <div className="bg-white rounded-none border border-zinc-200 flex flex-col overflow-hidden group hover:border-[#E72F07] transition-all shadow-xs h-full select-none">
                        <div className="aspect-square bg-zinc-100 overflow-hidden rounded-none">
                          <img
                            src={peak.img1}
                            alt={peak.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-5 text-center bg-white flex-grow flex flex-col justify-center border-t border-zinc-200">
                          <h4 className="text-zinc-900 font-anton text-lg uppercase tracking-wider">
                            {peak.name}
                          </h4>
                          <span className="text-xs text-zinc-500 mt-1 block uppercase font-mono tracking-widest">{peak.type}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Pro Tip Box - Sharp Rounded-None Styling */}
                <div className="p-6 bg-zinc-900 text-white rounded-none border-l-4 border-[#E72F07] flex items-center gap-6 shadow-md">
                  <div className="w-12 h-12 rounded-none bg-[#E72F07] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-anton text-lg uppercase tracking-wider mb-0.5">Pro Customization Tip</h4>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                      Combine a High-Profile crown with a Flat Peak for a modern urban fit, or pair Low-Profile with a Curved Visor for classic athletic performance.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CLOSURES SLIDER */}
            {activeTab === 'closures' && (
              <motion.div
                key="closures"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={16}
                  slidesPerView={2}
                  grabCursor={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  breakpoints={{
                    640: { slidesPerView: 3, spaceBetween: 16 },
                    768: { slidesPerView: 4, spaceBetween: 20 },
                    1024: { slidesPerView: 6, spaceBetween: 20 },
                  }}
                  className="!pb-8"
                >
                  {CLOSURE_STYLES.map((closure, idx) => (
                    <SwiperSlide key={idx} className="h-auto">
                      <div className="group bg-white rounded-none border border-zinc-200 overflow-hidden hover:border-[#E72F07] transition-all shadow-xs h-full flex flex-col select-none">
                        <div className="aspect-square bg-zinc-100 overflow-hidden relative rounded-none">
                          <img
                            src={closure.img1}
                            alt={closure.name || 'Closure style'}
                            className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-3 text-center bg-white border-t border-zinc-200 flex-grow flex items-center justify-center">
                          <span className="text-[11px] text-zinc-900 font-bold uppercase tracking-wider">
                            {closure.name}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};




export const FabricSection = () => {
  const [activeCategory, setActiveCategory] = useState(FABRICS[0].category);

  const currentCategoryData = FABRICS.find(f => f.category === activeCategory);

  return (
    <section id="fabrics" className="py-10 md:py-14 bg-black overflow-hidden relative border-t border-zinc-900">
      {/* Custom Red Swiper Pagination & Swiper Tab Styles */}
      <style>{`
        #fabrics .swiper-pagination-bullet {
          background-color: #52525b !important;
          opacity: 0.6;
          width: 12px;
          height: 3px;
          border-radius: 0px !important;
          transition: all 0.3s ease;
        }
        #fabrics .swiper-pagination-bullet-active {
          background-color: #E72F07 !important;
          opacity: 1;
          width: 28px;
          height: 3px;
          border-radius: 0px !important;
        }
        .category-tabs-swiper .swiper-slide {
          width: auto !important;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Split Header (Left: Title & Description, Right: Category Tabs Swiper) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8 border-b border-zinc-900 pb-8">
          
          {/* LEFT SIDE: Heading & Description */}
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center space-x-2 text-[#E72F07] font-inter text-xs tracking-[0.25em] uppercase font-bold">
              <span className="w-2.5 h-2.5 bg-[#E72F07]" />
              <span>MATERIAL EXCELLENCE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-anton text-white tracking-wider uppercase leading-none">
              PREMIUM FABRICS
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Technical performance meets luxury. Explore our curated library of high-performance knits, premium woven fabrics, and specialized materials.
            </p>
          </div>

          {/* RIGHT SIDE: Category Tabs Horizontal Slider */}
          <div className="w-full lg:w-auto lg:max-w-md shrink-0 min-w-0">
            <Swiper
              slidesPerView="auto"
              spaceBetween={8}
              grabCursor={true}
              className="category-tabs-swiper !py-1"
            >
              {FABRICS.map((cat) => (
                <SwiperSlide key={cat.category}>
                  <button
                    onClick={() => setActiveCategory(cat.category)}
                    className={`whitespace-nowrap px-5 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest transition-all border ${
                      activeCategory === cat.category 
                        ? 'bg-[#E72F07] border-[#E72F07] text-white shadow-lg' 
                        : 'bg-zinc-950 border-zinc-800 text-gray-400 hover:border-zinc-700 hover:text-white'
                    }`}
                  >
                    {cat.category}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>

        {/* Fabric Swiper Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="relative fabrics-swiper-container"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              grabCursor={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="!pb-12"
            >
              {currentCategoryData?.items.map((item, idx) => (
                <SwiperSlide key={idx} className="h-auto">
                  <div className="bg-zinc-950 border border-zinc-800 rounded-none p-6 hover:bg-zinc-900/60 hover:border-[#E72F07] transition-all group h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-white font-anton text-lg tracking-wider uppercase group-hover:text-[#E72F07] transition-colors">
                          {item.name}
                        </h3>
                        <div className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-none text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
                          {item.colors.length || 1} Variations
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3">
                        {item.colors.length > 0 ? (
                          item.colors.map((color, ci) => (
                            <div key={ci} className="space-y-2">
                              <div className="aspect-square rounded-none overflow-hidden bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-all">
                                <img 
                                  src={`${color.img1}`} 
                                  alt={`${item.name} - ${color.cn || color}`}
                                  className="w-full h-full object-cover opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-500"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <span className="text-[9px] text-zinc-400 font-mono font-bold uppercase tracking-tighter block text-center truncate">
                                {color.cn}
                              </span>
                            </div>
                          ))
                        ) : (
                          [1, 2, 3].map((_, ci) => (
                            <div key={ci} className="space-y-2">
                              <div className="aspect-square rounded-none overflow-hidden bg-zinc-900 border border-zinc-800" />
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
        
        {/* Global Color Palette Section */}
        <div className="mt-12 pt-8 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <h4 className="text-white font-anton text-sm uppercase tracking-widest shrink-0">
              Standard Color Palette
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              {COLORS.map((color, idx) => (
                <div key={idx} className="group relative">
                  <div 
                    className="w-7 h-7 rounded-none border border-zinc-800 group-hover:border-white group-hover:scale-110 transition-all shadow-lg cursor-help"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-[9px] font-bold rounded-none opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-zinc-300 uppercase tracking-wider">
                    {color.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import  { useRef } from 'react';

import { ChevronLeft } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const BrandingSection = () => {
  const prevTechniqueRef = useRef<HTMLButtonElement>(null);
  const nextTechniqueRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="branding" className="py-10 md:py-14 bg-[#FAFAFA] relative">
      {/* Custom Red Swiper Dots Override for Locations Slider */}
      <style>{`
        #branding .swiper-pagination-bullet {
          background-color: #a1a1aa !important;
          opacity: 0.6;
          width: 8px;
          height: 8px;
          border-radius: 0px !important;
          transition: all 0.3s ease;
        }
        #branding .swiper-pagination-bullet-active {
          background-color: #E72F07 !important;
          opacity: 1;
          width: 24px;
          border-radius: 0px !important;
        }
        /* Stretch Swiper slides to equal full height */
        #branding .swiper-wrapper {
          display: flex;
        }
        #branding .swiper-slide {
          height: auto;
          display: flex;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
             <div className="flex items-center space-x-2 text-[#E72F07] font-inter text-xs tracking-[0.25em] uppercase font-bold pb-2">
              <span className="w-2.5 h-2.5 bg-[#E72F07]" />
              <span>Branding Techniques</span>
            </div>
         
            <h2 className="text-4xl md:text-6xl font-anton text-zinc-900 tracking-tighter mb-4">
              YOUR BRAND, OUR CRAFT<span className="text-[#E72F07]"></span>
            </h2>
            <p className="text-zinc-600 max-w-2xl text-base md:text-lg">
              State-of-the-art branding techniques to bring your vision to life with precision and durability.
            </p>
          </div>

          {/* Navigation Arrows for Techniques Slider */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              ref={prevTechniqueRef}
              aria-label="Previous Technique"
              className="w-10 h-10 rounded-none border border-zinc-300 bg-white text-zinc-800 hover:bg-[#E72F07] hover:border-[#E72F07] hover:text-white transition-all shadow-sm flex items-center justify-center disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-zinc-800 disabled:hover:border-zinc-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextTechniqueRef}
              aria-label="Next Technique"
              className="w-10 h-10 rounded-none border border-zinc-300 bg-white text-zinc-800 hover:bg-[#E72F07] hover:border-[#E72F07] hover:text-white transition-all shadow-sm flex items-center justify-center disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-zinc-800 disabled:hover:border-zinc-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 1. BRANDING TECHNIQUES SLIDER (Equal Height Cards) */}
        <div className="mb-14 relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            navigation={{
              prevEl: prevTechniqueRef.current,
              nextEl: nextTechniqueRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevTechniqueRef.current;
                swiper.params.navigation.nextEl = nextTechniqueRef.current;
              }
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!items-stretch"
          >
            {BRANDING_TYPES.map((type, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="bg-white border border-zinc-200 rounded-none overflow-hidden hover:border-[#E72F07]/40 transition-all shadow-sm group w-full flex flex-col justify-between select-none">
                  <div className="aspect-video overflow-hidden bg-zinc-100 relative shrink-0">
                    <img 
                      src={`${type.img1}`} 
                      alt={type.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-zinc-900 font-bold text-base group-hover:text-[#E72F07] transition-colors mb-2">
                        {type.name}
                      </h3>
                      <p className="text-zinc-600 text-xs leading-relaxed">
                        {type.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 2. BRANDING LOCATIONS SLIDER CONTAINER */}
        <div className="bg-white border border-zinc-200 rounded-none p-6 md:p-10 shadow-sm">
          <div className="text-center mb-8">
            <span className="font-inter text-xs tracking-[0.25em] text-[#E72F07]  uppercase font-bold block mb-1">
              Placement Options
            </span>
            <h3 className="text-2xl md:text-4xl font-anton text-zinc-900 uppercase tracking-widest">
              Branding Locations
            </h3>
          </div>
          
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={2}
            grabCursor={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: { slidesPerView: 3, spaceBetween: 16 },
              768: { slidesPerView: 4, spaceBetween: 20 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
            }}
            className="!pb-8"
          >
            {BRANDING_LOCATIONS.map((loc, idx) => (
              <SwiperSlide key={idx} className="!h-auto">
                <div className="group flex flex-col items-center text-center select-none w-full">
                  <div className="w-full aspect-square rounded-none bg-zinc-100 border border-zinc-200 overflow-hidden relative group-hover:border-[#E72F07]/50 transition-all shadow-sm mb-1.5">
                    <img 
                      src={`${loc.img1}`} 
                      alt={loc.name || `Location ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 w-6 h-6 rounded-none bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-[10px] text-white font-bold border border-white/20">
                      {idx + 1}
                    </div>
                  </div>
                  <span className="text-[11px] text-zinc-700 font-bold uppercase tracking-tight group-hover:text-[#E72F07] transition-colors leading-tight">
                    {loc.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};



export const AddonsSection = () => {
  const prevAddonRef = useRef<HTMLButtonElement>(null);
  const nextAddonRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="addons" className="py-10 md:py-14 md:pb-8 bg-zinc-950 relative overflow-hidden">
      {/* Stretch Swiper slides to equal full height */}
      <style>{`
        #addons .swiper-wrapper {
          display: flex;
        }
        #addons .swiper-slide {
          height: auto;
          display: flex;
        }
      `}</style>

      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E72F07]/5 blur-[120px] pointer-events-none rounded-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Dark Arrow Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[#E72F07] font-inter text-xs tracking-[0.25em] uppercase font-bold pb-2">
              <span className="w-2.5 h-2.5 bg-[#E72F07]" />
              <span>FINAL TOUCHES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-anton text-white tracking-tighter">
              DEFINE YOUR BRAND<span className="text-[#E72F07]"></span>
            </h2>
            <p className="text-zinc-400 mt-3 max-w-2xl text-base md:text-lg leading-relaxed">
              Premium add-ons and signature accents engineered to set your custom headwear apart.
            </p>
          </div>

          {/* Dark Arrow Navigation */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              ref={prevAddonRef}
              aria-label="Previous Addon"
              className="w-11 h-11 rounded-none border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-[#E72F07] hover:border-[#E72F07] transition-all shadow-lg flex items-center justify-center disabled:opacity-30 disabled:hover:bg-zinc-900/80 disabled:hover:text-zinc-300 disabled:hover:border-zinc-800"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              ref={nextAddonRef}
              aria-label="Next Addon"
              className="w-11 h-11 rounded-none border border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:text-white hover:bg-[#E72F07] hover:border-[#E72F07] transition-all shadow-lg flex items-center justify-center disabled:opacity-30 disabled:hover:bg-zinc-900/80 disabled:hover:text-zinc-300 disabled:hover:border-zinc-800"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Addons Dark Swiper Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            navigation={{
              prevEl: prevAddonRef.current,
              nextEl: nextAddonRef.current,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                swiper.params.navigation.prevEl = prevAddonRef.current;
                swiper.params.navigation.nextEl = nextAddonRef.current;
              }
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!items-stretch"
          >
            {ADDONS.map((addon, idx) => (
              <SwiperSlide key={idx} className="!h-auto flex">
                <div className="group bg-zinc-900/60 border border-zinc-800/80 rounded-none overflow-hidden hover:border-[#E72F07]/50 hover:bg-zinc-900 transition-all duration-300 shadow-xl w-full flex flex-col justify-between select-none">
                  {/* Image Container */}
                  <div className="aspect-video bg-zinc-800 overflow-hidden relative shrink-0">
                    <img 
                      src={`${addon.img1}`} 
                      alt={addon.name}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                    
                    {/* Index Tag */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-none bg-zinc-950/80 backdrop-blur-md text-[10px] font-mono font-bold text-zinc-400 border border-zinc-800">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-bold text-base group-hover:text-[#E72F07] transition-colors mb-2 tracking-tight">
                        {addon.name}
                      </h4>
                      <p className="text-zinc-400 text-xs leading-relaxed">
                        {addon.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};



export const SizingSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const panamaSizes = [
    { size: 'XS', cm: '54cm' },
    { size: 'Small', cm: '56cm' },
    { size: 'Medium', cm: '57cm' },
    { size: 'Large', cm: '58cm' },
    { size: 'XL', cm: '59cm' },
    { size: '2XL', cm: '61cm' },
  ];

  return (
    <>
      {/* 1. STICKY RIGHT-CENTER CTA BUTTON (Sharp Edges) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#E72F07] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-widest py-4 px-3 shadow-2xl shadow-red-950/50 transition-all active:scale-95 flex items-center gap-2 [writing-mode:vertical-rl] rotate-180 border-y border-l border-red-500/30"
          aria-label="View Sizing Chart"
        >
          View Sizing Chart
        </button>
      </div>

      {/* 2. SIZING POPUP MODAL (Dark Theme - Sharp Edges) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative bg-zinc-900 border border-zinc-800 max-w-4xl w-full shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-950/50">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#E72F07] font-semibold uppercase tracking-widest mb-1">
                  Sizing Guide
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  PRECISION SIZING GUIDE
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  The perfect fit for every athlete, from juniors to adults.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all flex items-center justify-center"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-8">
              {/* Image Previews */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="aspect-video bg-zinc-950 overflow-hidden border border-zinc-800 relative group">
                  <img
                    src="https://kragbuzzsports.com/wp-content/uploads/2026/04/sizing.png"
                    alt="Adult Sizing Guide"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent flex items-end p-4">
                    <span className="text-white font-bold uppercase tracking-widest text-xs">
                      Adult Fit Guide
                    </span>
                  </div>
                </div>

                <div className="aspect-video bg-zinc-950 overflow-hidden border border-zinc-800 relative group">
                  <img
                    src="https://kragbuzzsports.com/wp-content/uploads/2026/04/sizing2.png"
                    alt="Junior Sizing Guide"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent flex items-end p-4">
                    <span className="text-white font-bold uppercase tracking-widest text-xs">
                      Junior Fit Guide
                    </span>
                  </div>
                </div>
              </div>

              {/* Measurement Breakdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Athletic Caps */}
                <div className="bg-zinc-950/60 p-6 border border-zinc-800/80 flex flex-col justify-between">
                  <div>
                    <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
                      Standard Athletic Cap Fit
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center border-b border-zinc-800/80 pb-3">
                        <span className="text-zinc-300 font-bold text-sm">Adult</span>
                        <span className="text-[#E72F07] font-mono font-bold text-sm">54 - 60 cm</span>
                      </div>
                      <div className="flex justify-between items-center border-b border-zinc-800/80 pb-3">
                        <span className="text-zinc-300 font-bold text-sm">Junior</span>
                        <span className="text-[#E72F07] font-mono font-bold text-sm">48 - 55 cm</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 italic mt-6">
                    One size fits most with adjustable closure systems.
                  </p>
                </div>

                {/* Panama Hat Sizing */}
                <div className="bg-zinc-950/60 p-6 border border-zinc-800/80">
                  <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">
                    Panama Hat Sizing
                  </h4>
                  <div className="space-y-2">
                    {panamaSizes.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-xs py-1.5 border-b border-zinc-800/50 last:border-0">
                        <span className="text-zinc-400 font-medium">{item.size}</span>
                        <span className="text-white font-mono font-bold">{item.cm}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};



import { Award } from 'lucide-react';
import { BestSellers2Section } from '../components/BestSellers2Section';
import { InstagramSection, ReviewSection2 } from './Creatory';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
}

const Marquee = ({ children, speed = 35 }: MarqueeProps) => (
  <div className="flex overflow-hidden select-none gap-5 group relative py-2">
    <motion.div
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      className="flex flex-nowrap gap-5 shrink-0"
    >
      {children}
      {children}
    </motion.div>
  </div>
);

export const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<'brands' | 'teams' | 'associations'>('brands');

  const tabs = [
    { id: 'brands', label: 'Global Brands', data: CLIENTS.brands },
    { id: 'teams', label: 'Teams', data: CLIENTS.teams },
    { id: 'associations', label: 'Associations', data: CLIENTS.associations },
  ] as const;

  const currentData = CLIENTS[activeTab] || [];

  return (
    <section className="py-10 md:py-14 bg-zinc-950 relative overflow-hidden">
      {/* Background Subtle Red Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#E72F07]/5 blur-[120px] pointer-events-none rounded-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header + Tabs in Same Line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-zinc-800/80 pb-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-anton text-white tracking-tight">
              TRUSTED BY THE BEST
            </h2>
          </div>

          {/* Dark Filter Tabs Aligned Right */}
          <div className="inline-flex p-1 bg-zinc-900 border border-zinc-800 rounded-none gap-1 shrink-0 self-start md:self-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-none text-xs font-extrabold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-zinc-800 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Large Image Dark Marquee */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Marquee speed={30}>
              {currentData.map((item: any, idx: number) => (
                <div
                  key={idx}
                  className="w-44 h-44 md:w-52 md:h-52 group bg-zinc-900/60 border border-zinc-800/80 rounded-none p-2 hover:border-[#E72F07]/50 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-red-950/20 transition-all duration-300 shrink-0 select-none overflow-hidden"
                >
                  <div className="w-full h-full bg-zinc-950 rounded-none overflow-hidden relative">
                    <img
                      src={`${item.img1}`}
                      alt={item.name || 'Client logo'}
                      className="w-full h-full object-cover opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              ))}
            </Marquee>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-12">CONNECT <br />WITH US</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                <Factory size={18} /> Manufacturing Units
              </h3>
              <div className="grid gap-8">
                {CONTACT_INFO.factories.map((f, idx) => (
                  <div key={idx} className="group space-y-4 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-all">
                    <div className="aspect-video rounded-xl overflow-hidden bg-zinc-800 mb-4">
                      <img 
                        src={`https://picsum.photos/seed/factory-${idx}/800/450`} 
                        alt={f.name}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="text-white font-bold text-lg">{f.name}</h4>
                    <p className="text-gray-500 text-sm flex gap-3"><MapPin size={16} className="shrink-0 text-red-600" /> {f.address}</p>
                    <p className="text-gray-500 text-sm flex gap-3"><Mail size={16} className="shrink-0 text-red-600" /> {f.email}</p>
                    <p className="text-gray-500 text-sm flex gap-3"><Phone size={16} className="shrink-0 text-red-600" /> {f.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-6 md:p-10 rounded-3xl border border-zinc-800">
          <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
            <MapPin size={18} /> Retail & Corporate
          </h3>
          <div className="space-y-10">
            {CONTACT_INFO.presence.map((p, idx) => (
              <div key={idx} className="group space-y-4 p-6 bg-black/30 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-all">
                <div className="aspect-video rounded-xl overflow-hidden bg-zinc-800 mb-4">
                  <img 
                    src={`https://picsum.photos/seed/showroom-${idx}/800/450`} 
                    alt={p.name}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-white font-bold text-xl">{p.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.address}</p>
                <div className="pt-4 space-y-2 border-t border-zinc-800">
                  <p className="text-gray-300 text-sm flex items-center gap-3"><Mail size={14} className="text-red-600" /> {p.email}</p>
                  <p className="text-gray-300 text-sm flex items-center gap-3"><Phone size={14} className="text-red-600" /> {p.phone}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-red-600 rounded-2xl text-white">
            <h4 className="text-2xl font-black mb-2">START YOUR ORDER</h4>
            <p className="text-red-100 mb-6 font-medium">Ready to customize your premium headwear? Get in touch with our experts today.</p>
            <button className="w-full py-4 bg-white text-red-600 font-black rounded-xl hover:bg-gray-100 transition-all uppercase tracking-widest">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);


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
             CRAFTED TO FIT. <br />
              <span className="text-[#E72F07]">BUILT TO LAST.</span>
            </h2>

            {/* Expanded Description */}
            <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed max-w-xl">
              <p>
                Engineered for maximum comfort and high-impact style, our caps combine structured silhouettes with advanced sweat-wicking technology. Every crown, visor, and closure is engineered to deliver an unrivaled fit.
              </p>
              <p>
                From heavy training sessions to daily street style, our headwear features lightweight, ultra-breathable fabrics and reinforced stitching built to hold its structure through relentless wear.
              </p>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-neutral-200 w-full max-w-xl">
              <div>
                <span className="block font-anton text-2xl text-[#E72F07]">PERFECT</span>
                <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">Crown Fit</span>
              </div>
              <div>
                <span className="block font-anton text-2xl text-[#E72F07]">PRO-LEVEL</span>
                <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">Airflow</span>
              </div>
              <div>
                <span className="block font-anton text-2xl text-[#E72F07]">BUILT</span>
                <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">For Action</span>
              </div>
            </div>

            {/* Action Button (Commented as in original) */}
            {/* <div className="pt-2">
              <a
                href="#collection"
                className="inline-block bg-black border border-black text-white hover:bg-[#E72F07] hover:border-[#E72F07] font-bold tracking-wider text-xs uppercase px-8 py-4 transition-all duration-300 active:scale-95 shadow-sm"
              >
                EXPLORE CAPS COLLECTION
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
                src="/ktt.webp"
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
export function KragCaps({ onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds}:any) {
  return (
    /* Add padding-top to account for fixed header */
    <main>
      <HeroBanner />
      <AboutSection />
      <BestSellers2Section
  subtitle="KRAGCAPS"
  title="Headwear That Moves"
  products={HEADWEAR}
  onQuickView={onQuickView}
  onAddToCart={onAddToCart}
  onToggleWishlist={onToggleWishlist}
  wishlistIds={wishlistIds}
/>
      <StylesSection />
      <CustomizationSection />
      <FabricSection />
      <BrandingSection />
      <AddonsSection />
      <SizingSection />
      <PortfolioSection />
       <InstagramSection/>
       <ReviewSection2 
  reviews={REVIEWS}
  title="HEADWEAR TESTED BY PROS"
  subtitle="SELECT WEARER REVIEW"
  fallbackTag="PRO HEADWEAR TESTER"
/>
      {/* <ContactSection /> */}
    </main>
  );
}