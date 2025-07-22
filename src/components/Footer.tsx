import React from 'react';
const Footer = () => {
  return <footer className="text-white py-12 border-t border-black-800 bg-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Los <span className="text-[#E95027]">Coders</span>
            </h3>
            <p className="leading-relaxed text-slate-50 text-base font-normal">Desenvolvemos com integridade, organização e foco total em você!</p>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold text-white">Serviços</h4>
           <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-orange-500">Desenvolvimento Web</a></li>
              <li><a href="#services" className="hover:text-orange-500">Aplicativos Mobile</a></li>
              <li><a href="#services" className="hover:text-orange-500">Integrações com IA</a></li>
              <li><a href="#services" className="hover:text-orange-500">Automação com Python</a></li>
            </ul>
          </div>

          <div className="space-y-0 text-white-400">
            <h4 className="text-lg font-semibold mb-4 text-white-500">Contato</h4>
            <div className="space-y-2 text-white-400">
              <p className="space-y-0 text-[#FFFFFF]-400">(11) 91062-3871</p>
              <p className="space-y-0 text-[#FFFFFF]-400">contato@loscoders.com.br</p>
            </div>
          </div>
        </div>
          <div className="border-t border-black mt-20 pt-8 text-center text-sm text-gray-500"> <p>©2025 Los Coders. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;