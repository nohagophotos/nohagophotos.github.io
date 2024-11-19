import React from 'react';
import Navbar from '../components/Navbar';
import p1 from '../img/ESTUDIO/1.jpg';
import p2 from '../img/ESTUDIO/2.jpg';
import p3 from '../img/ESTUDIO/3.jpg';
import p4 from '../img/ESTUDIO/4.jpg';
import p5 from '../img/ESTUDIO/5.jpg';
import p6 from '../img/ESTUDIO/6.jpg';
import p7 from '../img/ESTUDIO/7.jpg';
import p8 from '../img/ESTUDIO/8.jpg';
import p9 from '../img/ESTUDIO/9.jpg';
import p10 from '../img/ESTUDIO/10.jpg';
import p11 from '../img/ESTUDIO/11.jpg';
import p12 from '../img/ESTUDIO/12.jpg';
import p13 from '../img/ESTUDIO/13.jpg';
import p14 from '../img/ESTUDIO/14.jpg';
import p15 from '../img/ESTUDIO/15.jpg';

const Estudio = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Estudio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
          <div className="relative w-full h-auto">
            <img src={p1} alt="ESTUDIO 1" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p2} alt="ESTUDIO 2" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p3} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p4} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p5} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p6} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p7} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p8} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p9} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p10} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p11} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p12} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p13} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p14} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p15} alt="ESTUDIO 3" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Estudio;