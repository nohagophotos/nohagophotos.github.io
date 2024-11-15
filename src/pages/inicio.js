import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const inicio = () => {
 return (
   <>
   <Navbar/>
   <div className='w-9/12 border-2 border-black h-80 m-auto mt-12'></div>
   <div className='w-9/12 h-96 m-auto mt-6 flex'>
   <div className='border-2 border-black w-6/12 h-72 m-auto'></div>
   <div className='border-2 border-black w-6/12 h-72 m-auto'></div>
   </div>
   <div className='w-9/12 h-48 m-auto mt-4 border-2 border-black'>
   </div>
   <Footer/>
   </>
 )
}


export default inicio