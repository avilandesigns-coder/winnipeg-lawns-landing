import React from 'react';
import { CheckCircle, Shield, Award, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: Shield,
    title: 'Proper Prep Work',
    description: 'We focus on soil grading and base preparation for results that last',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Trusted by Winnipeg homeowners for over a decade',
  },
  {
    icon: CheckCircle,
    title: '100% Satisfaction Guarantee',
    description: 'We stand behind our work with a complete satisfaction promise',
  },
  {
    icon: Leaf,
    title: 'Canadian Owned & Operated',
    description: 'Local service you can trust, built for Manitoba\'s climate',
  },
];

export function WhyChoose() {
  return (
    <div className="py-12 md:py-24 px-5 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] leading-tight md:text-5xl mb-3">Why Choose Winnipeg Lawns</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Quality workmanship and reliable service from local experts
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 md:p-6 text-center shadow-md"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
                </div>
                <h3 className="text-sm md:text-lg font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional credibility statement */}
        <div className="mt-10 md:mt-12 text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            At Winnipeg Lawns, we don\'t cut corners. Every project starts with proper soil preparation,
            grading, and base work to ensure your lawn looks great and stays healthy for years to come.
            We\'re not just installing grass—we\'re building a foundation for long-term results.
          </p>
        </div>
      </div>
    </div>
  );
}