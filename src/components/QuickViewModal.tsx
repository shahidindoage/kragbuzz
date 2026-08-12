import React, { useState } from 'react';
import { X, Heart, ShoppingBag, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface QuickViewModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!isOpen || !product) return null;

  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || '');
  const [addedSuccess, setAddedSuccess] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedColor, selectedSize);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-md" onClick={onClose} />

      <div className="relative bg-white border border-neutral-200 text-[#313131] max-w-4xl w-full shadow-2xl overflow-hidden z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-neutral-100 hover:bg-black hover:text-white p-2 text-black transition-colors border border-neutral-300"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="bg-neutral-100 relative min-h-[350px] md:min-h-[500px]">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            {product.isBestSeller && (
              <span className="absolute top-4 left-4 bg-black text-white font-anton text-xs tracking-wider px-3 py-1 uppercase">
                BEST SELLER
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <p className="font-inter text-xs text-neutral-500 font-bold tracking-widest uppercase mb-1">
                {product.categoryLabel}
              </p>
              <h2 className="font-anton text-2xl md:text-3xl tracking-wide uppercase text-black mb-2">
                {product.name}
              </h2>

              <div className="flex items-center space-x-3 mb-4">
                <span className="font-inter text-xl font-bold text-black">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="font-inter text-sm text-neutral-400 line-through">₹{product.originalPrice} </span>
                )}
                <span className="text-xs font-inter text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 font-semibold">
                  ★ {product.rating} ({product.reviewsCount} REVIEWS)
                </span>
              </div>

              <p className="font-inter text-xs text-neutral-800 leading-relaxed mb-6 font-normal">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-5">
                <label className="block font-anton text-xs tracking-wider uppercase text-neutral-600 mb-2">
                  COLOR: <span className="text-black font-inter font-bold">{selectedColor}</span>
                </label>
                <div className="flex space-x-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        selectedColor === c.name
                          ? 'ring-2 ring-black ring-offset-2 ring-offset-white scale-110'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && <Check size={12} className={c.hex === '#ffffff' || c.hex === '#f8f9fa' ? 'text-black' : 'text-white'} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="font-anton text-xs tracking-wider uppercase text-neutral-600">
                    SELECT SIZE
                  </label>
                  <span className="font-inter text-[11px] text-neutral-600 hover:text-black underline cursor-pointer">
                    SIZE GUIDE
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-2 text-xs font-inter font-bold tracking-wider uppercase border transition-all ${
                        selectedSize === s
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-neutral-800 border-neutral-300 hover:border-black'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features list */}
              {product.features && (
                <div className="border-t border-neutral-200 pt-4 mb-6">
                  <p className="font-anton text-xs text-neutral-600 tracking-wider uppercase mb-2">ENGINEERED HIGHLIGHTS</p>
                  <ul className="space-y-1">
                    {product.features.map((feat, i) => (
                      <li key={i} className="font-inter text-[11px] text-neutral-700 flex items-center space-x-2">
                        <Sparkles size={12} className="text-neutral-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleAdd}
                disabled={addedSuccess}
                className={`w-full py-4 font-inter font-bold text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2 ${
                  addedSuccess
                    ? 'bg-emerald-600 text-white'
                    : 'bg-black text-white hover:bg-neutral-800'
                }`}
              >
                {addedSuccess ? (
                  <>
                    <Check size={18} />
                    <span>ADDED TO YOUR BAG</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>ADD TO BAG — ₹{product.price} </span>
                  </>
                )}
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                className={`w-full py-3 border font-inter font-semibold text-xs tracking-widest uppercase transition-all flex items-center justify-center space-x-2 ${
                  isWishlisted
                    ? 'border-red-500 bg-red-50 text-red-600'
                    : 'border-neutral-300 bg-white text-black hover:border-black'
                }`}
              >
                <Heart size={16} className={isWishlisted ? 'fill-red-600' : ''} />
                <span>{isWishlisted ? 'SAVED TO WISHLIST' : 'SAVE TO WISHLIST'}</span>
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-inter text-neutral-500 pt-2">
                <ShieldCheck size={14} className="text-neutral-500" />
                <span>AUTHENTIC GUARANTEE • 30-DAY COMPLIMENTARY RETURNS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
