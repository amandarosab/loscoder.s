
import React from 'react';

const Technologies = () => {
  const technologies = [
    { name: 'HTML5', color: '#E34F26' },
    { name: 'CSS3', color: '#1572B6' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', color: '#61DAFB' },
    { name: 'Python', color: '#3776AB' },
    { name: 'IA', color: '#FF6B6B' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Tecnologias</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Utilizamos as mais modernas tecnologias para garantir soluções robustas e escaláveis
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group text-center cursor-pointer transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-lg bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                <span 
                  className="text-2xl font-bold text-gray-400 group-hover:opacity-100 transition-all duration-300"
                  style={{ color: 'transparent' }}
                >
                  {tech.name}
                </span>
                <div 
                  className="absolute w-12 h-12 rounded opacity-0 group-hover:opacity-100 transition-all duration-300"
                  style={{ backgroundColor: tech.color }}
                />
              </div>
              <p className="text-gray-700 font-medium group-hover:text-[#FD7506] transition-colors duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
