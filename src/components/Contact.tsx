import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Te responderé a la brevedad.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  return <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Contáctame
        </h2>
        <div className="w-20 h-1 bg-[#6C63FF] mx-auto mb-6"></div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          ¿Tienes alguna pregunta o propuesta? No dudes en ponerte en contacto
          conmigo. Estoy buscando activamente oportunidades laborales.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Envíame un mensaje
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Nombre
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent" required />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent" required />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Mensaje
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6C63FF] focus:border-transparent" required></textarea>
              </div>
              <button type="submit" className="bg-[#6C63FF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5A52D5] transition-colors flex items-center justify-center w-full">
                <Send size={18} className="mr-2" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="bg-gradient-to-br from-[#6C63FF] to-[#4ECDC4] text-white rounded-lg shadow-md p-8 h-full">
            <h3 className="text-2xl font-bold mb-8">
              Información de Contacto
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Email</h4>
                  <p>anacarlamartinez22@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Teléfono</h4>
                  <p>+57 3016713921</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-4 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-xl mb-1">Ubicación</h4>
                  <p>Barranquilla, Colombia</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="font-semibold text-xl mb-4">
                Sígueme en redes sociales
              </h4>
              <div className="flex space-x-4">
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
                <a href="https://drive.google.com/file/d/1TXUJgGTfs6PhxMRwPDEEEla43sE-tY7P/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="bg-white text-[#6C63FF] p-3 rounded-full hover:bg-opacity-90 transition-all">
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
          </div>
        </div>
      </div>
    </div>
  </section>;
}
