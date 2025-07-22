import { TypeAnimation } from 'react-type-animation';
// Importamos a biblioteca que acabámos de instalar
import clsx from 'clsx';

const Hero = () => {
  // Vamos definir as classes de estilo numa variável para ser mais claro
  const cardStyles = clsx(
    // Estilos base que se aplicam a todos os ecrãs
    'bg-orange-500',
    'text-white',
    'font-mono',
    'rounded-md',
    'transition-all', // Adiciona uma transição suave
    'duration-300',

    // --- ESTILOS PARA TELEMÓVEL (ECRÃS PEQUENOS) ---
    'text-sm',      // Letra pequena
    'px-3',         // Espaçamento horizontal pequeno
    'py-1',         // Espaçamento vertical pequeno

    // --- ESTILOS PARA COMPUTADOR (A PARTIR DE ECRÃS MÉDIOS) ---
    'md:text-base', // Letra volta ao tamanho normal
    'md:px-4',      // Espaçamento horizontal volta ao normal
    'md:py-2'       // Espaçamento vertical volta ao normal
  );

  return (
    <section className="w-full flex items-center justify-center py-52">
      <div className="container px-4 md:px-6 text-center">
        
        <div className="mb-7">
          <TypeAnimation
            sequence={[
              'Desenvolvimento WEB e Mobile',
              4000,
            ]}
            wrapper="span"
            speed={50}
            // Usamos a variável de estilos que criámos
            className={cardStyles}
            repeat={Infinity}
          />
        </div>

        <h1 className="text-2xl md:text-5xl font-mono tracking-wide text-gray-50">
          Transformando ideias em
          <br />
          soluções digitais!
        </h1>

      </div>
    </section>
  );
};

export default Hero;