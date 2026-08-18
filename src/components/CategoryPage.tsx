import React, { useMemo, useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Star, 
  Heart, 
  Eye, 
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import { Product } from '../types';
import { NALL_PRODUCTS } from '../data/mockData';
import { Link } from 'react-router-dom';

export interface CategoryPageProps {
  selectedCategory: string; // 'all' | 'mens' | 'womens' | 'kids' | 'accessories' | 'headwear' | 'bags' | 'cricket' | 'bestseller'
  onSelectCategory: (category: string) => void;
  onBackToHome: () => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, color: string, size: string) => void;
  onToggleWishlist: (product: Product) => void;
  wishlistIds: string[];
  itemsPerPage?: number;
}

interface CategoryInfo {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  faqs: { question: string; answer: string }[];
}

const CATEGORIES_DATA: CategoryInfo[] = [
  { 
    id: 'all', 
    name: 'ALL COLLECTIONS', 
    shortLabel: 'All Products',
    description: 'Explore the full spectrum of KRAGBUZZ Performance apparel, technical gear, and lifestyle accessories engineered for unmatched durability and modern elite aesthetics. Every piece represents our relentless pursuit of ergonomic precision, leveraging industrial-grade construction alongside cutting-edge textile technology. Whether optimizing for maximum physical output or refining high-end technical street wear, our unified lineup equips high-performing individuals for every environment.',
    faqs: [
      { question: 'What makes KRAGBUZZ Performance gear unique?', answer: 'Our collections feature cutting-edge, moisture-wicking fabrics, precision ergonomics, and bold editorial design tailored for high-intensity training and high-end street style.' },
      { question: 'How do I care for my technical activewear?', answer: 'We recommend machine washing cold with like colors and hanging to dry to preserve technical fabric coatings, elasticity, and graphic prints.' },
      { question: 'Are KRAGBUZZ fabrics sustainably sourced?', answer: 'Yes, over 70% of our activewear utilizes recycled polymer blends and low-impact dyeing processes designed to maximize longevity and minimize environmental stress.' },
      { question: 'How do I determine the right size across different collections?', answer: 'Each product page includes detailed chest, waist, and inseam measurements. Our activewear is tailored for an athletic profile, so consider sizing up if you prefer a relaxed fit.' }
    ]
  },
  { 
    id: 'mens', 
    name: 'MENS COLLECTION', 
    shortLabel: 'Men',
    description: 'Designed for ultimate velocity and strength. The Mens Collection pairs high-grade breathable textiles with streamlined silhouettes that transition effortlessly from intense training sessions to modern city life. Built with targeted ventilation zones, four-way stretch, and heavy-duty flatlock stitching, these pieces withstand extreme kinetic demands without compromising on elevated visual caliber.',
    faqs: [
      { question: 'Are KRAGBUZZ men’s tops athletic or relaxed fit?', answer: 'Most of our training tops feature a tailored athletic fit. If you prefer an oversized or relaxed look, we recommend sizing up one size.' },
      { question: 'Do the shorts feature built-in compression liners?', answer: 'Select styles offer integrated light compression liners for optimal support. Check individual product features for details.' },
      { question: 'Will the activewear shrink after washing?', answer: 'Our technical synthetic blends are pre-shrunk during production to retain their exact structure, drape, and elasticity after repeated wash cycles.' },
      { question: 'Are these garments suited for extreme cold or hot weather?', answer: 'We engineer climate-specific lines: breathable mesh-mapped gear for heat management and insulated wind-resistant layers for cold-weather training.' }
    ]
  },
  { 
    id: 'womens', 
    name: 'WOMENS COLLECTION', 
    shortLabel: 'Women',
    description: 'Sculpted support meets flexible movement. Built with squat-proof 4-way stretch fabrics, premium stitching, and minimalist branding for the dynamic female athlete. Engineered to mold seamlessly to the body, each garment provides continuous compression, sweat management, and weightless freedom during intense conditioning or daily transition wear.',
    faqs: [
      { question: 'Is the women’s activewear 100% squat-proof?', answer: 'Yes, all leggings and tights undergo rigorous density tests to ensure full opaqueness and maximum coverage during deep squats and stretches.' },
      { question: 'What impact level do KRAGBUZZ sports bras support?', answer: 'We offer options ranging from medium-impact studio bras to high-impact encapsulation bras engineered for high-intensity interval training.' },
      { question: 'Do leggings feature hidden functional storage?', answer: 'Yes, most leggings include drop-in side phone pockets or hidden waistband card slots built seamlessly into the high-waist band.' },
      { question: 'How do the high-waisted waistbands stay secure during movement?', answer: 'Our waistbands utilize dual-layer compression architecture and micro-ribbing to prevent rolling, sliding, or bunching during active movement.' }
    ]
  },
  { 
    id: 'cricket', 
    name: 'CRICKET COLLECTION', 
    shortLabel: 'Cricket',
    description: 'Professional-grade match whites, high-performance training kit, and accessories tailored specifically for the demands of modern cricket. Crafted to withstand multi-day play under intense heat, this collection combines micro-porous ventilation with dynamic shoulder and hip articulation. Experience unmatched thermal regulation, sunlight protection, and durability on the pitch.',
    faqs: [
      { question: 'Are the whites compliant with club standards?', answer: 'Yes, our match whites are designed according to official regulations, offering sunlight protection and high breathability for multi-day play.' },
      { question: 'Does the gear include UV protection?', answer: 'Our match whites and outer layers are treated with UPF 50+ protection against extended sun exposure.' },
      { question: 'How stain-resistant are the match whites?', answer: 'We apply a specialized hydrophobic coating that repels soil and grass oils, allowing dirt to release cleanly during standard low-temp washes.' },
      { question: 'Is the training kit flexible enough for mobility during bowling and fielding?', answer: 'Yes, all upper and lower body kits integrate strategically placed gussets and dynamic mechanical stretch mesh to allow full range of motion.' }
    ]
  },
  { 
    id: 'bags', 
    name: 'BAGS COLLECTION', 
    shortLabel: 'Bags',
    description: 'Engineered storage for athletes and technical travelers on the move. Built with weather-resistant nylon, dedicated ventilated shoe compartments, and sleek modular pockets for organized carry. From high-capacity duffels to streamlined daily commuting packs, each bag guarantees impact protection and ergonomic load distribution.',
    faqs: [
      { question: 'Are KRAGBUZZ duffels and backpacks water-resistant?', answer: 'Yes, all bags are crafted using durable, water-repellent nylon or coated polyester with reinforced sealed zippers.' },
      { question: 'Do backpacks feature laptop protection?', answer: 'Our travel and day pack models include padded, suspended laptop sleeves fitting up to 16" devices.' },
      { question: 'How do I clean my technical bag?', answer: 'We recommend spot cleaning with warm water, mild soap, and a soft microfiber cloth to protect the exterior waterproof membrane.' },
      { question: 'Is there a dedicated compartment for damp gym clothes?', answer: 'Yes, our duffels and training backpacks feature antimicrobial, waterproof-lined isolation pockets specifically built for footwear or damp apparel.' }
    ]
  },
  { 
    id: 'accessories', 
    name: 'ACCESSORIES COLLECTION', 
    shortLabel: 'Accessories',
    description: 'Precision training essentials including moisture-wicking wristbands, targeted support performance socks, resistance bands, and high-grade hydration flasks. Built to enhance every facet of your physical routine, these small-scale technical items deliver elite craftsmanship, sleek branding, and uncompromised utility.',
    faqs: [
      { question: 'What materials are used in performance socks?', answer: 'Our socks utilize a high-density poly-spandex blend with target arch support and anti-odor yarn technology.' },
      { question: 'Are the water bottles BPA-free?', answer: '100% of our hydration products are BPA-free, toxin-free, and crafted from high-grade stainless steel or food-safe polymers.' },
      { question: 'Are training bands suitable for heavy strength conditioning?', answer: 'Yes, our resistance bands are manufactured with high-tensile layered latex and non-slip inner weaves engineered to resist snapping and stretching out.' },
      { question: 'Do the wristbands retain shape after heavy saturation?', answer: 'Our sweatbands feature quick-dry elastane cores that maintain structural elasticity and compression through intense sweat sessions.' }
    ]
  },
  { 
    id: 'headwear', 
    name: 'HEADWEAR COLLECTION', 
    shortLabel: 'Headwear',
    description: 'From moisture-wicking running caps to structured streetwear snapbacks and winter beanies, engineered for maximum ventilation, shade, and sleek urban style. Designed with anti-odor sweatbands and lightweight brim construction, our headwear seamlessly balances functional climate control with a premium visual edge.',
    faqs: [
      { question: 'Are the running caps washable?', answer: 'Yes, hand washing cold or using a delicate garment bag on low cycle is recommended to maintain brim shape.' },
      { question: 'Are snapbacks one-size-fits-all?', answer: 'Our headwear features adjustable premium back closures designed to accommodate a wide range of head sizes comfortably.' },
      { question: 'Do caps feature laser-cut ventilation?', answer: 'Select performance running caps incorporate laser-cut micro-perforations along side panels to maximize airflow during intense exertion.' },
      { question: 'Will the beanies stretched out over time?', answer: 'Our knitted beanies use high-retention ribbed acrylic and elastane blends that spring back to their original shape after every wear.' }
    ]
  },
  { 
    id: 'kids', 
    name: 'KIDS COLLECTION', 
    shortLabel: 'Kids',
    description: 'Pro-level technical activewear scaled down for young high-energy athletes. Built for heavy movement, long-term durability, and skin-friendly comfort during sports training or outdoor play. Featuring non-chafing flatlock seams and pill-resistant fabrics that withstand rigorous daily wear.',
    faqs: [
      { question: 'How do I choose the correct size for kids?', answer: 'Refer to our detailed height and age size guide on the product page for accurate measurements.' },
      { question: 'Is the fabric gentle on sensitive skin?', answer: 'Yes, our kids range uses ultra-soft flatlock seams and hypoallergenic moisture-wicking fabrics to prevent chafing.' },
      { question: 'Can these garments withstand frequent rough outdoor play?', answer: 'Yes, reinforced double-stitching at stress points and high-abrasion resistance textiles ensure maximum lifespan.' },
      { question: 'Are the waistbands adjustable on youth bottoms?', answer: 'Most kids shorts and joggers include internal encased drawstrings for customizable waist adjustment as they grow.' }
    ]
  },
  { 
    id: 'bestseller', 
    name: 'BEST SELLERS COLLECTION', 
    shortLabel: 'Best Sellers',
    description: 'Our most sought-after athletic gear and urban staples, tested and highly rated by elite athletes and our global community. Representing the pinnacle of our design philosophy, these iconic pieces blend superior comfort, durability, and refined aesthetics. Discover the top-performing styles defining modern athletic culture.',
    faqs: [
      { question: 'How frequently are best sellers restocked?', answer: 'Core best-selling items are restocked monthly. Limited-color releases may not be repeated once sold out.' },
      { question: 'Can I pre-order out-of-stock best sellers?', answer: 'You can join the notification waitlist on any out-of-stock product page to receive instant alerts upon restock.' },
      { question: 'Why are these items considered best sellers?', answer: 'These garments achieve highest customer satisfaction ratings, lowest return rates, and proven durability across rigorous real-world testing.' },
      { question: 'Do best seller items qualify for standard return policies?', answer: 'Yes, all best sellers are fully eligible for our standard 30-day trial return and exchange policy in original condition.' }
    ]
  }
];

// Desktop Hero Image Map
const CATEGORY_HERO_IMAGES: Record<string, string> = {
  all: '/catg2.png',
  mens: '/catg2.png',
  womens: '/catg2.png',
  cricket: '/catg2.png',
  bags: '/catg2.png',
  accessories: '/catg2.png',
  headwear: '/catg2.png',
  kids: '/catg2.png',
  bestseller: '/catg2.png'
};

// Dedicated Mobile Hero Image Map (Optimized for portrait displays)
const CATEGORY_MOBILE_HERO_IMAGES: Record<string, string> = {
  all: '/catg-mobile.png',
  mens: '/catg-mobile.png',
  womens: '/catg-mobile.png',
  cricket: '/catg-mobile.png',
  bags: '/catg-mobile.png',
  accessories: '/catg-mobile.png',
  headwear: '/catg-mobile.png',
  kids: '/catg-mobile.png',
  bestseller: '/catg-mobile.png'
};

export const CategoryPage: React.FC<CategoryPageProps> = ({
  selectedCategory,
  onSelectCategory,
  onBackToHome,
  onQuickView,
  onAddToCart,
  onToggleWishlist,
  wishlistIds,
  itemsPerPage = 8
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Current category info
  const currentCategoryInfo = useMemo(() => {
    return (
      CATEGORIES_DATA.find((c) => c.id === selectedCategory) ||
      CATEGORIES_DATA[0]
    );
  }, [selectedCategory]);

  const desktopHeroImage = CATEGORY_HERO_IMAGES[selectedCategory] || CATEGORY_HERO_IMAGES.all;
  const mobileHeroImage = CATEGORY_MOBILE_HERO_IMAGES[selectedCategory] || CATEGORY_MOBILE_HERO_IMAGES.all || desktopHeroImage;

  // Reset page, FAQ state, and scroll to top when category changes
  useEffect(() => {
    setCurrentPage(1);
    setOpenFaqIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCategory]);

  // Filter products by selected category
  const filteredProducts = useMemo(() => {
    let list = [...NALL_PRODUCTS];

    if (selectedCategory && selectedCategory !== 'all') {
      if (selectedCategory === 'bestseller') {
        list = list.filter((p) => p.isBestSeller || p.category === 'bestseller');
      } else {
        list = list.filter((p) => p.category === selectedCategory);
      }
    }

    return list;
  }, [selectedCategory]);

  // Calculate pagination details
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#222222]">
      
      {/* Top Banner Hero: Set explicitly to 400px height on mobile */}
      <section className="relative h-[400px] sm:h-[72vh] sm:min-h-[300px] sm:max-h-[640px] w-full overflow-hidden bg-black flex items-center justify-center border-b border-neutral-800">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full">
            <source media="(max-width: 639px)" srcSet={mobileHeroImage} />
            <source media="(min-width: 640px)" srcSet={desktopHeroImage} />
            <img
              src={desktopHeroImage}
              alt={currentCategoryInfo.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
            />
          </picture>

          {/* Dark Overlay over the image */}
          <div className="absolute inset-0 bg-black/55 sm:bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 sm:from-black/70 sm:via-transparent sm:to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
        </div>

        {/* Desktop-Only Diagonal Split Layer */}
        <div className="hidden sm:block absolute inset-0 z-1 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-[#0B0B0B]"
            style={{
              clipPath: 'polygon(0 0, 60% 0, 42% 100%, 0 100%)',
            }}
          />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#E72F07]/10 blur-3xl pointer-events-none rounded-full" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-center sm:justify-start">
          <div className="w-full sm:w-[54%] lg:w-[46%] space-y-3 sm:space-y-4 text-center sm:text-left flex flex-col items-center sm:items-start">
            
            {/* Breadcrumb Navigation */}
            <div className="flex items-center justify-center sm:justify-start space-x-2 text-neutral-300 sm:text-neutral-400 text-xs font-inter font-bold tracking-wider">
              <button
                onClick={onBackToHome}
                className="hover:text-white transition-colors flex items-center space-x-1 uppercase cursor-pointer"
              >
                <span>HOME</span>
              </button>
              <span className="text-neutral-500 sm:text-neutral-600">/</span>
              <button
                onClick={() => onSelectCategory('all')}
                className="hover:text-white transition-colors uppercase cursor-pointer text-neutral-300"
              >
                PRODUCTS
              </button>
              <span className="text-neutral-500 sm:text-neutral-600">/</span>
              <span className="text-[#E72F07] uppercase font-black">
                {currentCategoryInfo.shortLabel}
              </span>
            </div>

            {/* Prominent Bold Category Title */}
            <h1 className="font-anton text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide uppercase leading-[1.02] sm:leading-[0.99] drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
              {currentCategoryInfo.name}
            </h1>

          </div>
        </div>

      </section>

      {/* Main Content Area - Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {filteredProducts.length === 0 ? (
          /* Empty State */
          <div className="bg-white border border-neutral-200 p-16 text-center space-y-4 shadow-xs">
            <ShoppingBag size={48} className="mx-auto text-neutral-300" />
            <h3 className="font-anton text-2xl text-black tracking-wider uppercase">
              NO PRODUCTS IN THIS CATEGORY
            </h3>
            <p className="font-inter text-xs text-neutral-600 max-w-md mx-auto">
              Please check back shortly or explore our other collections.
            </p>
            <button
              onClick={onBackToHome}
              className="px-6 py-2.5 bg-black text-white font-inter font-bold text-xs tracking-widest uppercase hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              BACK TO HOME
            </button>
          </div>
        ) : (
          <>
            {/* Clean Product Grid View */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {paginatedProducts.map((product) => {
    const isWishlisted = wishlistIds.includes(product.id);

    return (
      <div
        key={product.id}
        className="bg-white border border-neutral-200 group hover:border-black transition-all duration-300 flex flex-col justify-between shadow-sm"
      >
        {/* Product Image Frame wrapped in Link */}
        <Link
          to={`/product/${product.id}`}
          className="relative aspect-[3/4] bg-neutral-100 overflow-hidden cursor-pointer block"
        >
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
              e.preventDefault();
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

          {/* Quick View & Add Buttons */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex space-x-2 z-10">
            <button
              onClick={(e) => {
                e.preventDefault();
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
                e.preventDefault();
                e.stopPropagation();
                onAddToCart(
                  product,
                  product.colors[0]?.name || 'Standard',
                  product.sizes[0] || 'M'
                );
              }}
              className="p-2.5 bg-white border border-neutral-300 text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              title="Quick Add to Bag"
            >
              <ShoppingBag size={16} />
            </button>
          </div>
        </Link>

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

            {/* Product Title wrapped in Link */}
            <Link to={`/product/${product.id}`}>
              <h3 className="font-anton text-lg tracking-wide text-black uppercase group-hover:text-[#E72F07] cursor-pointer transition-colors leading-tight line-clamp-1">
                {product.name}
              </h3>
            </Link>
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center space-x-2 font-inter text-xs font-bold">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 border border-neutral-300 text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors cursor-pointer"
                  title="Previous Page"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNum = index + 1;
                  const isActive = currentPage === pageNum;

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-9 h-9 border font-anton text-sm flex items-center justify-center transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-neutral-300 hover:border-black'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-neutral-300 text-black disabled:opacity-30 disabled:cursor-not-allowed hover:bg-black hover:text-white transition-colors cursor-pointer"
                  title="Next Page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </>
        )}

        {/* Bottom Category Description & FAQ Section */}
        <div className="mt-20 pt-12 border-t border-neutral-200 space-y-12">
          
          {/* Category Description */}
          <div className="max-w-3xl space-y-3">
            <h2 className="font-anton text-2xl sm:text-3xl text-black tracking-wide uppercase">
              {currentCategoryInfo.name}
            </h2>
            <p className="font-inter text-neutral-600 text-sm leading-relaxed">
              {currentCategoryInfo.description}
            </p>
          </div>

          {/* Category FAQ Accordion */}
          {currentCategoryInfo.faqs.length > 0 && (
            <div className="space-y-6">
              <h3 className="font-anton text-xl sm:text-2xl text-black tracking-wide uppercase">
                FREQUENTLY ASKED QUESTIONS
              </h3>
              <div className="border border-neutral-200 divide-y divide-neutral-200 bg-white shadow-xs">
                {currentCategoryInfo.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="transition-colors">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 text-left flex justify-between items-center space-x-4 cursor-pointer hover:bg-neutral-50 transition-colors"
                      >
                        <span className="font-inter font-bold text-sm text-black uppercase tracking-wide">
                          {faq.question}
                        </span>
                        <ChevronDown
                          size={18}
                          className={`text-neutral-500 transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-black' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 font-inter text-xs text-neutral-600 leading-relaxed bg-neutral-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};