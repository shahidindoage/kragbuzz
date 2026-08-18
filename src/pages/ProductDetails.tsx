// src/pages/ProductDetails.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductDetailsPage } from '../components/ProductDetailsPage';
import { BEST_SELLERS, NALL_PRODUCTS, RELATED_PRODUCTS } from '../data/mockData';
import { Product } from '../types';

interface ProductDetailsWrapperProps {
  onAddToCart: (product: Product, color: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

export const ProductDetailsRoute: React.FC<ProductDetailsWrapperProps> = ({
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();

  // Handle String vs Number comparison safely
  const foundProduct = NALL_PRODUCTS.find((p) => String(p.id) === String(productId));

  // Render "Not Found" if product is missing OR no URL param exists
  if (!foundProduct) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-[#0B0C10] text-white space-y-4">
        <h2 className="text-2xl font-mono uppercase tracking-widest">Product Not Found</h2>
        <p className="text-xs font-mono text-neutral-400">
          {productId ? `ID: ${productId}` : 'No product selected'}
        </p>
        <button
          onClick={() => navigate('/collections/all')}
          className="border border-white/20 px-6 py-2 font-mono text-xs uppercase hover:bg-white hover:text-black transition"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  return (
    <ProductDetailsPage
      product={foundProduct}
      relatedProducts={RELATED_PRODUCTS}
      onAddToCart={onAddToCart}
      onToggleWishlist={onToggleWishlist}
      isWishlisted={wishlistIds.includes(String(foundProduct.id))}
    />
  );
};