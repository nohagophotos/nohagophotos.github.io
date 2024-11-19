import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
  const retratto = () => {
    navigate('/retrato')
  }
  const boddas = () => {
    navigate('/bodas')
  }
  const urbanno = () => {
    navigate('/urbano')
  }
  const estuddio = () => {
    navigate('/estudio')
  }

  const navigate = useNavigate();

 return (
   <>
   <Navbar/>
   <div className='w-9/12 border-2 border-black h-80 m-auto mt-12'></div>
   <div className='w-9/12 h-96 m-auto mt-6 flex'>
   <div className='border-2 border-black w-4/12 h-72 m-auto flex justify-around hover:bg-nhpred opacity-75 transition-all duration-300' onClick={retratto}>
   <p className='text-center font-Fontspring self-center text-xl'>RETRATO</p>
   </div>
   <div className='border-2 border-black w-4/12 h-72 m-auto flex justify-around hover:bg-nhpred opacity-75 transition-all duration-300' onClick={boddas}>
   <p className='text-center font-Fontspring self-center text-xl'>BODAS</p></div>
   <div className='border-2 border-black w-4/12 h-72 m-auto flex justify-around hover:bg-nhpred opacity-75 transition-all duration-300' onClick={estuddio}>
   <p className='text-center font-Fontspring self-center text-xl'>ESTUDIO</p></div>
   </div>
   <div className='w-9/12 h-72 m-auto flex'>
   <div className='border-2 border-black w-4/12 h-72 m-auto flex justify-around hover:bg-nhpred opacity-75 transition-all duration-300 mt-0' onClick={urbanno}>
   <p className='text-center font-Fontspring self-center text-xl'>URBANO</p></div>
   </div>
   <div className='w-9/12 h-96 m-auto mt-6 flex'>
   <div className='border-2 border-black w-6/12 h-72 m-auto'></div>
   <div className='border-2 border-black w-6/12 h-72 m-auto'></div>
   </div>
   <Footer/>
   </>
 )
}


export default Portfolio