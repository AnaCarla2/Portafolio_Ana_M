import React from 'react';
import { Github, ExternalLink, Code, Database, Layout } from 'lucide-react';

export function Projects() {
  return <section id="projects" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Mis Proyectos
        </h2>
        <div className="w-20 h-1 bg-[#6C63FF] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Estos son algunos de los proyectos que he desarrollado durante mi
          formación, demostrando mis habilidades técnicas y mi capacidad para
          resolver problemas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Proyecto 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="h-48 bg-white flex items-center justify-center">
            <img
              src="/PetLab.JPG"
              alt="Proyecto PetLab"
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* <div className="h-48 bg-gradient-to-r from-[#6C63FF] to-[#4ECDC4] flex items-center justify-center">
              <Layout size={64} className="text-white" />
            </div> */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              PetLab
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                Java
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                Spring Boot
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                MySQL
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                HTML- CSS
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              E-commer especializado en servicios de laboratorios veterinarios, utilizando Java, HTML, CSS y JavaScrip,
              generando mayor accesibilidad y visibilidad en el sector.
            </p>
            <div className="flex justify-between">
              <a href="https://github.com/KerlyVanesaSarrias/PetLab" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#6C63FF] hover:text-[#4ECDC4] transition-colors">
                <Github size={18} className="mr-1" />
                <span>Código</span>
              </a>
              <a href="https://main.d2e3h3wxomf5cy.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#6C63FF] hover:text-[#4ECDC4] transition-colors">
                <ExternalLink size={18} className="mr-1" />
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
        {/* Proyecto 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="h-48 bg-white flex items-center justify-center">
            <img
              src="/Urban.JPG"
              alt="Proyecto PetLab"
              className="w-full h-full object-contain p-2"
            />
          </div>
          {/* <div className="h-48 bg-gradient-to-r from-[#4ECDC4] to-[#FFD166] flex items-center justify-center">
            <Database size={64} className="text-white" />
          </div> */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              URBN Sportwear
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                HTML
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                CSS
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                JavaScrip
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              Landing page responsive para tienda deportiva, desarrollada con HTML, CSS y JavaScript. Incluye sección de hero con llamado a la acción, navegación intuitiva y
              catálogo visual de productos. Enfocada en ofrecer una experiencia de usuario atractiva y moderna..
            </p>
            <div className="flex justify-between">
              <a href="https://github.com/httpsmarioooo/TotalDeporte" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#6C63FF] hover:text-[#4ECDC4] transition-colors">
                <Github size={18} className="mr-1" />
                <span>Código</span>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer"  className="flex items-center text-[#6C63FF] hover:text-[#4ECDC4] transition-colors">
                <ExternalLink size={18} className="mr-1" />
                <span>Documentación</span>
              </a>
            </div>
          </div>
        </div>
        {/* Proyecto 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
          <div className="h-48 bg-white flex items-center justify-center">
            <img
              src="/CRUD.JPG"
              alt="Proyecto PetLab"
              className="w-full h-full object-contain p-2"
            />
          </div>
          {/* <div className="h-48 bg-gradient-to-r from-[#FFD166] to-[#6C63FF] flex items-center justify-center">
            <Code size={64} className="text-white" />
          </div> */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Sistema de Blog – API REST con CRUD completo
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                Java
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                Spring Boot
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                MySQL
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                Postman
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              API REST desarrollada en Java con Spring Boot para gestionar publicaciones de un blog. Implementa operaciones CRUD completas con persistencia de datos en MySQL (phpMyAdmin). El sistema sigue una arquitectura por capas (Controlador, Servicio, Repositorio) y cuenta con validaciones robustas y manejo de errores.
              Probado mediante Postman para asegurar el correcto funcionamiento de cada endpoint.
            </p>
            <div className="flex justify-between">
              <a href="https://github.com/AnaCarla2/Crud_completo_blog" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#6C63FF] hover:text-[#4ECDC4] transition-colors">
                <Github size={18} className="mr-1" />
                <span>Código</span>
              </a>
              <a href="https://github.com/AnaCarla2/Crud_completo_blog" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#6C63FF] hover:text-[#4ECDC4] transition-colors">
                <ExternalLink size={18} className="mr-1" />
                <span>Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}