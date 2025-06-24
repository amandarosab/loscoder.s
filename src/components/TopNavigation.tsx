
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const TopNavigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-gray-900/80 backdrop-blur-sm text-white border border-gray-700 hover:bg-gray-800">
              <Menu className="h-4 w-4 mr-2" />
              Menu
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-gray-900/95 backdrop-blur-sm border-gray-700 min-w-[200px]">
              <div className="p-2 space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-white"
                  onClick={() => scrollToSection('hero')}
                >
                  Início
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-white"
                  onClick={() => scrollToSection('about')}
                >
                  Sobre
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-white"
                  onClick={() => scrollToSection('services')}
                >
                  Serviços
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-white"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Portfólio
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-white"
                  onClick={() => scrollToSection('technologies')}
                >
                  Tecnologias
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-white"
                  onClick={() => scrollToSection('testimonials')}
                >
                  Depoimentos
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-white hover:bg-gray-800 hover:text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  Contato
                </Button>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default TopNavigation;
