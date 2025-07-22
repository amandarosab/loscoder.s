import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-black text-gray-50 p-6">
      <nav className="container mx-auto flex justify-between items-center font-mono">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl">
          <span className="text-orange-500">{'{ >> }'}</span> Los Coders
        </Link>
        
        {/* Links de Navegação */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="hover:text-orange-500 transition-colors">sobre</Link>
          <Link to="/services" className="hover:text-orange-500 transition-colors">serviços</Link>
          <Link to="/portfolio" className="hover:text-orange-500 transition-colors">portfólio</Link>
          <Link to="/contact" className="hover:text-orange-500 transition-colors">contato</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;