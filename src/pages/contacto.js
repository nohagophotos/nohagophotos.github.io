import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import p11 from '../img/IMG_0088.jpg'


const contacto = () => {
   return (
       <>
           <Navbar/>
           <div className='w-9/12 h-96 m-auto mt-6 flex mb-64'>
           <div className='border-2 border-black w-6/12 h-auto m-auto flex flex-col'>
           <p>instagram: nhpproductions</p>
           <p>gmail: nohagophotos@gmail.com</p>
           <p>teléfono:621206207</p>
           <div className='border-2 border-black h-8 mt-4'></div>
           <div className='border-2 border-black h-12 mt-4'></div>
           <div className='border-2 border-black h-36 mt-4'></div>
           </div>
           <div className='border-2 border-black w-4/12 m-auto flex flex-col'>
           <img src={p11} className='object-cover w-full h-full '/>
           </div>
           </div>
           <Footer/>
       </>
   )
}


export default contacto