
import React from 'react';
import { Users, Heart, Target, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Target, label: 'Foco no cliente' },
    { icon: CheckCircle, label: 'Integridade' },
    { icon: Heart, label: 'Cuidado' },
    { icon: Users, label: 'Organização' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Sobre a Los Coders</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Fundada por <strong>Amanda Rosa Belo</strong> e <strong>Igor Shaymon Lima Alvarez</strong>, 
              a Los Coders nasceu da paixão por criar soluções digitais que realmente fazem a diferença. 
              Nossa missão é ser o parceiro tecnológico confiável que sua empresa precisa para crescer 
              no mundo digital.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Acreditamos que o desenvolvimento de software vai além do código. É sobre entender 
              profundamente as necessidades do cliente e entregar soluções que superem expectativas.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className="text-center group cursor-pointer transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                  <IconComponent 
                    size={32} 
                    className="text-gray-600 group-hover:text-[#FD7506] transition-colors duration-300" 
                  />
                </div>
                <p className="text-gray-700 font-medium group-hover:text-[#FD7506] transition-colors duration-300">
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
