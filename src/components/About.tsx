import React from 'react';
import { Users, Heart, Target, CheckCircle } from 'lucide-react';
const About = () => {
  const values = [{
    icon: Target,
    label: 'Foco no cliente'
  }, {
    icon: CheckCircle,
    label: 'Integridade'
  }, {
    icon: Heart,
    label: 'Cuidado'
  }, {
    icon: Users,
    label: 'Organização'
  }];
  return <section className="py-20 bg-inherit">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-[#e95027]">Sobre a Los Coders</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8 leading-relaxed my-px text-white">
              Fundada por <strong className="text-white">Amanda Rosa</strong> e <strong className="text-white">Igor Shaymon Lima Alvarez</strong>, 
              a Los Coders nasceu da paixão por criar soluções digitais que realmente fazem a diferença. 
              Nossa missão é ser o parceiro tecnológico confiável que sua empresa precisa para crescer 
              no mundo digital.
            </p>
            <p className="text-lg leading-relaxed text-white">Acreditamos que o desenvolvimento de software vai além do código. É sobre entender profundamente as necessidades do cliente e entregar soluções que superem expectativas!</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, index) => {
          const IconComponent = value.icon;
          return <div key={index} className="text-center group cursor-pointer text-sidebar-accent-foreground duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 bg-zinc-800">
                  <IconComponent size={32} className="text-[#E95027]-400 group-hover:text-[#FD7506] transition-colors duration-300" />
                </div>
                <p className="font-medium transition-colors duration-300 text-[[#E95027]] text-[#f8f3f1]">
                  {value.label}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default About;