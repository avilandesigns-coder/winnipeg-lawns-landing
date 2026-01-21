import React from 'react';

const services = [
  {
    title: 'Lawn Aeration & Power Raking',
    description: 'Remove thatch and improve soil health for stronger, greener grass that thrives all season.',
    image: 'https://images.unsplash.com/photo-1703432043433-3bb86c844968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwYWVyYXRpb24lMjBncmFzc3xlbnwxfHx8fDE3Njg5NjE4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Sod Repair & Installation',
    description: 'Professional sod installation with proper base prep for an instant, beautiful lawn.',
    image: 'https://images.unsplash.com/photo-1706649360942-d0ac2e8dc256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHNvZCUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3Njg5NjE4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Top Dressing',
    description: 'Level your lawn and enrich soil quality for improved drainage and healthier growth.',
    image: 'https://images.unsplash.com/photo-1734303023518-71e656574f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXduJTIwY2FyZSUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc2ODk1MTUyMnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Services() {
  const scrollToForm = () => {
    document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="services" className="py-12 md:py-24 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[28px] leading-tight md:text-5xl mb-3">Our Lawn Services</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional lawn care solutions for Winnipeg homeowners
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl md:text-2xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={scrollToForm}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-4 rounded-xl font-bold transition-colors text-base shadow-lg"
                >
                  Get Estimate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}