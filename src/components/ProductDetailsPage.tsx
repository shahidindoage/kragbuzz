import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, 
  Ruler, 
  Minus, 
  Plus, 
  ShoppingBag, 
  Heart,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Eye
} from 'lucide-react';

// --- TYPES ---
export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  image?: string;
}

export interface ProductType {
  id: string;
  title?: string;
  name?: string;
  subtitle?: string;
  categoryLabel?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount?: number;
  reviewsCount?: number;
  description?: string;
  features?: string[];
  colors: ProductColor[];
  sizes: string[];
  images?: string[];
  image?: string;
  secondaryImage?: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface ProductDetailsProps {
  product?: ProductType;
  relatedProducts?: ProductType[];
  onAddToCart?: (product: ProductType, color: string, size: string, quantity?: number) => void;
  onToggleWishlist?: (product: ProductType) => void;
  onQuickView?: (product: ProductType) => void;
  wishlistIds?: string[];
  isWishlisted?: boolean;
}

// --- MOCK DATA FOR DEMO ---
const MOCK_PRODUCT: ProductType = {
  id: 'kragbuzz-pro-elite-hoodie',
  title: 'kragbuzz PRO ELITE OVERSIZED HOODIE',
  subtitle: 'TECHNICAL STREETWEAR / ALL-WEATHER ACTIVE',
  price: 4999,
  originalPrice: 5999,
  rating: 4.9,
  reviewCount: 128,
  description: 'Engineered for high-velocity movement and modern architectural silhouettes. The Pro Elite Oversized Hoodie combines 480 GSM heavy-density french terry with hydrophobic surface coatings, targeted laser ventilation, and custom ergonomic raglan sleeves.',
  features: [
    '480 GSM Ultra-Heavyweight Organic French Terry',
    'Hydrophobic DWR Water-Repellent Outer Layer',
    'Laser-Perforated Underarm Thermal Regulation',
    'Concealed Matte Zip Security Pockets',
    'Reinforced Ergonomic Double-Layer Hood'
  ],
  colors: [
    { id: 'onyx', name: 'Onyx Black', hex: '#0B0C10', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80' },
    { id: 'stealth', name: 'Stealth Grey', hex: '#3A3D40', image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80' },
    { id: 'sand', name: 'Desert Dust', hex: '#C2B280', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80' }
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  images: [
    'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1200&q=80'
  ]
};

const MOCK_RELATED_PRODUCTS: ProductType[] = [
  {
    id: 'kragbuzz-apex-joggers',
    name: 'kragbuzz APEX CARGO JOGGERS',
    title: 'kragbuzz APEX CARGO JOGGERS',
    categoryLabel: 'PERFORMANCE BOTTOMS',
    price: 3499,
    rating: 4.8,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=80',
    colors: [
      { id: 'c1', name: 'Onyx', hex: '#0B0C10' },
      { id: 'c2', name: 'Olive', hex: '#3B413A' }
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'kragbuzz-kinetic-tee',
    name: 'kragbuzz KINETIC COMPRESSION TEE',
    title: 'kragbuzz KINETIC COMPRESSION TEE',
    categoryLabel: 'BASE LAYER',
    price: 1999,
    rating: 4.9,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    colors: [
      { id: 'c1', name: 'Pure White', hex: '#FFFFFF' },
      { id: 'c2', name: 'Stealth Grey', hex: '#3A3D40' },
      { id: 'c3', name: 'Cobalt', hex: '#1E3A8A' }
    ],
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: 'kragbuzz-stealth-jacket',
    name: 'kragbuzz STEALTH WIND-STOPPER JACKET',
    title: 'kragbuzz STEALTH WIND-STOPPER JACKET',
    categoryLabel: 'OUTERWEAR',
    price: 6499,
    rating: 5.0,
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=80',
    colors: [
      { id: 'c1', name: 'Matte Black', hex: '#111111' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL']
  },
  {
    id: 'kragbuzz-thermal-vest',
    name: 'kragbuzz CORE HYBRID UTILITY VEST',
    title: 'kragbuzz CORE HYBRID UTILITY VEST',
    categoryLabel: 'TECHNICAL VESTS',
    price: 2999,
    rating: 4.7,
    isNew: true,
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80',
    colors: [
      { id: 'c1', name: 'Desert Tan', hex: '#C2B280' },
      { id: 'c2', name: 'Black', hex: '#000000' }
    ],
    sizes: ['S', 'M', 'L']
  }
];

export const ProductDetailsPage: React.FC<ProductDetailsProps> = ({ 
  product: rawProduct,
  relatedProducts = MOCK_RELATED_PRODUCTS,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  wishlistIds = [],
  isWishlisted = false
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const galleryThumbRef = useRef<HTMLDivElement>(null);

  // Normalize raw input
  const normalizedRaw = rawProduct ? {
    ...rawProduct,
    title: rawProduct.title || rawProduct.name || '',
    subtitle: rawProduct.subtitle || rawProduct.categoryLabel || '',
    reviewCount: rawProduct.reviewCount ?? rawProduct.reviewsCount ?? 0,
    images: rawProduct.images?.length 
      ? rawProduct.images 
      : [rawProduct.image, rawProduct.secondaryImage].filter((img): img is string => Boolean(img)),
    colors: rawProduct.colors?.map((c: ProductColor, index: number) => ({
      id: c.id || `color-${index}`,
      name: c.name,
      hex: c.hex,
      image: c.image || rawProduct.image || ''
    })) || []
  } : null;

  // Merge with defaults
  const product = {
    ...MOCK_PRODUCT,
    ...normalizedRaw,
    images: normalizedRaw?.images?.length ? normalizedRaw.images : MOCK_PRODUCT.images,
    colors: normalizedRaw?.colors?.length ? normalizedRaw.colors : MOCK_PRODUCT.colors,
    sizes: normalizedRaw?.sizes?.length ? normalizedRaw.sizes : MOCK_PRODUCT.sizes,
    features: normalizedRaw?.features?.length ? normalizedRaw.features : MOCK_PRODUCT.features,
  };

  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0] || MOCK_PRODUCT.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  useEffect(() => {
    if (product.colors.length > 0) setSelectedColor(product.colors[0]);
    if (product.sizes.length > 0) setSelectedSize(product.sizes[0]);
  }, [rawProduct?.id]);

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  const handleColorSelect = (color: ProductColor) => {
    setSelectedColor(color);
    if (color.image) {
      const matchIndex = product.images.findIndex((img) => img === color.image);
      if (matchIndex !== -1) {
        setSelectedImage(matchIndex);
      }
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen selection:bg-black selection:text-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-6 lg:py-10">
        
        {/* BREADCRUMB */}
        <nav aria-label="Breadcrumb" className="mb-6 lg:mb-8">
          <ol className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-500 tracking-wider">
            <li>
              <a href="#" className="hover:text-black transition-colors">Home</a>
            </li>
            <li>
              <ChevronRight className="w-3 h-3 text-neutral-400" />
            </li>
            <li>
              <a href="#" className="hover:text-black transition-colors">Shop</a>
            </li>
            {product.subtitle && (
              <>
                <li>
                  <ChevronRight className="w-3 h-3 text-neutral-400" />
                </li>
                <li>
                  <a href="#" className="hover:text-black transition-colors">{product.subtitle}</a>
                </li>
              </>
            )}
            <li>
              <ChevronRight className="w-3 h-3 text-neutral-400" />
            </li>
            <li className="text-black font-semibold truncate max-w-[200px] sm:max-w-xs" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        {/* MAIN PRODUCT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
          
          {/* LEFT: GALLERY SECTION (FIXED / STICKY UNTIL RIGHT SECTION ENDS) */}
          <div className="lg:col-span-7 lg:sticky lg:top-8 flex flex-col-reverse md:flex-row gap-4 items-start">
            
            {/* THUMBNAIL LIST - EXACTLY 5 VISIBLE ITEMS */}
            <div 
              ref={galleryThumbRef}
              className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-y-auto no-scrollbar scroll-smooth w-full md:w-24 shrink-0 max-h-[110px] md:max-h-[580px] md:h-[580px]"
            >
              {product.images?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-24 md:w-full md:h-[108px] bg-neutral-100 overflow-hidden border transition-all duration-300 shrink-0 ${
                    selectedImage === idx ? 'border-black opacity-100 ring-1 ring-black' : 'border-neutral-200 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Select thumbnail ${idx + 1}`}
                >
                  <img src={img} alt={`${product.title} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* MAIN IMAGE DISPLAY */}
            <div className="relative flex-1 w-full bg-neutral-100 border border-neutral-200 overflow-hidden aspect-[3/4] md:h-[580px] group">
              <img 
                src={product.images?.[selectedImage] || product.images?.[0] || ''} 
                alt={product.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest uppercase text-white font-mono border border-neutral-700">
                Editorial Fit
              </span>

              {/* MAIN IMAGE ARROW OVERLAYS */}
              {product.images && product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === 0 ? product.images!.length - 1 : prev - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-black hover:text-white border border-neutral-200 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setSelectedImage((prev) => (prev === product.images!.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-black hover:text-white border border-neutral-200 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO & PURCHASE PANEL (SCROLLABLE CONTENT THAT DRIVES STICKY DURATION) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="space-y-2">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{product.subtitle}</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">{product.title}</h1>
              
              <div className="flex items-center gap-3 pt-1">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating || 0) ? 'fill-current' : 'text-neutral-300'}`} />
                  ))}
                </div>
                <span className="text-xs font-mono text-neutral-500">{product.rating} ({product.reviewCount} Reviews)</span>
              </div>
            </div>

            <div className="flex items-baseline gap-4 pt-2 border-t border-neutral-200">
              <span className="text-3xl font-extrabold text-black font-mono">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-lg text-neutral-400 line-through font-mono">₹{product.originalPrice}</span>
              )}
              <span className="text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 px-2 py-0.5">
                In Stock
              </span>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed font-light">{product.description}</p>

            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-neutral-200">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-500 uppercase">COLOR</span>
                  <span className="text-black font-semibold">{selectedColor?.name}</span>
                </div>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      onClick={() => handleColorSelect(color)}
                      aria-label={`Select color ${color.name}`}
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        selectedColor?.id === color.id ? 'ring-2 ring-black ring-offset-2 ring-offset-white' : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-neutral-500 uppercase">SELECT SIZE</span>
                  <button className="text-neutral-500 hover:text-black flex items-center gap-1 underline underline-offset-4">
                    <Ruler className="w-3.5 h-3.5" /> Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-xs font-mono uppercase border transition-all ${
                        selectedSize === size
                          ? 'bg-black text-white border-black font-bold'
                          : 'bg-white border-neutral-200 text-neutral-700 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="flex items-center border border-neutral-200 bg-neutral-50">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-neutral-500 hover:text-black transition"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 font-mono text-sm">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-neutral-500 hover:text-black transition"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => onAddToCart && onAddToCart(product, selectedColor.name, selectedSize, quantity)}
                  className="flex-1 bg-black text-white hover:bg-neutral-800 uppercase font-mono font-bold tracking-wider text-xs py-4 px-6 flex items-center justify-center gap-3 transition duration-300"
                >
                  <ShoppingBag className="w-4 h-4" /> Add to cart
                </button>

                <button 
                  onClick={() => onToggleWishlist && onToggleWishlist(product)}
                  className={`hidden md:block p-4 border border-neutral-200 hover:border-black transition ${
                    isWishlisted ? 'text-rose-500 border-rose-500' : 'text-neutral-500'
                  }`}
                  aria-label="Wishlist product"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-rose-500' : ''}`} />
                </button>
              </div>
            </div>

            {/* ACCORDION BLOCK */}
            <div className="pt-6 border-t border-neutral-200 divide-y divide-neutral-200">
              {/* Fabric */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('fabric')}
                  className="w-full flex justify-between items-center text-xs font-mono uppercase tracking-wider text-black font-bold text-left hover:text-neutral-600 transition"
                >
                  <span>Fabric</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${openAccordion === 'fabric' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'fabric' && (
                  <div className="mt-3 text-xs text-neutral-600 font-light leading-relaxed space-y-2">
                    <p>Engineered with 480 GSM heavy-density organic French Terry, offering hydrophobic outer-layer treatments for extreme durability and all-weather active resilience.</p>
                    {product.features && product.features.length > 0 && (
                      <ul className="list-disc list-inside pt-1 space-y-1 text-neutral-500 font-mono text-[11px]">
                        {product.features.map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('description')}
                  className="w-full flex justify-between items-center text-xs font-mono uppercase tracking-wider text-black font-bold text-left hover:text-neutral-600 transition"
                >
                  <span>Description</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${openAccordion === 'description' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'description' && (
                  <div className="mt-3 text-xs text-neutral-600 font-light leading-relaxed">
                    <p>Crafted for high-velocity movement and modern architectural silhouettes. Features targeted laser ventilation, matte zip security pockets, and an intentional boxy, oversized editorial fit.</p>
                  </div>
                )}
              </div>

              {/* Shipping and Returns */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('shipping')}
                  className="w-full flex justify-between items-center text-xs font-mono uppercase tracking-wider text-black font-bold text-left hover:text-neutral-600 transition"
                >
                  <span>Shipping and Returns</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${openAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'shipping' && (
                  <div className="mt-3 text-xs text-neutral-600 font-light leading-relaxed space-y-2">
                    <p>Standard delivery within 3–5 business days across India.</p>
                    <p>All orders are dispatched in eco-friendly protective packaging with real-time tracking provided via SMS and email.</p>
                  </div>
                )}
              </div>

              {/* Return Policies */}
              <div className="py-4">
                <button
                  onClick={() => toggleAccordion('returns')}
                  className="w-full flex justify-between items-center text-xs font-mono uppercase tracking-wider text-black font-bold text-left hover:text-neutral-600 transition"
                >
                  <span>Return Policies</span>
                  <ChevronDown className={`w-4 h-4 text-neutral-500 transition-transform duration-300 ${openAccordion === 'returns' ? 'rotate-180' : ''}`} />
                </button>
                {openAccordion === 'returns' && (
                  <div className="mt-3 text-xs text-neutral-600 font-light leading-relaxed space-y-2">
                    <p>Hassle-free 30-day return or exchange policy on unworn items with original tags attached.</p>
                    <p>Reverse pickup is initiated automatically within 24–48 hours of filing a return request.</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        <section className="mt-7 lg:mt-22 pt-10 lg:pt-17 pb-8 border-t border-neutral-200">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">CURATED RECOMMENDATIONS</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-black">RELATED PRODUCTS</h2>
            </div>
            
            <div className="flex space-x-2">
              <button 
                onClick={() => handleScroll('left')}
                className="p-2 lg:p-3 border border-neutral-300 hover:border-black bg-white text-black transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-3 h-3 lg:w-4 lg:h-4" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="p-2 lg:p-3 border border-neutral-300 hover:border-black bg-white text-black transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth pb-4"
          >
            {relatedProducts.map((relProduct) => {
              const isItemWishlisted = wishlistIds.includes(relProduct.id);
              const displayName = relProduct.name || relProduct.title || '';

              return (
                <div
                  key={relProduct.id}
                  className="w-[290px] sm:w-[350px] shrink-0 bg-white border border-neutral-200 group hover:border-black transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div 
                    className="relative aspect-[3/4] bg-neutral-100 overflow-hidden cursor-pointer" 
                    onClick={() => onQuickView && onQuickView(relProduct)}
                  >
                    <img
                      src={relProduct.image || relProduct.images?.[0] || ''}
                      alt={displayName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {relProduct.secondaryImage && (
                      <img
                        src={relProduct.secondaryImage}
                        alt={`${displayName} secondary view`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    )}

                    <div className="absolute top-3 left-3 flex flex-col space-y-1 z-10">
                      {relProduct.isBestSeller && (
                        <span className="bg-black text-white font-mono text-[10px] tracking-wider px-2.5 py-1 uppercase font-bold">
                          BEST SELLER
                        </span>
                      )}
                      {relProduct.isNew && (
                        <span className="bg-white text-black border border-neutral-300 font-mono text-[10px] tracking-wider px-2.5 py-1 uppercase font-bold">
                          NEW ARRIVAL
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onToggleWishlist) onToggleWishlist(relProduct);
                      }}
                      className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer ${
                        isItemWishlisted
                          ? 'bg-red-600 text-white'
                          : 'bg-white/80 text-black hover:bg-black hover:text-white border border-neutral-200'
                      }`}
                      title={isItemWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                      <Heart size={16} className={isItemWishlisted ? 'fill-white' : ''} />
                    </button>

                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-white via-white/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onQuickView) onQuickView(relProduct);
                        }}
                        className="flex-1 py-2.5 bg-black text-white font-mono font-bold text-xs tracking-wider uppercase hover:bg-neutral-800 transition-colors flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <Eye size={14} />
                        <span>QUICK VIEW</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onAddToCart) {
                            onAddToCart(
                              relProduct, 
                              relProduct.colors?.[0]?.name || 'Standard', 
                              relProduct.sizes?.[0] || 'M'
                            );
                          }
                        }}
                        className="p-2.5 bg-white border border-neutral-300 text-black hover:bg-neutral-100 transition-colors cursor-pointer"
                        title="Quick Add to Bag"
                      >
                        <ShoppingBag size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                    <div>
                      <div className="flex justify-between items-center text-[10px] font-mono font-bold text-neutral-500 tracking-widest uppercase mb-1">
                        <span>{relProduct.categoryLabel || relProduct.subtitle || 'TECHNICAL'}</span>
                        <span className="flex items-center text-amber-500">
                          <Star size={12} className="fill-amber-400 mr-1 text-amber-500" />
                          {relProduct.rating}
                        </span>
                      </div>

                      <h3
                        onClick={() => onQuickView && onQuickView(relProduct)}
                        className="font-mono text-sm font-extrabold tracking-wide text-black uppercase group-hover:text-neutral-600 cursor-pointer transition-colors leading-tight"
                      >
                        {displayName}
                      </h3>
                    </div>

                    <div className="pt-2 border-t border-neutral-100 flex justify-between items-center">
                      <div className="flex space-x-1.5 items-center">
                        {relProduct.colors?.map((color) => (
                          <span
                            key={color.name}
                            className="w-3 h-3 rounded-full border border-neutral-300"
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          />
                        ))}
                        {relProduct.colors && relProduct.colors.length > 0 && (
                          <span className="font-mono text-[10px] text-neutral-400 pl-1">
                            +{relProduct.colors.length}
                          </span>
                        )}
                      </div>

                      <div className="text-right">
                        <span className="font-mono text-sm font-bold text-black">
                          ₹{relProduct.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProductDetailsPage;