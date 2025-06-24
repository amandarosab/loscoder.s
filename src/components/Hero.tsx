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
        <h1 className="text-10xl font-bold text-white mb-4 leading-tight md:text-10xl py-px my-0 text-6xl">
          Transformamos ideias em{' '}
          <span className="text-white">soluções digitais</span>
        </h1>
        
        <p className="text-xl md:text-6xl mb-10 max-w-7xl mx-auto leading-relaxed text-white">
          Na Los Coders, desenvolvemos com{' '}
          <span className="font-medium text-[E95027] text-white">integridade</span>,{' '}
          <span className="font-medium text-white">organização</span> e{' '}
          <span className="font-medium text-white">foco total</span> em você.
        </p>

        <Button onClick={scrollToContact} className="bg-[#E95027] hover:bg-[#FD7506] text-white text-lg rounded-lg duration-300 hover:shadow-lg hover:shadow-[#E95027]/25 transform hover:scale-105 py-[10px] px-[30px] mx-0">Entre em contato</Button>
      </div>
    </section>;
};
export default Hero;