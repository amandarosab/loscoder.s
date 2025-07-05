import React from 'react';
import {Html5Plain, Css3Plain, JavascriptPlain, ReactOriginal, PythonPlain} from 'devicons-react';

const Technologies: React.FC = () => {
  const technologies = [
    { name: 'HTML5', Icon: Html5Plain, color: '#E34F26' },
    { name: 'CSS3', Icon: Css3Plain, color: '#1572B6' },
    { name: 'JavaScript', Icon: JavascriptPlain, color: '#F7DF1E' },
    { name: 'React', Icon: ReactOriginal, color: '#61DAFB' },
    { name: 'Python', Icon: PythonPlain, color: '#3776AB' },
  ];

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-6 font-bold text-4xl text-[#fd7506]">
            Tecnologias
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white font-normal">
            Utilizamos tecnologias modernas para garantir soluções robustas e
            escaláveis
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((tech, idx) => {
            const { Icon, name, color } = tech;
            return (
              <div
                key={idx}
                className="group text-center cursor-pointer transition-all duration-300"
              >
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-lg shadow-md flex items-center justify-center group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 bg-zinc-800">
                  <Icon color={color} size="48" />
                </div>
                <p className="text-gray-300 font-medium group-hover:text-[#E95027] transition-colors duration-300">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Technologies;