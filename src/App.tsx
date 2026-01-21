import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { LeadForm } from './components/LeadForm';
import { Services } from './components/Services';
import { WhyChoose } from './components/WhyChoose';
import { HowItWorks } from './components/HowItWorks';
import { SecondaryCTA } from './components/SecondaryCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <LeadForm />
      <Services />
      <WhyChoose />
      <HowItWorks />
      <SecondaryCTA />
      <Footer />
    </div>
  );
}
