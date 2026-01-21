import React from 'react';
import { MapPin, Shield, Award, CheckCircle, Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 md:py-16 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 mb-10 md:mb-12">
          {/* Left Column - Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl mb-4">Winnipeg Lawns</h3>
            <div className="flex items-start text-emerald-400 mb-6">
              <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
              <div>
                <p className="text-base md:text-lg">Serving Winnipeg & Surrounding Areas</p>
                <p className="text-gray-400 text-sm mt-1">
                  Professional lawn repair and installation services
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Your trusted local partner for lawn aeration Winnipeg, sod installation Winnipeg,
              and complete lawn repair services. Quality workmanship built for Manitoba\'s climate.
            </p>
          </div>

          {/* Right Column - Contact & Info */}
          <div>
            <h4 className="text-xl mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400 text-sm md:text-base">
              <p>
                <span className="text-white font-semibold">Email:</span> info@winnipeglawns.ca
              </p>
              <p className="text-sm text-emerald-400 mt-4">
                Free estimates · Same-day response
              </p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            <div className="flex items-start md:items-center">
              <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <span className="text-xs md:text-sm leading-tight">100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-start md:items-center">
              <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <span className="text-xs md:text-sm leading-tight">Proper Prep & Installation</span>
            </div>
            <div className="flex items-start md:items-center">
              <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <span className="text-xs md:text-sm leading-tight">10+ Years Experience</span>
            </div>
            <div className="flex items-start md:items-center">
              <div className="w-10 h-10 bg-emerald-900 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                <Leaf className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
              </div>
              <span className="text-xs md:text-sm leading-tight">Canadian Owned & Operated</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} Winnipeg Lawns. All rights reserved.</p>
          <p className="mt-2">
            Serving Winnipeg, MB with professional lawn care and sod installation services
          </p>
        </div>
      </div>
    </footer>
  );
}