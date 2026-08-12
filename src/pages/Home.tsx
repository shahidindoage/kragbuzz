import React from 'react';
import { BlogSection, CategoryGridSection, HeroBanner, HeroBannerSlider, MultiCategoryProductsSection, TrustedByMarquee } from '../components/HeroBanner';
import { AboutBanner } from '../components/AboutBanner';
import { ManAndWomanBanner } from '../components/ManAndWomanBanner';
import { BestSellersSection } from '../components/BestSellersSection';
import { AccessoriesBanner } from '../components/AccessoriesBanner';
import { AccessoriesProductsSection } from '../components/AccessoriesProductsSection';
import { BagsBanner } from '../components/BagsBanner';
import { BagsProductsSection } from '../components/BagsProductsSection';
import { CricketBanner } from '../components/CricketBanner';
import { ReviewSection } from '../components/ReviewSection';

import { BEST_SELLERS, ACCESSORIES, KIDS, HEADWEAR, BAGS, CRICKET, REVIEWS } from '../data/mockData';
import { Product } from '../types';

interface HomeProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  scrollToSection: (sectionId: string) => void;
}

export function Home({
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  scrollToSection,
}: HomeProps) {
  return (
    <main>
      {/* 1. Hero Banner */}
      {/* <HeroBanner
        onExploreClick={() => scrollToSection('man-woman-banner')}
        onSecondaryClick={() => scrollToSection('best-sellers-section')}
      /> */}
      <HeroBannerSlider/>
      <TrustedByMarquee/>

      {/* 2. About Banner */}
      {/* <AboutBanner onExploreClick={() => scrollToSection('man-woman-banner')} /> */}

      {/* 3. Man And Woman Banner */}
      {/* <ManAndWomanBanner onSelectCategory={scrollToSection} /> */}

      {/* 4. Best Sellers Products */}

      <CategoryGridSection/>
      <BestSellersSection
        products={BEST_SELLERS}
        onQuickView={onQuickView}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistIds={wishlistIds}
      />

      {/* 5. Accessories Banner */}
      <AccessoriesBanner
        onExploreClick={() => scrollToSection('accessories-products-section')}
      />

      {/* 6. Product Section (Accessories Showcase) */}
      {/* <AccessoriesProductsSection
        products={ACCESSORIES}
        kidsProducts={KIDS}
        headwearProducts={HEADWEAR}
        onQuickView={onQuickView}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistIds={wishlistIds}
      /> */}

<MultiCategoryProductsSection
  onQuickView={onQuickView}
  onAddToCart={onAddToCart}
  onToggleWishlist={onToggleWishlist}
  wishlistIds={wishlistIds}
/>
      {/* 7. Cricket Banner */}
      {/* <CricketBanner
        onExploreClick={() => scrollToSection('best-sellers-section')}
      /> */}

      {/* 8. Product Section (Bags Showcase) */}
      {/* <BagsProductsSection
        products={BAGS}
        cricketProducts={CRICKET}
        onQuickView={onQuickView}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        wishlistIds={wishlistIds}
      /> */}

      {/* 9. Bags Banner */}
      <BagsBanner
        onExploreClick={() => scrollToSection('bags-products-section')}
      />

      <BlogSection/>

      {/* 10. Review Section */}
      <ReviewSection reviews={REVIEWS} />
    </main>
  );
}





