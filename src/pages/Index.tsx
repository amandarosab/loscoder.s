// src/pages/Index.tsx

import Header from "@/components/Header"; // Importa o novo cabeçalho que criamos
import Hero from "@/components/Hero"; // Importa a nova seção principal minimalista
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // Define um container principal com fundo preto
    <div className="flex flex-col min-h-screen bg-black">
      
      {/* 1. O novo Header é adicionado aqui, no topo da página. */}
      <Header /> 

      {/* O conteúdo principal da página */}
      <main className="flex-1">
        
        {/* 2. A nova seção Hero com o texto centralizado. */}
        <Hero /> 

        {/* O restante das seções da sua página continuam aqui. */}
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      {/* O rodapé no final da página */}
      <Footer />
    </div>
  );
};

export default Index;