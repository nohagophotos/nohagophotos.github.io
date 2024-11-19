import React from 'react';
import Navbar from '../components/Navbar';
import p1 from '../img/URBANO/1.jpeg';
import p2 from '../img/URBANO/2.jpeg';
import p3 from '../img/URBANO/3.jpeg';
import p4 from '../img/URBANO/4.jpg';

const Urbano = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Urbano</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2">
          <div className="relative w-full h-auto">
            <img src={p1} alt="Urbano 1" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p2} alt="Urbano 2" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p3} alt="Urbano 3" className="object-cover w-full h-full rounded-lg" />
          </div>
          <div className="relative w-full h-auto">
            <img src={p4} alt="Urbano 3" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Urbano;