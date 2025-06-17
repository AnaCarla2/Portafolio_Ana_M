import React, { useState } from 'react';
import { Menu, X, Code, Terminal } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-[#6C63FF] text-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code size={24} />
          <span className="text-xl font-bold">Ana Dev</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
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
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="bg-[#6C63FF] md:hidden py-4 px-6 space-y-4">
          <a href="#home" className="block hover:text-[#4ECDC4] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </a>
          <a href="#about" className="block hover:text-[#4ECDC4] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Sobre Mí
          </a>
          <a href="#education" className="block hover:text-[#4ECDC4] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Educación
          </a>
          <a href="#projects" className="block hover:text-[#4ECDC4] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Proyectos
          </a>
          <a href="#contact" className="block hover:text-[#4ECDC4] transition-colors" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </a>
        </nav>}
    </header>;
}