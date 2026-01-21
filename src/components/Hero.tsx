import React from 'react';
import { MapPin } from 'lucide-react';

export function Hero() {
  const scrollToForm = () => {
    document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gray-900 min-h-[500px] md:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585853170250-94ea013aa349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGxhd24lMjBzdWJ1cmJhbiUyMGhvdXNlfGVufDF8fHx8MTc2ODk2MTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/90 to-gray-900/85"></div>
      </div>

      {/* Content */}
      <div className="relative w-full px-5 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Promotional Banner */}
          <div className="inline-flex items-center bg-emerald-600 text-white px-5 py-3 rounded-full mb-5 text-sm font-semibold shadow-lg">
            <span>🎯 Free Assessment — Limited Slots</span>
          </div>

          {/* Location Badge */}
          <div className="flex items-center text-emerald-400 mb-5">
            <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
            <span className="font-medium">Winnipeg, Manitoba</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[32px] leading-tight md:text-6xl lg:text-7xl text-white mb-5 max-w-4xl">
            Professional Lawn Repair & Sod Installation in Winnipeg
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Fast, reliable lawn solutions from local experts. Quality workmanship you can count on.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 max-w-md">
            <button
              onClick={scrollToForm}
              className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-8 py-5 rounded-xl text-lg font-bold transition-colors shadow-xl"
            >
              Get a Free Estimate
            </button>
            <button
              onClick={scrollToServices}
              className="w-full bg-white/10 hover:bg-white/20 active:bg-white/30 text-white border-2 border-white px-8 py-5 rounded-xl text-lg font-bold transition-colors backdrop-blur-sm"
            >
              See Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}