import React from 'react';
import nphblack from '../img/logo-black.png';
import '../App.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
 return (
   <div className='bg-nhpred'>
     <div>
       <img src={nphblack} alt="Logo" className="w-36 m-auto" />
       <p className='font-Fontspring text-center'>Productions</p>
     </div>
    
       <div className="flex justify-around">
       <Link to="/portfolio"><div><p className="uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Portfolio</p></div></Link>
       <Link to="/contacto"><div><p className="uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Contacto</p></div></Link>
       <Link to="/"><div><p className="uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Inicio</p></div></Link>
       <Link to="/sobremi"><div><p className="uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Sobre mí</p></div></Link>
       <Link to="/tequiero"><div><p className="uppercase font-Gadugi hover:underline hover:text-red-300 transition-all duration-300">Te quiero</p></div></Link>
     </div>
   </div>
 );
};


export default Navbar;