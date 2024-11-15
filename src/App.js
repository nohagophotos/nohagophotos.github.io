import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Contacto from './pages/contacto';
import Errorpage from './pages/errorpage';
import Portfolio from './pages/portfolio';
import Sobremi from './pages/sobremi';
import Tequiero from './pages/Tequiero';


function App() {
 return (
   <div>
     <Routes>
       <Route path="/nhp" element={<Inicio/>}/>
       <Route path="/contacto" element={<Contacto/>}/>
       <Route path="/portfolio" element={<Portfolio/>}/>
       <Route path="/sobremi" element={<Sobremi/>}/>
       <Route path="/tequiero" element={<Tequiero/>}/>
       <Route path="*" element={<Errorpage/>} />
     </Routes>
   </div>
 );
}


export default App;