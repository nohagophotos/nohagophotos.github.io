import React from 'react';
import nphblack from '../img/logo-black.png';
import '../App.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
 return (
   <div className='bg-nhpred sticky top-0 w-full z-50'>
     <div>
       <img src={nphblack} alt="Logo" className="w-36 m-auto" />
       <p className='font-Fontspring text-center text-xl pb-2'>Productions</p>
     </div>
    
       <div className="flex justify-around pb-2">
       <Link to="/portfolio"><div><p className="text-base uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Portfolio</p></div></Link>
       <Link to="/contacto"><div><p className="text-base uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Contacto</p></div></Link>
       <Link to="/"><div><p className="text-base uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Inicio</p></div></Link>
       <Link to="/sobremi"><div><p className="text-base uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Sobre mí</p></div></Link>
       <Link to="/tequiero"><div><p className="text-base uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Te quiero</p></div></Link>
     </div>
   </div>
 );
};


export default Navbar;