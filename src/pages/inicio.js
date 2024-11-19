import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import p1 from '../img/ESTUDIO/9.jpg';
import p2 from '../img/BODAS/6.jpg';
import p3 from '../img/BODAS/2.jpg';

const inicio = () => {
 return (
   <>
   <Navbar/>
   <div className='w-9/12 h-80 m-auto mt-12'>
   <img src={p2} className='object-cover w-full h-full '/>
  </div>
   <div className='w-9/12 h-96 m-auto mt-6 flex'>
   <div className='w-6/12 h-72 m-auto'><img src={p1} className='object-cover w-full h-full '/></div>
   <div className='w-6/12 h-72 m-auto flex flex-col justify-around'>
  <div className='self-center'>
  <p className='ml-2 font-Fontspring self'>INICIO</p>
   <p className='ml-2'>No dudes en contar tu proyecto, <br/> trabajamos la iluminación, captación y edición de la imagen y video, de la mejor forma en la actualidad. ¿Quieres comprobarlo? Pincha <Link to="/portfolio" className='underline font-bold hover:text-nhpred'>aqui</Link></p>
  </div>
  </div>
   </div>
   <div className='w-9/12 h-48 m-auto mt-4'>
   <img src={p3} className='object-cover w-full h-full '/>
   </div>
   <Footer/>
   </>
 )
}


export default inicio