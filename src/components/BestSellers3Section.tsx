import React, { useRef } from 'react';
import { Heart, ShoppingBag, ChevronLeft, ChevronRight, Eye, Star } from 'lucide-react';
import { Product } from '../types';

interface BestSellersSectionProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  subtitle?: string;
  title?: string;
}

export const BestSellers3Section: React.FC<BestSellersSectionProps> = ({
  products,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  subtitle = 'BEST SELLERS',
  title = 'MADE TO MOVE. BUILT TO GRIND.',
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="best-sellers-section2" className="py-10 md:py-14 bg-white text-[#313131] relative border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-neutral-200 pb-6">
          <div>
            {/* Dynamic Subtitle */}
            <div className="flex items-center space-x-2 text-neutral-600 font-inter text-xs tracking-[0.25em] uppercase font-bold mb-2">
              <span className="w-2 h-2 bg-[#E72F07]"></span>
              <span>{subtitle}</span>
            </div>

            {/* Dynamic Title */}
            <h2 className="font-anton text-4xl sm:text-6xl text-black tracking-wider uppercase">
              {title}
            </h2>
          </div>

          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleScroll('left')}
                className="w-12 h-12 border border-neutral-300 bg-white hover:bg-black hover:text-white transition-all flex items-center justify-center text-black cursor-pointer"
                aria-label="Scroll Left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-12 h-12 border border-neutral-300 bg-white hover:bg-black hover:text-white transition-all flex items-center justify-center text-black cursor-pointer"
                aria-label="Scroll Right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth pb-8"
        >
          {products.map((product) => {
            const isWishlisted = wishlistIds.includes(product.id);

            return (
              <div
                key={product.id}
                className="w-[290px] sm:w-[350px] shrink-0 bg-white border border-neutral-200 group hover:border-black transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden cursor-pointer" onClick={() => onQuickView(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.secondaryImage && (
                    <img
                      src={product.secondaryImage}
                      alt={`${product.name} secondary view`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10">
                    {product.isBestSeller && (
                      <span className="bg-black text-white font-anton text-[10px] tracking-wider px-2.5 py-1 uppercase font-bold">
                        BEST SELLER
                      </span>
                    )}
                    {product.isNew && (
                      <span className="bg-white text-black border border-neutral-300 font-anton text-[10px] tracking-wider px-2.5 py-1 uppercase">
                        NEW ARRIVAL
                      </span>
                    )}
                  </div>

                  {/* Top Wishlist Icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleWishlist(product);
                    }}
                    className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer ${
                      isWishlisted
                        ? 'bg-red-600 text-white'
                        : 'bg-white/80 text-black hover:bg-black hover:text-white border border-neutral-200'
                    }`}
                    title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <Heart size={16} className={isWishlisted ? 'fill-white' : ''} />
                  </button>

                  {/* Hover Quick View Trigger Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="flex-1 py-2.5 bg-black text-white font-inter font-bold text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                    >
                      <Eye size={14} />
                      <span>QUICK VIEW</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product, product.colors[0]?.name || 'Standard', product.sizes[0] || 'M');
                      }}
                      className="p-2.5 bg-white border border-neutral-300 text-black hover:bg-neutral-100 transition-colors cursor-pointer"
                      title="Quick Add to Bag"
                    >
                      <ShoppingBag size={16} />
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-inter font-bold text-neutral-500 tracking-widest uppercase mb-1">
                      <span>{product.categoryLabel}</span>
                      <span className="flex items-center text-amber-500">
                        <Star size={12} className="fill-amber-400 mr-1 text-amber-500" />
                        {product.rating}
                      </span>
                    </div>

                    <h3
                      onClick={() => onQuickView(product)}
                      className="font-anton text-lg tracking-wide text-black uppercase group-hover:text-neutral-600 cursor-pointer transition-colors leading-tight"
                    >
                      {product.name}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 flex justify-between items-center">
                    {/* Color Swatches */}
                    <div className="flex space-x-1.5 items-center">
                      {product.colors.map((color) => (
                        <span
                          key={color.name}
                          className="w-3 h-3 rounded-full border border-neutral-300"
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                      <span className="font-inter text-[10px] text-neutral-400 pl-1">
                        +{product.colors.length}
                      </span>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <span className="font-inter text-sm font-bold text-black">
                        ₹{product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};