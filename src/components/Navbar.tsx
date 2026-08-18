import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, ArrowRight, User, Search, MapPin } from 'lucide-react';
import { CartItem, Product } from '../types';
import { Link } from 'react-router-dom';

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

  // Nav menu links configuration
  const navLinks = [
    { type: 'text', label: 'Men', target: 'mens' },
    { type: 'text', label: 'Women', target: 'womens' },
    { type: 'text', label: 'Accessories', target: 'accessories' },
    { type: 'text', label: 'Bags', target: 'bags' },
    { type: 'text', label: 'Cricket', target: 'cricket' },
    {
      type: 'creatory',
      label: 'The Creatory',
      target: 'creatory',
      badgeStyle: 'bg-red-600 text-white font-extrabold px-3 py-1 rounded-sm shadow-xs hover:bg-black',
    },
    {
      type: 'kragcaps',
      target: 'krag-caps',
    },
  ];

  const handleNavClick = (targetId: string) => {
    setMenuOpen(false);
    onSelectCategory(targetId);
  };

  return (
    <div className="relative z-50 w-full">
      {/* 1. Black Top Bar */}
      <div className="bg-black text-white py-1.5 px-4 sm:px-6 lg:px-8 text-[11px] sm:text-xs font-inter font-medium tracking-wider">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Side: Contact Email */}
          <a
            href="mailto:info@kragbuzz.com"
            className="hover:text-neutral-300 transition-colors flex items-center gap-1.5"
          >
            <span>INFO@KRAGBUZZ.COM</span>
          </a>

          {/* Right Side: Track Order */}
          <button
            onClick={() => console.log('Track Order Clicked')}
            className="hover:text-neutral-300 transition-colors flex items-center gap-1 uppercase cursor-pointer"
          >
            <MapPin size={13} className="inline" />
            <span>TRACK ORDER</span>
          </button>
        </div>
      </div>

      {/* 2. Main Navbar Bar */}
      <div className="relative w-full text-black h-16 sm:h-18 flex items-center bg-[#f8f9fa]">
        {/* Background Diagonal Split lines */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-200/80"
            style={{
              clipPath: 'polygon(0 0, 75% 0, 75% 100%, 0 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#d84567]"
            style={{
              clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 75% 100%)',
            }}
          />
        </div>

        <header className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl w-full mx-auto flex items-center justify-between gap-2 sm:gap-4 h-full">
          {/* LEFT SIDE: Brand Logo */}
          <div className="flex items-center h-full">
            <Link
              to="/"
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="cursor-pointer group flex items-center shrink-0 relative h-full py-1 z-50"
            >
              <img
                src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/KKLG.png"
                alt="Logo"
                className="h-12 sm:h-20 lg:h-22 xl:h-24 w-auto max-h-[140%] object-contain origin-left group-hover:scale-105 transition-transform drop-shadow-xs py-0.5"
                referrerPolicy="no-referrer"
              />
            </Link>

            {/* Desktop Navigation Menu Links */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 h-full ml-6 xl:ml-8">
              {navLinks.map((link, index) => (
                <button
                  type="button"
                  key={`${link.target}-${index}`}
                  onClick={() => handleNavClick(link.target)}
                  className="flex items-center justify-center cursor-pointer py-1 shrink-0 bg-transparent border-0"
                >
                  {link.type === 'creatory' ? (
                    <span className={`font-inter text-[11px] xl:text-xs tracking-wider uppercase transition-all duration-200 ${link.badgeStyle}`}>
                      {link.label}
                    </span>
                  ) : link.type === 'kragcaps' ? (
                    /* Kragcaps Split Color Button */
                    <span className="font-inter text-[11px] xl:text-xs font-black tracking-wider uppercase border border-neutral-300 px-2.5 py-1 rounded-sm bg-white hover:border-black transition-all">
                      <span className="text-black">KRAG</span>
                      <span className="text-red-600">CAPS</span>
                    </span>
                  ) : (
                    <span className="font-inter text-[11px] xl:text-xs font-bold tracking-wider text-neutral-800 hover:text-red-600 transition-colors uppercase whitespace-nowrap">
                      {link.label}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* RIGHT SIDE: Action Controls (Search, Account, Bag, Mobile Hamburger) */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 relative z-50">
            {/* Search Button */}
            <button
              onClick={onSearchClick}
              className="hidden md:block transition-colors p-1.5 sm:p-2 text-black hover:text-red-600 cursor-pointer rounded-full hover:bg-black/5"
              title="Search"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Account Profile Button (Desktop) */}
            <button
              className="hidden sm:flex transition-colors p-2 text-black hover:text-red-600 cursor-pointer rounded-full hover:bg-black/5"
              title="Account Profile"
              aria-label="Account Profile"
            >
              <User size={20} />
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenCart();
              }}
              className="flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3 py-1.5 font-inter text-xs font-bold tracking-wider uppercase transition-all bg-black text-white hover:bg-neutral-800 cursor-pointer"
              title="Shopping Bag"
            >
              <ShoppingBag size={16} />
              <span className="hidden sm:inline">BAG</span>
              <span className="px-1.5 py-0.5 text-[10px] bg-white text-black font-extrabold">
                {totalCartCount}
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center space-x-1.5 px-2.5 py-1.5 transition-all cursor-pointer font-inter text-xs font-bold tracking-widest uppercase border border-neutral-200 bg-neutral-100 hover:bg-black hover:text-white text-black shadow-xs relative z-50"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
              <span className="hidden sm:inline-block">{menuOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </div>
        </header>

        {/* Full-Screen Mobile Navigation Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 top-[96px] sm:top-[100px] z-40 bg-white text-black flex flex-col justify-between overflow-y-auto lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
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
                  className="w-full flex items-center justify-between font-anton text-xl sm:text-2xl text-neutral-900 hover:text-red-600 py-3.5 px-5 border border-neutral-200 hover:border-black bg-neutral-50 active:bg-neutral-100 tracking-wider text-left transition-all group cursor-pointer"
                >
                  {link.type === 'kragcaps' ? (
                    <span>
                      <span className="text-black">KRAG</span>
                      <span className="text-red-600">CAPS</span>
                    </span>
                  ) : link.type === 'creatory' ? (
                    <span className="text-red-600 font-extrabold">{link.label}</span>
                  ) : (
                    <span>{link.label}</span>
                  )}
                  <ArrowRight
                    size={20}
                    className="text-neutral-400 group-hover:text-black group-hover:translate-x-1 transition-transform shrink-0"
                  />
                </button>
              ))}
            </div>

            {/* Footer info */}
            <div className="p-6 border-t border-neutral-200 bg-neutral-50 shrink-0 text-xs font-inter text-neutral-600 space-y-2">
              <p className="tracking-wider uppercase">CUSTOMER SUPPORT: INFO@KRAGBUZZ.COM</p>
              <p className="text-black font-extrabold tracking-widest uppercase">
                GLOBAL EXPRESS SHIPPING
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};