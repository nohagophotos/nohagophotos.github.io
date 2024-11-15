import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4">
        {/* Sección de Derechos de Autor */}
        <div>
          <p>&copy; 2024 nohagophotos. Todos los derechos reservados.</p>
        </div>
        
        {/* Sección de Redes Sociales */}
        <div>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-500 transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-500 transition-colors"
              >
                Twitter
              </a>
            </li>
            <li>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-500 transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-500 transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;