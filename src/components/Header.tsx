import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importando os ícones

const Header = () => {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-gray-50 p-6 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center font-mono">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl z-50">
          <img 
            src="/logo.svg"
            alt="Logo Los Coders" 
            className="h-20"
          />
        </Link>
        
        {/* Links de Navegação para Telas Grandes (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-orange-500 transition-colors">sobre</a>
          <a href="#services" className="hover:text-orange-500 transition-colors">serviços</a>
          <a href="#portfolio" className="hover:text-orange-500 transition-colors">portfólio</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">contato</a>
        </div>

        {/* Ícone do Menu Hambúrguer para Telas Pequenas (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Menu Mobile (aparece quando o ícone é clicado) */}
        {isMenuOpen && (
          <div 
            className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 text-2xl md:hidden"
            onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar em um link
          >
            <a href="#about" className="hover:text-orange-500">sobre</a>
            <a href="#services" className="hover:text-orange-500">serviços</a>
            <a href="#portfolio" className="hover:text-orange-500">portfólio</a>
            <a href="#contact" className="hover:text-orange-500">contato</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;