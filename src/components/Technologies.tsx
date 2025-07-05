import React from 'react';
import DevIcon from 'devicon-react-svg';

const Technologies = () => {
  const technologies = [
    { name: 'html5', color: '#E34F26' },
    { name: 'css3', color: '#1572B6' },
    { name: 'javascript', color: '#F7DF1E' },
    { name: 'react', color: '#61DAFB' },
    { name: 'python', color: '#3776AB' },
    { name: 'tensorflow', color: '#FF6B6B' } // exemplo de ícone para IA
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 font-bold text-4xl text-[#fd7506]">Tecnologias</h2>
          <p className="text-lg max-w-2xl mx-auto text-white font-normal">
            Utilizamos tecnologias modernas para garantir soluções robustas e escaláveis
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div key={index}
                 className="group text-center cursor-pointer transition-all duration-300">
              <div
                className="relative w-20 h-20 mx-auto mb-4 rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 bg-zinc-800">
                <DevIcon
                  icon={tech.name}
                  style={{ width: '48px', height: '48px' }}
                  fill={tech.color}
                />
              </div>
              <p className="text-gray-300 font-medium group-hover:text-[#E95027] transition-colors duration-300">
                {tech.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
