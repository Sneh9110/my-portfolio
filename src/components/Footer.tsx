
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 md:px-16 border-t border-purple-start/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-lg font-space font-bold text-gradient">
              sneh.👾
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              © {new Date().getFullYear()} All rights reserved
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Crafted with ☕ and code
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
