import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const projects = [{
    id: 1,
    title: 'E-commerce Moderno',
    description: 'Plataforma completa de vendas online',
    category: 'Sites institucionais',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
  }, {
    id: 2,
    title: 'App de Delivery',
    description: 'Aplicativo mobile para entregas',
    category: 'Aplicativos',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop'
  }, {
    id: 3,
    title: 'Landing Page Corporativa',
    description: 'Página de conversão para empresa',
    category: 'Landing Pages',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop'
  }, {
    id: 4,
    title: 'Sistema Web Completo',
    description: 'Dashboard administrativo',
    category: 'Sites institucionais',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop'
  }, {
    id: 5,
    title: 'App Financeiro',
    description: 'Controle de gastos pessoais',
    category: 'Aplicativos',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop'
  }, {
    id: 6,
    title: 'Landing Page Tech',
    description: 'Página para startup de tecnologia',
    category: 'Landing Pages',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'
  }];
  const filters = ['Todos', 'Sites institucionais', 'Landing Pages', 'Aplicativos'];
  const filteredProjects = activeFilter === 'Todos' ? projects : projects.filter(project => project.category === activeFilter);
  return <section className="py-20 bg-zinc-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-bold mb-6 text-orange-500 text-[FD7506]">Portfólio Visual</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos com excelência e dedicação
          </p>
        </div>

        {/* Filter Menu */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2 rounded-lg transition-all duration-300 ${activeFilter === filter ? 'bg-[#FD7506] text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {filter}
            </button>)}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-center text-white px-4">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <Button className="bg-[#FD7506] hover:bg-[#E95027] text-white px-4 py-2 text-sm rounded-lg transition-all duration-300">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Portfolio;