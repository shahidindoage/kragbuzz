import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  allProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  allProducts,
  onSelectProduct,
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filtered = query.trim() === ''
    ? []
    : allProducts.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white/95 backdrop-blur-md p-4 md:p-12 text-[#313131]">
      <div className="max-w-4xl mx-auto pt-8">
        <div className="flex justify-between items-center border-b border-neutral-200 pb-4 mb-8">
          <div className="flex items-center space-x-3 flex-1">
            <Search size={28} className="text-black shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH PRODUCTS, CATEGORIES, OR SPECS..."
              autoFocus
              className="bg-transparent w-full text-xl md:text-3xl font-anton tracking-wider text-black placeholder-neutral-400 focus:outline-none uppercase"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-600 hover:text-black transition-colors border border-neutral-300 bg-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        {query === '' && (
          <div className="space-y-6">
            <p className="font-anton text-xs text-neutral-500 tracking-widest uppercase">POPULAR SEARCHES</p>
            <div className="flex flex-wrap gap-3">
              {['HOODIE', 'WINDRUNNER', 'SNEAKERS', 'DUFFEL 50L', 'CRICKET', 'CAP', 'FLASK', 'TIGHTS'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 bg-neutral-100 hover:bg-black hover:text-white text-neutral-800 font-inter text-xs font-bold tracking-wider uppercase border border-neutral-200 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {query !== '' && (
          <div className="space-y-6">
            <p className="font-anton text-xs text-neutral-600 tracking-widest uppercase">
              FOUND {filtered.length} RESULTS FOR "{query.toUpperCase()}"
            </p>

            {filtered.length === 0 ? (
              <p className="font-inter text-sm text-neutral-500 py-12">
                No matching sportswear products found. Try searching for "hoodie", "duffel", "windrunner", or "cricket".
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="p-4 bg-neutral-50 border border-neutral-200 hover:border-black transition-all cursor-pointer flex space-x-4 items-center group shadow-sm"
                  >
                    <div className="w-16 h-20 bg-neutral-100 overflow-hidden shrink-0 border border-neutral-200">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-inter text-[10px] text-neutral-500 font-bold tracking-widest uppercase">
                        {prod.categoryLabel}
                      </p>
                      <h4 className="font-anton text-base text-black tracking-wide uppercase group-hover:text-neutral-700">
                        {prod.name}
                      </h4>
                      <p className="font-inter text-xs text-black font-bold mt-1">
                        ${prod.price} USD
                      </p>
                    </div>
                    <ArrowRight size={18} className="text-neutral-400 group-hover:text-black transition-colors" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
