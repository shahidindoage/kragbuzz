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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 border border-neutral-200 rounded-sm bg-neutral-50/50">
          <span className="font-mono text-xs text-neutral-600 font-medium uppercase tracking-widest">
            ASK AI ABOUT KRAGBUZZ
          </span>

          <div className="flex items-center space-x-3">
            {/* ChatGPT */}
            <a
              href="https://chatgpt.com/?q=Summary+of+KRAGBUZZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 border border-neutral-200 rounded-sm hover:border-black transition-colors bg-black flex items-center justify-center"
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
              className="p-1.5 border border-neutral-200 rounded-sm hover:border-black transition-colors bg-black flex items-center justify-center"
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
              className="p-1.5 border border-neutral-200 rounded-sm hover:border-black transition-colors bg-black flex items-center justify-center"
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
              className="p-1.5 border border-neutral-200 rounded-sm hover:border-black transition-colors bg-black flex items-center justify-center"
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
              className="p-1.5 border border-neutral-200 rounded-sm hover:border-black transition-colors bg-black flex items-center justify-center"
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
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 border-b border-neutral-200 pb-16">
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

          {/* Social Links Column */}
          <div className="space-y-3">
            <p className="font-anton text-xs text-black tracking-widest uppercase">CONNECT</p>
            <ul className="space-y-2 font-inter text-xs text-neutral-600">
              <li>
                <a
                  href="https://www.facebook.com/kragbuzzsportswear/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kragbuzz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/kragbuzz/status/1467865110550958080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@KragBuzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/onlinekragbuzz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Pinterest
                </a>
              </li>
            </ul>
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