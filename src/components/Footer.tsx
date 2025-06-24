import React from 'react';
const Footer = () => {
  return <footer className="bg-black text-white py-12 border-t border-black-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Los <span className="text-[#E95027]">Coders</span>
            </h3>
            <p className="leading-relaxed text-slate-50">Transformamos ideias em soluções digitais com integridade, organização e foco total em você!</p>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold text-white">Serviços</h4>
            <ul className="space-y-2 text-white-400">
              <li className="bg-inherit">Desenvolvimento Web</li>
              <li className="color text: [#FFFFFF] ">Aplicativos Mobile</li>
              <li>Integrações com IA</li>
              <li>Automação com Python</li>
            </ul>
          </div>

          <div className="space-y-2 text-white-400">
            <h4 className="text-lg font-semibold mb-4 text-white-500">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p className="space-y-2 text-[#FFFFFF]-400">(11) 91062-3871</p>
              <p className="space-y-2 text-white-400">contato@loscoders.com.br</p>
            </div>
          </div>
        </div>

        <div className="">
          <p className="<div> text-sm </div> text-gray-400 py-[35px] text-center">&copy; 2024 Los Coders. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;