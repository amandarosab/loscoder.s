import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-black text-gray-50 p-6 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center font-mono">
        <Link to="/" className="text-xl md:text-2xl">
          <img 
            src="/logo.svg"
            alt="Logo Los Coders" 
            className="h-12"
          />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="hover:text-orange-500 transition-colors">sobre</a>
          <a href="#services" className="hover:text-orange-500 transition-colors">serviços</a>
          {/* Este é o link que estamos verificando */}
          <a href="#portfolio" className="hover:text-orange-500 transition-colors">portfólio</a>
          <a href="#contact" className="hover:text-orange-500 transition-colors">contato</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;