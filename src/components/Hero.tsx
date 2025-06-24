import React from 'react';
import { Button } from '@/components/ui/button';
import TechBackground from './TechBackground';
const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative bg-black px-4 py-20 overflow-hidden">
      <TechBackground />
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transformamos ideias em{' '}
          <span className="text-white">soluções digitais</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-300">
          Na Los Coders, desenvolvemos com{' '}
          <span className="font-medium text-[E95027] text-gray-300">integridade</span>,{' '}
          <span className="font-medium text-gray-300">organização</span> e{' '}
          <span className="font-medium text-gray-300">foco total</span> em você.
        </p>

        <Button onClick={scrollToContact} className="bg-[#FD7506] hover:bg-[#E95027] text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#FD7506]/25 transform hover:scale-105">Entre em contato</Button>
      </div>
    </section>;
};
export default Hero;