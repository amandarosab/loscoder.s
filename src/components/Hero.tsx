import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    // Container que centraliza o conteúdo na tela
    <section className="w-full flex items-center justify-center min-h-[calc(89vh-75px)]">
      <div className="container px-4 md:px-6 text-center">
        
        {/* 1. O "card" com a animação de digitação */}
        <div className="mb-7">
          <TypeAnimation
            sequence={[
              'Desenvolvimento WEB e Mobile',
              3000, // Pausa de 3s antes de reiniciar a animação
            ]}
            wrapper="span"
            speed={50}
            // Estilos para criar o visual de "card" laranja
            className="bg-orange-500 text-white text-base md:text-lg font-mono px-4 py-2 rounded-md"
            repeat={Infinity}
          />
        </div>

        {/* 2. O texto principal, agora estático */}
        <h1 className="text-6xl font-mono tracking-wide text-gray-50">
          Transformando ideias em
          <br />
          soluções digitais!
        </h1>

      </div>
    </section>
  );
};

export default Hero;