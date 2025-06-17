import React from 'react';
import { ChevronDown, Code, Terminal, Database, Server } from 'lucide-react';
export function Hero() {
  return <section id="home" className="bg-gradient-to-br from-[#6C63FF] to-[#4ECDC4] text-white min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hola, soy <span className="text-[#FFD166]">Ana</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              Desarrolladora Fullstack Java
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-md mx-auto md:mx-0">
              Ingeniera industrial con pasión por el desarrollo de software.
              Buscando mi primera oportunidad para crear soluciones tecnológicas
              increíbles.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#contact" className="bg-[#FFD166] text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:-translate-y-1">
                Contáctame
              </a>
              <a href="#projects" className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#6C63FF] transition-all transform hover:-translate-y-1">
                Ver Proyectos
              </a>
            </div>
             <div className="mt-6 flex space-x-4">
                <a href="https://www.linkedin.com/in/ana-carla-mart%C3%ADnez?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BHOEf8uP9TVWzn9BjjEpfuA%3D%3D" target="_blank" rel="noopener noreferrer" className="bg-white text-[#6C63FF] p-3 rounded-full hover:bg-opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#https://github.com/AnaCarla2" target="_blank" rel="noopener noreferrer" className="bg-white text-[#6C63FF] p-3 rounded-full hover:bg-opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a href="https://drive.google.com/file/d/1jSUBZbfSCGfcSC0gXWnxWUYfPy6tdDej/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-white text-[#6C63FF] p-3 rounded-full hover:bg-opacity-90 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide lucide-file-text">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                </a>
              </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-9xl font-bold text-white text-opacity-40">
                  A
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#FFD166] rounded-full p-3 shadow-lg">
                <Code size={28} className="text-gray-900" />
              </div>
              <div className="absolute top-20 -left-8 bg-white rounded-full p-3 shadow-lg">
                <Terminal size={28} className="text-[#6C63FF]" />
              </div>
              <div className="absolute bottom-10 -right-10 bg-white rounded-full p-3 shadow-lg">
                <Database size={28} className="text-[#6C63FF]" />
              </div>
              <div className="absolute -bottom-4 left-10 bg-[#FFD166] rounded-full p-3 shadow-lg">
                <Server size={28} className="text-gray-900" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>;
}