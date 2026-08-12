import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight, User } from 'lucide-react';
import { CartItem, Product } from '../types';

interface NavbarProps {
  cartItems: CartItem[];
  wishlistItems: Product[];
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onSearchClick: () => void;
  onSelectCategory: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartItems,
  wishlistItems,
  onOpenCart,
  onOpenWishlist,
  onSearchClick,
  onSelectCategory,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { label: 'Men', target: 'man-woman-banner' },
    { label: 'Women', target: 'man-woman-banner' },
    { label: 'Kids', target: 'man-woman-banner' },
    { label: 'Accessories', target: 'accessories-banner' },
    { label: 'Headwear', target: 'accessories-banner' },
    { label: 'Bags', target: 'bags-banner' },
    { label: 'Cricket', target: 'cricket-banner' },
  ];

  const handleNavClick = (targetId: string) => {
    setMenuOpen(false);
    onSelectCategory(targetId);
  };

  return (
    <div className="relative z-50 w-full text-black h-16 sm:h-18 flex items-center bg-[#f8f9fa]">
      {/* Background Diagonal Red Split Matching Hero Banner */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Main Red Polygon */}
        <div
          className="absolute inset-0 bg-[#E72F07]"
          style={{
            clipPath: 'polygon(80% 0, 100% 0, 100% 100%, 75% 100%)',
          }}
        />
        {/* Subtle accent line along diagonal edge matching HeroBanner */}
        <div
          className="absolute inset-0 bg-white/20"
          style={{
            clipPath: 'polygon(79.3% 0, 80.7% 0, 75.7% 100%, 74.3% 100%)',
          }}
        />
        {/* Border line on white side */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-200/80"
          style={{
            clipPath: 'polygon(0 0, 75% 0, 75% 100%, 0 100%)',
          }}
        />
        {/* Black divider line between red part of header and hero */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#d84567]"
          style={{
            clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 75% 100%)',
          }}
        />
      </div>

      {/* Main Navbar Bar */}
      <header className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto flex items-center justify-between gap-4 h-full">
        {/* Left Side: Mobile Hamburger & Logo + Desktop Navigation */}
        <div className="flex items-center space-x-4 xl:space-x-8 h-full">
          {/* Mobile Hamburger Button (Hidden on Desktop) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center space-x-2 px-2.5 py-1.5 transition-all cursor-pointer font-inter text-xs font-bold tracking-widest uppercase border border-neutral-200 bg-neutral-100/90 hover:bg-black hover:text-white text-black shadow-xs relative z-50"
            aria-label="Toggle Navigation Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
            <span className="hidden sm:inline-block">{menuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>

          {/* Logo / Brand Identity */}
          <div
            onClick={() => {
              setMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer group flex items-center shrink-0 relative h-full py-1 z-50"
          >
            <img
              src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/KKLG.png"
              alt="Logo"
              className="h-16 sm:h-20 lg:h-22 xl:h-24 w-auto max-h-[140%] object-contain origin-left group-hover:scale-105 transition-transform drop-shadow-xs py-0.5"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Menu Links */}
          <nav className="hidden lg:flex items-center space-x-[30px] xl:space-x-[40px]">
            {navLinks.map((link, index) => (
              <button
                key={`${link.target}-${index}`}
                onClick={() => handleNavClick(link.target)}
                className="font-inter text-[11px] xl:text-xs font-bold tracking-wider text-neutral-800 hover:text-red-600 transition-colors uppercase whitespace-nowrap cursor-pointer py-1"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side: Profile & Cart Bag */}
        <div className="flex items-center space-x-3 sm:space-x-4 relative z-50">
          <button
            className="transition-colors p-1.5 relative text-black sm:text-white hover:text-white/80 cursor-pointer rounded-full hover:bg-black/10 drop-shadow-sm"
            title="Account Profile"
            aria-label="Account Profile"
          >
            <User size={20} />
          </button>

          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenCart();
            }}
            className="flex items-center space-x-2 px-3 py-1.5 font-inter text-xs font-bold tracking-wider uppercase transition-all shadow-none sm:shadow-sm bg-transparent sm:bg-black text-white hover:bg-neutral-800 cursor-pointer"
            title="Shopping Bag"
          >
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">BAG</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-white text-black">
              {totalCartCount}
            </span>
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay Below Navbar Header */}
      {menuOpen && (
        <div className="fixed top-16 sm:top-18 left-0 right-0 bottom-0 z-40 bg-white text-black flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-3 border-b border-neutral-200 shrink-0 bg-neutral-50">
            <span className="font-anton text-xs text-neutral-400 tracking-widest uppercase">
              NAVIGATION & CATEGORIES
            </span>
          </div>

          {/* Nav links container */}
          <div className="flex-1 px-6 py-6 flex flex-col justify-center space-y-3">
            {navLinks.map((link, index) => (
              <button
                key={`${link.target}-${index}`}
                onClick={() => handleNavClick(link.target)}
                className="flex items-center justify-between font-anton text-2xl sm:text-3xl text-neutral-900 hover:text-red-600 py-3.5 px-5 border border-neutral-200 hover:border-black bg-neutral-50 active:bg-neutral-100 tracking-wider text-left transition-all group"
              >
                <span>{link.label}</span>
                <ArrowRight
                  size={22}
                  className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-transform"
                />
              </button>
            ))}
          </div>

          {/* Footer info */}
          <div className="p-6 border-t border-neutral-200 bg-neutral-50 shrink-0 text-xs font-inter text-neutral-600 space-y-2">
            <p className="tracking-wider uppercase">CUSTOMER SUPPORT: info@kragbuzz.com</p>
            <p className="text-black font-extrabold tracking-widest uppercase">
              GLOBAL EXPRESS SHIPPING
            </p>
          </div>
        </div>
      )}
    </div>
  );
};