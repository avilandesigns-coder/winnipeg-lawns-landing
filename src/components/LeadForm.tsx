import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    services: [] as string[],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send directly to info@winnipeglawns.ca using FormSubmit
    try {
      const response = await fetch('https://formsubmit.co/info@winnipeglawns.ca', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          services: formData.services.join(', '),
          _subject: '🌱 New Estimate Request - Winnipeg Lawns',
          _replyto: formData.email,
          _captcha: 'false'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Scroll to top of form to show success message
        document.getElementById('estimate-form')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert('There was an error submitting your request. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    }
  };

  if (submitted) {
    return (
      <div id="estimate-form" className="bg-gradient-to-br from-emerald-50 to-green-50 py-12 md:py-20 px-5">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
          </div>
          <h2 className="text-3xl md:text-4xl mb-4">Thank You!</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
            We've received your estimate request and will contact you within 24 hours.
          </p>
          <p className="text-gray-500">
            Your lawn transformation starts here! 🌱
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="estimate-form" className="bg-gradient-to-br from-emerald-50 to-green-50 py-12 md:py-20 px-5">
      <div className="max-w-2xl mx-auto">
        {/* Promotion Reminder */}
        <div className="bg-emerald-600 text-white text-center py-4 px-5 rounded-xl mb-6 shadow-lg">
          <p className="font-bold text-sm md:text-base">🎯 Free Assessment — Limited Spring Slots</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-12">
          <h2 className="text-[28px] leading-tight md:text-4xl mb-3 text-center">Request Your Free Estimate</h2>
          <p className="text-gray-600 text-center mb-8">
            Get a detailed quote tailored to your lawn's needs
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-base font-bold text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="John Smith"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-base font-bold text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-5 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="(204) 555-0123"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-base font-bold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-base font-bold text-gray-700 mb-2">
                Address / Postal Code *
              </label>
              <input
                type="text"
                id="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-5 py-4 text-base border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                placeholder="123 Main St, Winnipeg, MB"
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-base font-bold text-gray-700 mb-3">
                Services Needed (select all that apply)
              </label>
              <div className="space-y-3">
                {['Lawn Aeration & Power Raking', 'Sod Repair & Installation', 'Top Dressing'].map((service) => (
                  <label
                    key={service}
                    className="flex items-center p-5 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-emerald-500 active:bg-emerald-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service)}
                      onChange={() => handleServiceToggle(service)}
                      className="w-6 h-6 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 flex-shrink-0"
                    />
                    <span className="ml-4 text-gray-700 font-medium">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white py-5 rounded-xl text-lg font-bold transition-colors shadow-xl mt-6"
            >
              Request My Free Estimate
            </button>

            {/* Reassurance */}
            <p className="text-center text-sm text-gray-500 pt-2">
              No obligation · Local Winnipeg service
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}