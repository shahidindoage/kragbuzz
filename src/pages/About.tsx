import React from 'react';
import { Link } from 'react-router-dom';
import { ReviewSection } from '../components/ReviewSection';
import { REVIEWS } from '../data/mockData';

export function About() {
  return (
    <main className="pt-8 pb-16">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Our Story
        </span>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mt-3 text-[#313131]">
          Crafted for Style, Built for Performance
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          At AURA, we bridge the gap between contemporary athletic functional design 
          and high-street fashion. Our goal is simple: premium quality without compromise.
        </p>
      </section>

      {/* Brand Vision Banner */}
      <section className="bg-neutral-100 py-16 my-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light text-[#313131]">
              Redefining Modern Essentials
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded with a focus on minimalism and utility, every product in our collection 
              undergoes rigorous testing for durability, comfort, and aesthetics.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              From our flagship apparel lines to specialised accessories and sporting equipment, 
              we ensure every thread meets modern technical standards.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-block bg-black text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>
          <div className="aspect-square bg-neutral-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-400">
            {/* Visual Placeholder */}
            <span className="text-sm font-medium tracking-wider uppercase">
              Brand Imagery Placeholder
            </span>
          </div>
        </div>
      </section>

      {/* Key Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-light text-center text-[#313131] mb-12">
          Why Choose AURA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm text-center">
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-semibold">
              01
            </div>
            <h3 className="text-lg font-medium text-[#313131]">Premium Materials</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Sourced globally using sustainable practices and long-lasting fabrics engineered for daily use.
            </p>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm text-center">
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-semibold">
              02
            </div>
            <h3 className="text-lg font-medium text-[#313131]">Thoughtful Design</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Clean lines and functional cuts designed to seamlessly transition from daily training to streetwear.
            </p>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg bg-white shadow-sm text-center">
            <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4 text-black font-semibold">
              03
            </div>
            <h3 className="text-lg font-medium text-[#313131]">Global Guarantee</h3>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Fast, secure worldwide shipping backed by 24/7 dedicated customer care and easy returns.
            </p>
          </div>
        </div>
      </section>

      {/* Embedded Reviews Section */}
      <ReviewSection reviews={REVIEWS} />
    </main>
  );
}