import React from 'react';

export function SecondaryCTA() {
  const scrollToForm = () => {
    document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="py-12 md:py-20 px-5 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Promotion Reminder */}
        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full mb-6">
          <span className="font-bold text-sm md:text-base">🎯 Free Assessment — Limited Slots</span>
        </div>

        <h2 className="text-[28px] leading-tight md:text-5xl mb-5 md:mb-6">
          Ready to Transform Your Lawn?
        </h2>
        <p className="text-lg md:text-2xl mb-8 text-emerald-50 leading-relaxed">
          Get your free estimate today and join hundreds of satisfied Winnipeg homeowners
        </p>

        <button
          onClick={scrollToForm}
          className="w-full max-w-md mx-auto block bg-white text-emerald-700 hover:bg-gray-100 active:bg-gray-200 px-10 py-5 rounded-xl text-lg md:text-xl font-bold transition-colors shadow-xl"
        >
          Get Your Free Estimate
        </button>

        <p className="mt-6 text-emerald-100 text-sm">
          No obligation · Fast response · Local service
        </p>
      </div>
    </div>
  );
}