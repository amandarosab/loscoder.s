import React from 'react';
const Footer = () => {
  return <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Los <span className="text-[#FD7506]">Coders</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Transformamos ideias em soluções digitais com integridade, 
              organização e foco total em você.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Desenvolvimento Web</li>
              <li>Aplicativos Mobile</li>
              <li>Integrações com IA</li>
              <li>Automação com Python</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-400">
              <p>contato@loscoders.com.br</p>
              <p>(11) 99999-9999</p>
            </div>
          </div>
        </div>

        <div className="">
          <p>&copy; 2024 Los Coders. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;