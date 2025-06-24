
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Transformamos ideias em{' '}
          <span className="text-[#FD7506]">soluções digitais</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Na Los Coders, desenvolvemos com{' '}
          <span className="text-[#0ACB8B] font-medium">integridade</span>,{' '}
          <span className="text-[#E95027] font-medium">organização</span> e{' '}
          <span className="text-[#FFBF23] font-medium">foco total</span> em você.
        </p>

        <Button 
          onClick={scrollToContact}
          className="bg-[#FD7506] hover:bg-[#E95027] text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FD7506]/25 transform hover:scale-105"
        >
          Fale com a gente
        </Button>
      </div>
    </section>
  );
};

export default Hero;
