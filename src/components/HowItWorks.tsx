import React from 'react';
import { FileText, Search, Wrench } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    number: '1',
    title: 'Request Estimate',
    description: 'Fill out our simple form or give us a call',
  },
  {
    icon: Search,
    number: '2',
    title: 'On-Site Lawn Assessment',
    description: 'We visit your property for a detailed evaluation',
  },
  {
    icon: Wrench,
    number: '3',
    title: 'Professional Installation',
    description: 'Expert service with proper prep and quality materials',
  },
];

export function HowItWorks() {
  return (
    <div className="py-12 md:py-24 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] leading-tight md:text-5xl mb-3">How It Works</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to your dream lawn
          </p>
        </div>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-emerald-200"></div>
                )}

                <div className="relative text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg relative z-10">
                    <Icon className="w-10 h-10 md:w-12 md:h-12" />
                  </div>
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-2 w-10 h-10 bg-white border-4 border-emerald-600 rounded-full flex items-center justify-center font-bold text-emerald-600 text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl md:text-2xl mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}