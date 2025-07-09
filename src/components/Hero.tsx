import React from 'react';
import { Button } from '@/components/ui/button';
import TechBackground from './TechBackground';

const Hero: React.FC = () => {
  // Função para rolar suavemente para uma seção da página
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="
        relative
        bg-black
        flex flex-col items-center justify-center text-center overflow-hidden

        px-4 sm:px-8 lg:px-16
        py-16 md:py-20

        h-[80vh]
      "
    >
      {/* Fundo animado sempre visível */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <TechBackground />
      </div>

      {/* Conteúdo na frente */}
      <div className="relative z-10 w-full max-w-2xl">
        <h1
          className="
            font-bold
            text-4xl
            sm:text-6xl
            md:text-6xl
            lg:text-6xl
            leading-tight
            text-white
            mb-8
          "
        >
          Transformamos ideias em
          <span className="text-white"> soluções digitais</span>
        </h1>

        <p
          className="
            text-base sm:text-lg md:text-xl
            text-gray-300
            mb-6
            leading-relaxed
          "
        >
          Desenvolvemos com integridade, organização e foco total em você!
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button
            onClick={() => handleScrollTo('contact')}
            className="
              bg-[#FD7506] hover:bg-[#E95027]
              text-sm sm:text-base
              text-white
              px-6 py-3
              rounded-lg
              transition transform hover:scale-105 hover:shadow-lg hover:shadow-[#E95027]/25
            "
          >
            Entre em contato
          </Button>

          <Button
            onClick={() => handleScrollTo('services')}
            className="
              bg-[#FD7506] hover:bg-[#E95027]
              text-sm sm:text-base
              text-white
              px-6 py-3
              rounded-lg
              transition transform hover:scale-105 hover:shadow-lg hover:shadow-[#E95027]/25
            "
          >
            Nossos serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;