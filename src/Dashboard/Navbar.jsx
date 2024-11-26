import React, { useState } from 'react';
import image from "../../public/icon.png"
const Navbar = () => {
 

  return (
    <nav className="w-full h-20 shadow-md fixed flex justify-center items-center px-6 md:px-10 bg-blue-50 z-10">
      <div className="text-3xl font-bold text-blue-600 flex gap-2">
        <img src={image} alt="image" className='w-10 h-10 rounded-full border shadow-lg'/>
       <span >Restauro
        <p className='border border-b-2 border-blue-500 rounded shadow-lg'></p></span> 
        
      </div>
    </nav>
  );
};

export default Navbar;
