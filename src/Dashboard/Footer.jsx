import React from 'react';

const footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-8 mt-4 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-2xl font-bold mb-4 md:mb-0">
          <a href="/" className="hover:text-gray-400 transition duration-300">
           Welcome to <span className='text-blue-500'>Restauro..</span>
          </a>
        </div>
        
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-400 transition duration-300">Home</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">About</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">Services</a>
          <a href="#" className="hover:text-gray-400 transition duration-300">Contact</a>
        </div>

        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-400 transition duration-300">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <div className="text-center text-sm mt-6">
        &copy; {new Date().getFullYear()} Restauro. All rights reserved.
      </div>
    </footer>
  );
}

export default footer;
