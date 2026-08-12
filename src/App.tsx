import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { AboutBanner } from './components/AboutBanner';
import { ManAndWomanBanner } from './components/ManAndWomanBanner';
import { BestSellersSection } from './components/BestSellersSection';
import { AccessoriesBanner } from './components/AccessoriesBanner';
import { AccessoriesProductsSection } from './components/AccessoriesProductsSection';
import { BagsBanner } from './components/BagsBanner';
import { BagsProductsSection } from './components/BagsProductsSection';
import { CricketBanner } from './components/CricketBanner';
import { ReviewSection } from './components/ReviewSection';
import { Footer } from './components/Footer';

import { ShoppingBagDrawer } from './components/ShoppingBagDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';

import { BEST_SELLERS, ACCESSORIES, KIDS, HEADWEAR, BAGS, CRICKET, REVIEWS } from './data/mockData';
import { Product, CartItem } from './types';

export default function App() {
  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  
  // Drawer & Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  // Helper functions
  const handleAddToCart = (product: Product, color: string, size: string) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === color &&
          item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [...prev, { product, selectedColor: color, selectedSize: size, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, color: string, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (
            item.product.id === productId &&
            item.selectedColor === color &&
            item.selectedSize === size
          ) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string, color: string, size: string) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedColor === color &&
            item.selectedSize === size
          )
      )
    );
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistItems((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistItems((prev) => prev.filter((p) => p.id !== productId));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allProducts = [...BEST_SELLERS, ...ACCESSORIES, ...BAGS];
  const wishlistIds = wishlistItems.map((p) => p.id);

  return (
    <div className="min-h-screen bg-white text-[#313131] font-inter selection:bg-black selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        onSelectCategory={scrollToSection}
      />

      {/* Main Homepage Sections (EXACT REQUESTED STRUCTURE) */}
      <main>
        {/* 1. Hero Banner */}
        <HeroBanner
          onExploreClick={() => scrollToSection('man-woman-banner')}
          onSecondaryClick={() => scrollToSection('best-sellers-section')}
        />

        {/* 2. About Banner */}
        <AboutBanner onExploreClick={() => scrollToSection('man-woman-banner')} />

        {/* 3. Man And Woman Banner */}
        <ManAndWomanBanner onSelectCategory={scrollToSection} />

        {/* 4. Best Sellers Products */}
        <BestSellersSection
          products={BEST_SELLERS}
          onQuickView={(p) => setSelectedQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        {/* 5. Accessories Banner */}
        <AccessoriesBanner
          onExploreClick={() => scrollToSection('accessories-products-section')}
        />

        {/* 6. Product Section (Accessories Showcase) */}
        <AccessoriesProductsSection
          products={ACCESSORIES}
          kidsProducts={KIDS}
          headwearProducts={HEADWEAR}
          onQuickView={(p) => setSelectedQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

       {/* 9. Cricket Banner */}
        <CricketBanner
          onExploreClick={() => scrollToSection('best-sellers-section')}
        />

        {/* 8. Product Section (Bags Showcase) */}
        <BagsProductsSection
          products={BAGS}
          cricketProducts={CRICKET}
          onQuickView={(p) => setSelectedQuickViewProduct(p)}
          onAddToCart={handleAddToCart}
          onToggleWishlist={handleToggleWishlist}
          wishlistIds={wishlistIds}
        />

        

         {/* 7. Bags Banner */}
        <BagsBanner
          onExploreClick={() => scrollToSection('bags-products-section')}
        />

        {/* 10. Review Section */}
        <ReviewSection reviews={REVIEWS} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Drawers & Modals */}
      <ShoppingBagDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          alert('Proceeding to AURA Secure Global Checkout...');
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistItems}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
      />

      <QuickViewModal
        product={selectedQuickViewProduct}
        isOpen={!!selectedQuickViewProduct}
        onClose={() => setSelectedQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        isWishlisted={selectedQuickViewProduct ? wishlistIds.includes(selectedQuickViewProduct.id) : false}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        allProducts={allProducts}
        onSelectProduct={(p) => setSelectedQuickViewProduct(p)}
      />
    </div>
  );
}
