import React from 'react';
import { Globe, Smartphone, Brain, Zap } from 'lucide-react';
const Services = () => {
  const services = [{
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Criamos websites e aplicações web modernas usando HTML, CSS, JavaScript e React para experiências digitais excepcionais.'
  }, {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Desenvolvemos aplicativos nativos e híbridos para iOS e Android, garantindo performance e usabilidade superiores.'
  }, {
    icon: Brain,
    title: 'Integrações com IA',
    description: 'Implementamos soluções de inteligência artificial para automatizar processos e gerar insights valiosos para seu negócio.'
  }, {
    icon: Zap,
    title: 'Automação com Python',
    description: 'Criamos scripts e sistemas automatizados em Python para otimizar workflows e aumentar a produtividade da sua empresa.'
  }];
  return <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">Nossos Serviços</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Oferecemos soluções completas para transformar sua visão em realidade digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-800 hover:border-[#FD7506]/30">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-[#FFFFFF]/10 transition-all duration-300">
                  <IconComponent size={32} className="text-gray-400 group-hover:text-[#FD7506] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default Services;