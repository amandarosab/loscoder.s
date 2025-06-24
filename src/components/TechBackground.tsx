
import React from 'react';

const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid-pattern animate-pulse-slow"></div>
      </div>
      
      {/* Flowing Circuits */}
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="circuit-line"
            style={{
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Data Flow Lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="data-flow"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TechBackground;
