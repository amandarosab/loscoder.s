import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-black text-gray-50 p-6 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center font-mono">
        
        {/* AQUI ESTÁ A MUDANÇA: Adicionamos a classe 'logo-link' */}
        <Link to="/" className="logo-link">
          <img 
            src="/logo.svg"
            alt="Logo Los Coders" 
            className="h-20"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-orange-500 transition-colors">sobre</a>
          <a href="#services" className="hover:text-orange-500 transition-colors">serviços</a>
          <a href="#portfolio" className="hover:text-orange-500 transition-colors">portfólio</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">contato</a>
        </div>

        {/* O resto do seu código do menu responsivo continua aqui... */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50">
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
        {isMenuOpen && (
          <div 
            className="absolute top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center space-y-8 text-2xl md:hidden"
            onClick={() => setIsMenuOpen(false)}
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