import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Eye, Star, Layers, Sparkles, ChevronLeft, ChevronRight, Crown } from 'lucide-react';
import { Product } from '../types';
import { KIDS, HEADWEAR } from '../data/mockData';

interface AccessoriesProductsSectionProps {
  products: Product[];
  kidsProducts?: Product[];
  headwearProducts?: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const AccessoriesProductsSection: React.FC<AccessoriesProductsSectionProps> = ({
  products,
  kidsProducts = KIDS,
  headwearProducts = HEADWEAR,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [activeTab, setActiveTab] = useState<'accessories' | 'kids' | 'headwear'>('accessories');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const currentProducts =
    activeTab === 'accessories'
      ? products
      : activeTab === 'kids'
      ? kidsProducts
      : headwearProducts;

  // Handle responsive items per page
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

  // Reset slide index when tab changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  // Auto slide interval
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
    <section id="accessories-products-section" className="py-20 sm:py-24 bg-neutral-50 text-[#313131] relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-neutral-200 pb-8">
          <div>
            {/* <div className="flex items-center space-x-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E72F07] inline-block animate-pulse"></span>
              <span className="font-inter text-xs font-extrabold tracking-[0.25em] text-neutral-600 uppercase">
                {activeTab === 'accessories'
                  ? 'EQUIPMENT & PERFORMANCE ACCS'
                  : activeTab === 'kids'
                  ? 'JUNIOR ATHLETIC SERIES'
                  : 'TACTICAL & PERFORMANCE CAPS'}
              </span>
            </div> */}
            
            <h2 className="font-anton text-3xl sm:text-5xl lg:text-6xl text-black tracking-wider uppercase">
              {activeTab === 'accessories'
                ? 'NO FLEX. JUST FLOW.'
                : activeTab === 'kids'
                ? 'NO FLEX. JUST FLOW.'
                : 'NO FLEX. JUST FLOW.'}
            </h2>
          </div>

          {/* Three Category Tab Bar */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-neutral-200/80 p-1.5 rounded-none border border-neutral-300 self-start md:self-auto">
            <button
              onClick={() => setActiveTab('accessories')}
              className={`flex items-center space-x-2 px-3.5 sm:px-5 py-2.5 font-inter text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeTab === 'accessories'
                  ? 'bg-black text-white shadow-md'
                  : 'text-neutral-700 hover:text-black hover:bg-neutral-300/60'
              }`}
            >
              {/* <Layers size={14} /> */}
              <span>ACCESSORIES</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeTab === 'accessories' ? 'bg-[#E72F07] text-white' : 'bg-neutral-300 text-neutral-800'}`}>
                {products.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('kids')}
              className={`flex items-center space-x-2 px-3.5 sm:px-5 py-2.5 font-inter text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeTab === 'kids'
                  ? 'bg-black text-white shadow-md'
                  : 'text-neutral-700 hover:text-black hover:bg-neutral-300/60'
              }`}
            >
              {/* <Sparkles size={14} /> */}
              <span>KIDS</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeTab === 'kids' ? 'bg-[#E72F07] text-white' : 'bg-neutral-300 text-neutral-800'}`}>
                {kidsProducts.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('headwear')}
              className={`flex items-center space-x-2 px-3.5 sm:px-5 py-2.5 font-inter text-xs font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer ${
                activeTab === 'headwear'
                  ? 'bg-black text-white shadow-md'
                  : 'text-neutral-700 hover:text-black hover:bg-neutral-300/60'
              }`}
            >
              {/* <Crown size={14} /> */}
              <span>HEADWEAR</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeTab === 'headwear' ? 'bg-[#E72F07] text-white' : 'bg-neutral-300 text-neutral-800'}`}>
                {headwearProducts.length}
              </span>
            </button>
          </div>
        </div>

        {/* Subtitle & Slider Nav Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-inter text-neutral-600">
          <p className="max-w-xl invisible">
            {activeTab === 'accessories'
              ? 'Essential tactical gear, hydration solutions, and sweat control tools engineered to complete your elite kit.'
              : activeTab === 'kids'
              ? 'High-performance activewear sets, durable sneakers, and comfortable training apparel engineered for young athletes.'
              : 'Laser-perforated snapbacks, lightweight runner visors, thermo-knit beanies, and sun protection buckets engineered for maximum focus.'}
          </p>

          <div className="flex items-center space-x-4 self-end sm:self-auto">
            {/* <span className="font-mono text-[11px] text-neutral-600 font-semibold uppercase tracking-widest">
              SHOWING {currentProducts.length} ITEMS
            </span> */}

            {/* Slider Navigation Buttons */}
            {/* <div className="flex items-center space-x-2">
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
            </div> */}
          </div>
        </div>

        {/* Auto-sliding Carousel Track */}
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
                    {/* Product Image Container */}
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

                      {/* New Tag */}
                      {product.isNew && (
                        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#E72F07] text-white font-inter text-[10px] font-extrabold uppercase tracking-widest">
                          NEW DROP
                        </span>
                      )}

                      {/* Wishlist Button */}
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

                      {/* Hover Action Bar */}
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
                            onAddToCart(product, product.colors[0]?.name || 'Standard', product.sizes[0] || 'One Size');
                          }}
                          className="p-2.5 bg-white border border-neutral-300 text-black hover:bg-neutral-100 transition-colors"
                          title="Quick Add to Bag"
                        >
                          <ShoppingBag size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
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

        {/* Carousel Pagination Indicators */}
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

