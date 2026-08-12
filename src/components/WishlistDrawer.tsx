import React from 'react';
import { X, Trash2, Heart, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveFromWishlist,
  onAddToCart,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-neutral-200 text-[#313131] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-white">
            <div className="flex items-center space-x-3">
              <Heart size={22} className="text-black fill-black" />
              <h2 className="font-anton text-2xl tracking-wider uppercase text-black">
                SAVED ITEMS ({items.length})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-500 hover:text-black transition-colors"
              aria-label="Close Wishlist"
            >
              <X size={20} />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <Heart size={48} className="mx-auto text-neutral-400" />
                <p className="font-anton text-xl tracking-wider text-black">YOUR WISHLIST IS EMPTY</p>
                <p className="font-inter text-xs text-neutral-600 max-w-xs mx-auto">
                  Save your favorite athletic fashion pieces to access them anywhere or quick-add to bag.
                </p>
              </div>
            ) : (
              items.map((product) => (
                <div key={product.id} className="flex space-x-4 pb-6 border-b border-neutral-100 items-center">
                  <div className="w-20 h-24 bg-neutral-100 border border-neutral-200 overflow-hidden shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between h-24">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-anton text-sm tracking-wide text-black uppercase leading-tight pr-2">
                          {product.name}
                        </h3>
                        <button
                          onClick={() => onRemoveFromWishlist(product.id)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                          title="Remove from wishlist"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <p className="font-inter text-xs text-black font-semibold mt-1">
                        ${product.price} USD
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        onAddToCart(
                          product,
                          product.colors[0]?.name || 'Standard',
                          product.sizes[0] || 'M'
                        );
                        onRemoveFromWishlist(product.id);
                      }}
                      className="mt-2 w-full py-2 bg-black text-white font-inter font-bold text-[11px] tracking-widest uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <ShoppingBag size={14} />
                      <span>ADD TO BAG</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
