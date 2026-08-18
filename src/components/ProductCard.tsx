import React from 'react';
import { Heart, Eye, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
}) => {
  const defaultColor = product.colors?.[0]?.name || 'Standard';
  const defaultSize = product.sizes?.[0] || 'M';

  return (
    <div className="group relative bg-white border border-neutral-200 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-md overflow-hidden">
      
      {/* Visual Image Container */}
      <div 
        className="relative aspect-[3/4] bg-[#F5F5F3] overflow-hidden cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Secondary Image Crossfade on Hover */}
        {product.secondaryImage && (
          <img
            src={product.secondaryImage}
            alt={`${product.name} alternate view`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col space-y-1.5 z-10 pointer-events-none">
          {product.isBestSeller && (
            <span className="bg-black text-white font-anton text-[9px] tracking-widest px-2.5 py-1 uppercase font-bold shadow-xs">
              BEST SELLER
            </span>
          )}
          {product.isNew && (
            <span className="bg-white/90 backdrop-blur-xs text-black border border-neutral-200 font-anton text-[9px] tracking-widest px-2.5 py-1 uppercase font-bold shadow-xs">
              NEW ARRIVAL
            </span>
          )}
        </div>

        {/* Wishlist Action Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-200 cursor-pointer ${
            isWishlisted
              ? 'bg-[#E72F07] text-white shadow-md scale-105'
              : 'bg-white/80 text-black hover:bg-black hover:text-white border border-neutral-200/80 shadow-xs'
          }`}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={15} className={isWishlisted ? 'fill-white stroke-white' : 'stroke-current'} />
        </button>

        {/* Action Tray Slide-Up Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex space-x-2 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="flex-1 py-2.5 bg-white text-black font-inter font-extrabold text-[11px] tracking-wider uppercase hover:bg-neutral-100 transition-colors flex items-center justify-center space-x-1.5 cursor-pointer shadow-xs"
          >
            <Eye size={14} />
            <span>QUICK VIEW</span>
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product, defaultColor, defaultSize);
            }}
            className="p-2.5 bg-[#E72F07] text-white hover:bg-black transition-colors duration-200 cursor-pointer shadow-xs flex items-center justify-center"
            title="Quick Add to Bag"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>

      {/* Product Info Footer */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
        <div className="space-y-1">
          <div className="flex justify-between items-center text-[10px] font-inter font-bold text-neutral-400 tracking-widest uppercase">
            <span>{product.categoryLabel || 'TECHNICAL GEAR'}</span>
            {product.rating && (
              <span className="flex items-center text-neutral-800 font-bold">
                <Star size={11} className="fill-amber-400 text-amber-400 mr-1" />
                {product.rating}
              </span>
            )}
          </div>

          <h3
            onClick={() => onQuickView(product)}
            className="font-anton text-base sm:text-lg tracking-wide text-black uppercase group-hover:text-[#E72F07] cursor-pointer transition-colors duration-200 leading-snug line-clamp-1"
          >
            {product.name}
          </h3>
        </div>

        {/* Swatches & Price */}
        <div className="pt-2.5 border-t border-neutral-100 flex justify-between items-center">
          <div className="flex space-x-1 items-center">
            {product.colors?.slice(0, 3).map((color) => (
              <span
                key={color.name}
                className="w-2.5 h-2.5 rounded-full border border-neutral-300 ring-1 ring-white"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {(product.colors?.length ?? 0) > 3 && (
              <span className="font-inter text-[9px] font-bold text-neutral-400 pl-0.5">
                +{(product.colors?.length ?? 0) - 3}
              </span>
            )}
          </div>

          <div className="text-right font-inter font-extrabold text-sm text-black tracking-tight">
            ₹{product.price?.toLocaleString('en-IN') ?? '0'}
          </div>
        </div>
      </div>

    </div>
  );
};