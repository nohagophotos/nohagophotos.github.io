import React from 'react'
import Navbar from '../components/Navbar'


const contacto = () => {
   return (
       <>
           <Navbar/>
           <div className='w-9/12 h-96 m-auto mt-6 flex'>
           <div className='border-2 border-black w-6/12 h-auto m-auto flex flex-col'>
           <p>instagram: nhpproductions</p>
           <p>gmail: nohagophotos@gmail.com</p>
           <p>teléfono:621206207</p>
           <div className='border-2 border-black h-8 mt-4'></div>
           <div className='border-2 border-black h-12 mt-4'></div>
           <div className='border-2 border-black h-36 mt-4'></div>
           </div>
           <div className='border-2 border-black w-6/12 h-full m-auto flex flex-col'>
           </div>
           </div>
       </>
   )
}


export default contacto