import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { ShoppingBagDrawer } from './components/ShoppingBagDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchModal } from './components/SearchModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { KragCaps } from './pages/KragCaps';
import { Creatory } from './pages/Creatory';
import { CategoryPage } from './components/CategoryPage';

import { BEST_SELLERS, ACCESSORIES, BAGS } from './data/mockData';
import { Product, CartItem } from './types';
import { ProductDetailsRoute } from './pages/ProductDetails';

// Wrapper component to extract URL category parameter
interface CategoryPageWrapperProps {
  onBackToHome: () => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
}

const CategoryPageWrapper: React.FC<CategoryPageWrapperProps> = ({
  onBackToHome,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
}) => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();

  return (
    <CategoryPage
      selectedCategory={categoryId || 'all'}
      onSelectCategory={(category) => navigate(`/collections/${category}`)}
      onBackToHome={onBackToHome}
      onQuickView={onQuickView}
      onAddToCart={onAddToCart}
      onToggleWishlist={onToggleWishlist}
      wishlistIds={wishlistIds}
    />
  );
};

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Cart & Wishlist State
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  // Drawer & Modal States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedQuickViewProduct, setSelectedQuickViewProduct] = useState<Product | null>(null);

  // Helper functions for Cart
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

  // Helper functions for Wishlist
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

  // Navigation & Category Route Resolver
  const handleSelectCategory = (targetId: string) => {
    // Dedicated page routes
    if (targetId === 'krag-caps') {
      navigate('/krag-caps');
      return;
    }
    if (targetId === 'creatory') {
      navigate('/creatory');
      return;
    }

    // Direct slug mapping fallback
    const slugMap: Record<string, string> = {
      'men': 'mens',
      'women': 'womens',
      'cricket-set': 'cricket',
    };

    const targetCategory = slugMap[targetId] || targetId;

    // Handle home-page scroll targets vs route switching
    if (['man-woman-banner', 'best-sellers-section', 'accessories-products-section', 'bags-products-section'].includes(targetCategory)) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(targetCategory);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById(targetCategory);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to Category Page route
      navigate(`/collections/${targetCategory}`);
    }
  };

  const allProducts = [...BEST_SELLERS, ...ACCESSORIES, ...BAGS];
  const wishlistIds = wishlistItems.map((p) => p.id);

  return (
    <div className="min-h-screen bg-white text-[#313131] font-inter selection:bg-black selection:text-white">
      {/* Navigation */}
      <Navbar
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onSearchClick={() => setIsSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Dynamic Page Views */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onQuickView={(p) => setSelectedQuickViewProduct(p)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              scrollToSection={handleSelectCategory}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route
          path="/krag-caps"
          element={
            <KragCaps
              onQuickView={(p) => setSelectedQuickViewProduct(p)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
            />
          }
        />
        <Route
          path="/creatory"
          element={
            <Creatory
              onQuickView={(p) => setSelectedQuickViewProduct(p)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
            />
          }
        />

        {/* Dynamic Category Page Route */}
        <Route
          path="/collections/:categoryId"
          element={
            <CategoryPageWrapper
              onBackToHome={() => navigate('/')}
              onQuickView={(p) => setSelectedQuickViewProduct(p)}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
            />
          }
        />

        {/* STATIC PRODUCT DETAILS ROUTE */}
  <Route
    path="/product/:productId"
    element={
      <ProductDetailsRoute
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        wishlistIds={wishlistIds}
      />
    }
  />

        {/* Alias and Catch-All Redirections */}
        <Route path="/collections" element={<Navigate to="/collections/all" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Global Footer */}
      <Footer />

      {/* Drawers & Modals */}
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