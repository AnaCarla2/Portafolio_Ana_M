import React from 'react';
import { Heart } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Ana Dev</h3>
            <p className="text-gray-400">Desarrolladora Fullstack Java</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#home" className="hover:text-[#4ECDC4] transition-colors">
                Inicio
              </a>
              <a href="#about" className="hover:text-[#4ECDC4] transition-colors">
                Sobre Mí
              </a>
              <a href="#education" className="hover:text-[#4ECDC4] transition-colors">
                Educación
              </a>
              <a href="#projects" className="hover:text-[#4ECDC4] transition-colors">
                Proyectos
              </a>
              <a href="#contact" className="hover:text-[#4ECDC4] transition-colors">
                Contacto
              </a>
            </div>
            <p className="text-gray-400 flex items-center">
              Hecho con <Heart size={16} className="mx-1 text-[#FF6B6B]" /> por
              Ana © {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>;
}