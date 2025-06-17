import React from 'react';
import { Code, Database, Server, Globe, Coffee, Heart } from 'lucide-react';
export function About() {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Sobre Mí
          </h2>
          <div className="w-20 h-1 bg-[#6C63FF] mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-[#6C63FF] to-[#4ECDC4] p-1 rounded-lg shadow-xl">
              <div className="bg-white p-6 rounded-lg">
                <p className="text-lg mb-4 text-gray-700">
                  Soy Ana, una ingeniera industrial que descubrió su pasión por
                  la programación y decidió dar un giro a su carrera
                  profesional.
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  Mi formación en ingeniería me ha brindado una sólida base
                  analítica y de resolución de problemas, habilidades que
                  complementan perfectamente mi desarrollo como programadora.
                </p>
                <p className="text-lg text-gray-700">
                  Actualmente estoy enfocada en aplicar mis conocimientos en desarrollo fullstack con Java y tecnologías web modernas, abierta a nuevas oportunidades que me permitan crecer profesionalmente en el sector tecnológico.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#6C63FF] hover:shadow-lg transition-shadow">
              <Code className="text-[#6C63FF] mb-3" size={30} />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-gray-600">HTML, CSS, JavaScript</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#4ECDC4] hover:shadow-lg transition-shadow">
              <Server className="text-[#4ECDC4] mb-3" size={30} />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-gray-600">Java, Spring Boot, REST APIs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FFD166] hover:shadow-lg transition-shadow">
              <Database className="text-[#FFD166] mb-3" size={30} />
              <h3 className="text-xl font-semibold mb-2">Bases de Datos</h3>
              <p className="text-gray-600">MySQL</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#6C63FF] hover:shadow-lg transition-shadow">
              <Coffee className="text-[#6C63FF] mb-3" size={30} />
              <h3 className="text-xl font-semibold mb-2">Pasiones</h3>
              <p className="text-gray-600">
                Aprendizaje continuo, resolución de problemas, trabajo colaborativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}