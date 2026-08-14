import React, { useState } from 'react';

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
    <footer className="bg-white text-neutral-600 font-inter text-xs border-t border-neutral-200 pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Ask AI Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 border border-neutral-200 bg-neutral-50/50">
          <span className="font-mono text-xs text-neutral-600 font-medium uppercase tracking-widest">
            ASK AI ABOUT KRAGBUZZ
          </span>

          <div className="flex items-center space-x-3">
            {/* ChatGPT */}
            <a
              href="https://chatgpt.com/?q=Summary+of+KRAGBUZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-neutral-200 hover:border-black transition-colors bg-black flex items-center justify-center"
              title="ChatGPT"
            >
              <img
                src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/ai3t.png"
                alt="ChatGPT"
                className="w-5 h-5 object-contain"
              />
            </a>

            {/* Gemini */}
            <a
              href="https://www.google.com/search?udm=50&sourceid=chrome&ccb=1&q=Summary+of+KRAGBUZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-neutral-200 hover:border-black transition-colors bg-black flex items-center justify-center"
              title="Gemini"
            >
              <img
                src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/aigt.png"
                alt="Gemini"
                className="w-5 h-5 object-contain"
              />
            </a>

            {/* Claude */}
            <a
              href="https://claude.ai/new?q=Summary+of+KRAGBUZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-neutral-200 hover:border-black transition-colors bg-black flex items-center justify-center"
              title="Claude"
            >
              <img
                src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/aic.png"
                alt="Claude"
                className="w-5 h-5 object-contain"
              />
            </a>

            {/* Perplexity */}
            <a
              href="https://www.perplexity.ai/search?q=Summary+of+KRAGBUZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-neutral-200 hover:border-black transition-colors bg-black flex items-center justify-center"
              title="Perplexity"
            >
              <img
                src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/ai1t.png"
                alt="Perplexity"
                className="w-5 h-5 object-contain"
              />
            </a>

            {/* Grok */}
            <a
              href="https://grok.com/?q=Summary+of+KRAGBUZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-neutral-200 hover:border-black transition-colors bg-black flex items-center justify-center"
              title="Grok"
            >
              <img
                src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/General/ai2t.png"
                alt="Grok"
                className="w-5 h-5 object-contain"
              />
            </a>
          </div>
        </div>

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
            <p className="font-anton text-xs text-black tracking-widest uppercase">INFORMATION</p>
            <ul className="space-y-2 font-inter text-xs text-neutral-600">
              <li><a href="#best-sellers-section" className="hover:text-black transition-colors">Delivery Policy</a></li>
              <li><a href="#man-woman-banner" className="hover:text-black transition-colors">Shipping Policy</a></li>
              <li><a href="#man-woman-banner" className="hover:text-black transition-colors">Refund Policy</a></li>
              <li><a href="#accessories-banner" className="hover:text-black transition-colors">Cancellation Policy</a></li>
              <li><a href="#bags-banner" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#cricket-banner" className="hover:text-black transition-colors">Terms and Condition</a></li>
             <li><a href="#cricket-banner" className="hover:text-black transition-colors">Order and Payment Policy</a></li>

            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-anton text-xs text-black tracking-widest uppercase">OUR COMPANY</p>
            <ul className="space-y-2 font-inter text-xs text-neutral-600">
              <li><span className="hover:text-black cursor-pointer transition-colors">Contact Us</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">Our Store</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">FAQ</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">About us</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">Media News</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">Krag Journal</span></li>
              <li><span className="hover:text-black cursor-pointer transition-colors">Blogs</span></li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="font-anton text-xs text-black tracking-widest uppercase">COLLECTIONS</p>
              <ul className="space-y-2 font-inter text-xs text-neutral-600">
                <li><span>Men's Collection</span></li>
                <li><span>Women's Collection</span></li>
                <li><span>Accessories Collection</span></li>
                <li><span>Bags Collection</span></li>
              </ul>
            </div>

            {/* Social Links Bar below Stores */}
            <div className="flex items-center space-x-2 pt-2">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/kragbuzzsportswear/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 border border-neutral-200 hover:border-black transition-colors text-neutral-600 hover:text-black flex items-center justify-center"
                title="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kragbuzz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 border border-neutral-200 hover:border-black transition-colors text-neutral-600 hover:text-black flex items-center justify-center"
                title="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://x.com/kragbuzz/status/1467865110550958080"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 border border-neutral-200 hover:border-black transition-colors text-neutral-600 hover:text-black flex items-center justify-center"
                title="X (Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@KragBuzz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 border border-neutral-200 hover:border-black transition-colors text-neutral-600 hover:text-black flex items-center justify-center"
                title="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a
                href="https://in.pinterest.com/onlinekragbuzz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 border border-neutral-200 hover:border-black transition-colors text-neutral-600 hover:text-black flex items-center justify-center"
                title="Pinterest"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Big Watermark Banner with SVG Liquid Water Fill Animation */}
        <div className="pt-4 overflow-hidden select-none pointer-events-none text-center opacity-40">
          <svg viewBox="0 0 1000 190" className="w-full h-auto max-w-7xl mx-auto">
            <defs>
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

            <g mask="url(#krag-water-mask)" opacity="0.9">
              <path
                d="M 0 30 Q 150 5, 300 30 T 600 30 T 900 30 T 1200 30 T 1500 30 V 300 H 0 Z"
                fill="#171717"
                className="animate-liquid-wave-1"
              />
              <path
                d="M 0 40 Q 150 15, 300 40 T 600 40 T 900 40 T 1200 40 T 1500 40 V 300 H 0 Z"
                fill="#000000"
                opacity="0.7"
                className="animate-liquid-wave-2"
              />
            </g>

            <g mask="url(#buzz-water-mask)" opacity="0.9">
              <path
                d="M 0 30 Q 150 5, 300 30 T 600 30 T 900 30 T 1200 30 T 1500 30 V 300 H 0 Z"
                fill="#E72F07"
                className="animate-liquid-wave-1"
              />
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