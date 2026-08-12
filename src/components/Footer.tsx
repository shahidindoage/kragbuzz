import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-white text-neutral-600 font-inter text-xs border-t border-neutral-200 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Campaign Newsletter & Brand Statement */}
      

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-neutral-200 pb-16">
          <div className="col-span-2 space-y-2">
            <div className="flex items-center space-x-3">
              <img
                src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/KKLG.png"
                alt="KRAGBUZZ"
                referrerPolicy="no-referrer"
                className="h-30 w-auto object-contain"
              />
             
            </div>
            <p className="font-inter text-xs text-neutral-600 leading-relaxed max-w-xs">
              KRAGBUZZ // Modern Global Athletic Fashion. Engineered for elite athletic performance and uncompromising high-fashion aesthetics.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-anton text-xs text-black tracking-widest uppercase">COLLECTIONS</p>
            <ul className="space-y-2 font-inter text-xs text-neutral-600">
              <li><a href="#best-sellers-section" className="hover:text-black transition-colors">Best Sellers</a></li>
              <li><a href="#man-woman-banner" className="hover:text-black transition-colors">Mens Division</a></li>
              <li><a href="#man-woman-banner" className="hover:text-black transition-colors">Womens Division</a></li>
              <li><a href="#accessories-banner" className="hover:text-black transition-colors">Tactical Accessories</a></li>
              <li><a href="#bags-banner" className="hover:text-black transition-colors">Bags & Duffels</a></li>
              <li><a href="#cricket-banner" className="hover:text-black transition-colors">Cricket Pro Gear</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-anton text-xs text-black tracking-widest uppercase">SUPPORT</p>
            <ul className="space-y-2 font-inter text-xs text-neutral-600">
              <li><span className="hover:text-black cursor-pointer transition-colors">Global Express Shipping</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">Returns & Exchanges</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">Size & Fit Guide</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">Order Tracking</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">Athlete Contact</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-anton text-xs text-black tracking-widest uppercase">STORES</p>
            <ul className="space-y-2 font-inter text-xs text-neutral-600">
              <li><span>Tokyo flagship</span></li>
              <li><span>Paris runway lab</span></li>
              <li><span>New York pop-up</span></li>
              <li><span>London studio</span></li>
            </ul>
          </div>
        </div>

        {/* Big Watermark Banner with SVG Liquid Water Fill Animation */}
        <div className="pt-4 overflow-hidden select-none pointer-events-none text-center opacity-40">
          <svg viewBox="0 0 1000 190" className="w-full h-auto max-w-7xl mx-auto">
            <defs>
              {/* Mask for KRAG text */}
              <mask id="krag-water-mask">
                <text
                  x="500"
                  y="155"
                  textAnchor="middle"
                  fontFamily="Anton, sans-serif"
                  fontSize="170"
                  fontWeight="900"
                  letterSpacing="6"
                >
                  <tspan fill="#ffffff">KRAG</tspan>
                  <tspan fill="#000000">BUZZ</tspan>
                </text>
              </mask>

              {/* Mask for BUZZ text */}
              <mask id="buzz-water-mask">
                <text
                  x="500"
                  y="155"
                  textAnchor="middle"
                  fontFamily="Anton, sans-serif"
                  fontSize="170"
                  fontWeight="900"
                  letterSpacing="6"
                >
                  <tspan fill="#000000">KRAG</tspan>
                  <tspan fill="#ffffff">BUZZ</tspan>
                </text>
              </mask>
            </defs>

            {/* Background Base Dry Text (Soft faint grey baseline outline) */}
            <text
              x="500"
              y="155"
              textAnchor="middle"
              fontFamily="Anton, sans-serif"
              fontSize="170"
              fontWeight="900"
              letterSpacing="6"
            >
              <tspan fill="#D4D4D4">KRAG</tspan>
              <tspan fill="#E5E5E5">BUZZ</tspan>
            </text>

            {/* KRAG Black Water Liquid Fill */}
            <g mask="url(#krag-water-mask)" opacity="0.9">
              {/* Wave 1 */}
              <path
                d="M 0 30 Q 150 5, 300 30 T 600 30 T 900 30 T 1200 30 T 1500 30 V 300 H 0 Z"
                fill="#171717"
                className="animate-liquid-wave-1"
              />
              {/* Wave 2 Overlay */}
              <path
                d="M 0 40 Q 150 15, 300 40 T 600 40 T 900 40 T 1200 40 T 1500 40 V 300 H 0 Z"
                fill="#000000"
                opacity="0.7"
                className="animate-liquid-wave-2"
              />
            </g>

            {/* BUZZ Red Water Liquid Fill */}
            <g mask="url(#buzz-water-mask)" opacity="0.9">
              {/* Wave 1 */}
              <path
                d="M 0 30 Q 150 5, 300 30 T 600 30 T 900 30 T 1200 30 T 1500 30 V 300 H 0 Z"
                fill="#E72F07"
                className="animate-liquid-wave-1"
              />
              {/* Wave 2 Overlay */}
              <path
                d="M 0 40 Q 150 15, 300 40 T 600 40 T 900 40 T 1200 40 T 1500 40 V 300 H 0 Z"
                fill="#B91C1C"
                opacity="0.7"
                className="animate-liquid-wave-2"
              />
            </g>
          </svg>
        </div>

      </div>
    </footer>
  );
};
