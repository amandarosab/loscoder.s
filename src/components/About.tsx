import { Users, Heart, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Target, label: 'Foco no cliente' },
    { icon: CheckCircle, label: 'Integridade' },
    { icon: Heart, label: 'Cuidado' },
    { icon: Users, label: 'Organização' },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          {/* EXEMPLO DE TEXTO RESPONSIVO */}
          <h2 className="text-3xl lg:text-4xl font-mono mb-6 text-orange-500">
            Sobre a Los Coders
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-white my-2">
            Fundada por{' '}
            <strong className="text-white">Amanda Rosa</strong> e{' '}
            <strong className="text-white">
              Igor Shaymon Lima Alvarez
            </strong>
            , a Los Coders nasceu da paixão por criar soluções digitais que
            realmente fazem a diferença.
          </p>
        </div>

        {/* EXEMPLO DE LAYOUT RESPONSIVO (Grid) */}
        {/*
          - grid-cols-2: No telemóvel, mostra 2 colunas.
          - md:grid-cols-4: Em tablets e computadores, mostra 4 colunas.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComp = value.icon;
            return (
              <div
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-zinc-800">
                  <IconComp size={32} className="text-orange-500" />
                </div>
                <p className="font-medium text-gray-200">
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