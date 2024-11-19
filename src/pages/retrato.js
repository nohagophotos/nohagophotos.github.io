import React from 'react';
import Navbar from '../components/Navbar';
import p1 from '../img/RETRATO/1.jpeg';
import p2 from '../img/RETRATO/2.jpeg';
import p3 from '../img/RETRATO/3.jpeg';
import p4 from '../img/RETRATO/4.jpeg';
import p5 from '../img/RETRATO/5.jpeg';
import p6 from '../img/RETRATO/6.jpeg';
import p7 from '../img/RETRATO/7.jpeg';
import p8 from '../img/RETRATO/8.jpeg';
import p9 from '../img/RETRATO/9.jpeg';
import p10 from '../img/RETRATO/10.jpeg';
import p11 from '../img/RETRATO/11.jpeg';
import p12 from '../img/RETRATO/12.jpeg';
import p13 from '../img/RETRATO/13.jpeg';
import p14 from '../img/RETRATO/14.jpeg';
import p15 from '../img/RETRATO/15.jpeg';
import p16 from '../img/RETRATO/16.jpeg';
import p17 from '../img/RETRATO/17.jpeg';

const Retrato = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Retratos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2">
          <div className="relative w-full h-auto">
            <img src={p1} alt="Retrato 1" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p2} alt="Retrato 2" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p3} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p4} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p5} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p6} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p7} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p8} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p9} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p10} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p11} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p12} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p13} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p14} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p15} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p16} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p17} alt="Retrato 3" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Retrato;