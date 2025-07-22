import { Users, Heart, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Target, label: 'Foco no cliente' },
    { icon: CheckCircle, label: 'Integridade' },
    { icon: Heart, label: 'Cuidado' },
    { icon: Users, label: 'Organização' },
  ];

  return (
    // AQUI ESTÁ A CHAVE: O id="about" precisa estar nesta linha.
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título e descrição */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-mono mb-6 text-orange-500">
            Sobre a Los Coders
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="mb-8 leading-relaxed text-white my-2 text-base sm:text-lg">
              Fundada por{' '}
              <strong className="text-white">Amanda Rosa</strong> e{' '}
              <strong className="text-white">
                Igor Shaymon Lima Alvarez
              </strong>
              , a Los Coders nasceu da paixão por criar soluções digitais que
              realmente fazem a diferença.
            </p>
            <p className="leading-relaxed text-white text-base sm:text-lg">
              Acreditamos que o desenvolvimento de software vai além do código.
              É sobre entender profundamente as necessidades do cliente e entregar
              soluções que superem expectativas!
            </p>
          </div>
        </div>

        {/* Valores */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComp = value.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full shadow-md flex items-center justify-center bg-zinc-800 transition-shadow duration-300 group-hover:shadow-lg">
                  <IconComp
                    size={32}
                    className="text-orange-500 group-hover:text-orange-400 transition-colors duration-300"
                  />
                </div>
                <p className="font-medium text-gray-200 group-hover:text-orange-400 transition-colors duration-300">
                  {value.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;