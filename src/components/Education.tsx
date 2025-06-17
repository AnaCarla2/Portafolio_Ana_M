import React from 'react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
export function Education() {
  return <section id="education" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Educación y Habilidades
        </h2>
        <div className="w-20 h-1 bg-[#6C63FF] mx-auto"></div>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
            <GraduationCap className="mr-3 text-[#6C63FF]" size={28} />
            Formación Académica
          </h3>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#6C63FF] hover:shadow-lg transition-shadow">
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold text-gray-800">
                  Ingeniería Industrial
                </h4>
                {/* <span className="text-sm font-medium text-gray-500">
                  2005 - 2010
                </span> */}
              </div>
              <p className="text-[#6C63FF] font-medium">
                Universidad de Córdoba (Monteria)
              </p>
              <p className="mt-2 text-gray-600">
                Formación sólida en análisis de procesos, optimización de recursos y resolución de problemas, 
                habilidades clave para el desarrollo eficiente de software.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#4ECDC4] hover:shadow-lg transition-shadow">
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold text-gray-800">
                  Bootcamp Desarrollo Java Fullstack
                </h4>
                <span className="text-sm font-medium text-gray-500">
                  03/2025- 06/2025 
                </span>
              </div>
              <p className="text-[#4ECDC4] font-medium">Coding Dojo</p>
              <p className="mt-2 text-gray-600">
                Formación intensiva en desarrollo web con Java, Spring Boot,
                MySQL, JavaScript, HTML Y Css, desarrollado bajo la metodología Scrum, utilizando sprints semanales,
                tableros de tareas (Trello) y reuniones diarias para seguimiento del avance
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FFD166] hover:shadow-lg transition-shadow">
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold text-gray-800">
                  Curso en Programación Web Básica con HTML, CSS y JavaScript
                </h4>
                <span className="text-sm font-medium text-gray-500">
                  2023
                </span>
              </div>
              <p className="text-[#FFD166] font-medium">Oracle</p>
              <p className="mt-2 text-gray-600">
               Curso de iniciación al desarrollo frontend, donde aprendí a construir páginas web
               funcionales con HTML, CSS y JavaScript, sentando las bases para continuar mi formación como desarrolladora fullstack.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
            <Award className="mr-3 text-[#6C63FF]" size={28} />
            Habilidades Técnicas
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">
              Lenguajes de Programación
            </h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">Java</span>
                  <span className="text-sm text-gray-500">90%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#6C63FF] h-2.5 rounded-full" style={{
                    width: '90%'
                  }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">
                    JavaScript
                  </span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#4ECDC4] h-2.5 rounded-full" style={{
                    width: '75%'
                  }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">HTML/CSS</span>
                  <span className="text-sm text-gray-500">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-[#FFD166] h-2.5 rounded-full" style={{
                    width: '85%'
                  }}></div>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-4 mt-8 text-gray-800">
              Frameworks , Tecnologías y Habilidades
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center">
                <CheckCircle size={16} className="text-[#6C63FF] mr-2" />
                <span className="text-gray-700">Spring Boot</span>
              </div>
              {/* <div className="flex items-center">
                <CheckCircle size={16} className="text-[#6C63FF] mr-2" />
                <span className="text-gray-700">React</span>
              </div> */}
              <div className="flex items-center">
                <CheckCircle size={16} className="text-[#6C63FF] mr-2" />
                <span className="text-gray-700">MySQL</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-[#6C63FF] mr-2" />
                <span className="text-gray-700">Git</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-[#6C63FF] mr-2" />
                <span className="text-gray-700">Github</span>
              </div> 
              <div className="flex items-center">
                <CheckCircle size={16} className="text-[#6C63FF] mr-2" />
                <span className="text-gray-700">REST APIs</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-[#6C63FF] mr-2" />
                <span className="text-gray-700">Bootstrap</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={16} className="text-[#6C63FF] mr-2" />
                <span className="text-gray-700">Scrum</span>
              </div> 
              <div className="flex items-center">
                <CheckCircle size={16} className="text-[#6C63FF] mr-2" />
                <span className="text-gray-700">Trabajo en sprints</span>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}