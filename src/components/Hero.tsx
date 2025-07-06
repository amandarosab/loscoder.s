import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TechBackground from './TechBackground';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  const goToServices = () => {
    navigate('/services');
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

        h-screen
        md:h-screen
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
            font-extrabold
            text-4xl       /* mobile */
            sm:text-6xl    /* tablet+ */
            md:text-6xl    /* desktop+ */
            lg:text-6xl
            leading-tight
            text-white
            mb-4
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
          Na Los Coders, desenvolvemos com integridade, organização e foco total em você.
        </p>

        <p>
          
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button
            onClick={goToContact}
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
            onClick={goToServices}
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