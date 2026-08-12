import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { CartItem } from '../types';

interface ShoppingBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, color: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, color: string, size: string) => void;
  onCheckout: () => void;
}

export const ShoppingBagDrawer: React.FC<ShoppingBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 150;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountAway = freeShippingThreshold - subtotal;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-neutral-200 text-[#313131] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-white">
            <div className="flex items-center space-x-3">
              <ShoppingBag size={22} className="text-black" />
              <h2 className="font-anton text-2xl tracking-wider uppercase text-black">
                YOUR BAG ({items.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-500 hover:text-black transition-colors"
              aria-label="Close Shopping Bag"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-neutral-50 px-6 py-3 border-b border-neutral-200">
            {amountAway > 0 ? (
              <p className="text-xs font-inter text-neutral-700">
                ADD <span className="text-black font-bold">${amountAway.toFixed(2)}</span> MORE FOR FREE GLOBAL EXPRESS SHIPPING
              </p>
            ) : (
              <p className="text-xs font-inter text-emerald-600 font-semibold flex items-center space-x-1">
                <span>✓ UNLOCKED FREE GLOBAL EXPRESS SHIPPING</span>
              </p>
            )}
            <div className="w-full bg-neutral-200 h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-black h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-neutral-100">
            {items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <ShoppingBag size={48} className="mx-auto text-neutral-400" />
                <p className="font-anton text-xl tracking-wider text-black">YOUR BAG IS EMPTY</p>
                <p className="font-inter text-xs text-neutral-600 max-w-xs mx-auto">
                  Explore our best sellers, accessories, and bags collections to elevate your athletic arsenal.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-3 bg-black text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              items.map((item, idx) => (
                <div key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}-${idx}`} className="pt-6 first:pt-0 flex space-x-4">
                  <div className="w-20 h-24 bg-neutral-100 border border-neutral-200 overflow-hidden shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-anton text-sm tracking-wide text-black uppercase leading-tight pr-2">
                          {item.product.name}
                        </h3>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedColor, item.selectedSize)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <p className="font-inter text-[11px] text-neutral-500 mt-1">
                        COLOR: <span className="text-black font-medium">{item.selectedColor}</span> | SIZE: <span className="text-black font-medium">{item.selectedSize}</span>
                      </p>
                      <p className="font-inter text-xs text-black mt-1 font-semibold">
                        ${item.product.price} USD
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-100">
                      <div className="flex items-center border border-neutral-300 bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, item.selectedSize, -1)}
                          className="px-2.5 py-1 text-xs text-neutral-600 hover:text-black"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 font-inter text-xs font-bold text-black">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.selectedColor, item.selectedSize, 1)}
                          className="px-2.5 py-1 text-xs text-neutral-600 hover:text-black"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-inter text-sm font-bold text-black">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-6 bg-neutral-50 border-t border-neutral-200 space-y-4">
              <div className="space-y-2 font-inter text-xs text-neutral-600">
                <div className="flex justify-between">
                  <span>SUBTOTAL</span>
                  <span className="text-black font-bold text-sm">${subtotal.toFixed(2)} USD</span>
                </div>
                <div className="flex justify-between">
                  <span>ESTIMATED SHIPPING</span>
                  <span className="text-black">{amountAway <= 0 ? 'FREE' : '$15.00 USD'}</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>TAXES & DUTIES</span>
                  <span>CALCULATED AT CHECKOUT</span>
                </div>
              </div>

              <button
                onClick={onCheckout}
                className="w-full py-4 bg-black text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-neutral-800 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] font-inter text-neutral-500 pt-1">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>SECURE 256-BIT ENCRYPTED CHECKOUT</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
