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
  return <section className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6 text-4xl text-white">Nossos Serviços</h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-50">
            Oferecemos soluções completas para transformar sua visão em realidade digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <div key={index} className="p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-orange-800 hover:border-[#FD7506]/30 bg-zinc-950">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center transition-all duration-300 bg-zinc-900">
                  <IconComponent size={32} className="text-orange-400 group-hover:text-[#FD7506] transition-colors duration-300" />
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