import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/inicio';
import Contacto from './pages/contacto';
import Errorpage from './pages/errorpage';
import Portfolio from './pages/portfolio';
import Sobremi from './pages/sobremi';
import Tequiero from './pages/Tequiero';
import Urbano from './pages/urbano';
import Bodas from './pages/bodas';
import Retrato from './pages/retrato';
import Estudio from './pages/estudio';

function App() {
 return (
   <div>
     <Routes>
       <Route path="/" element={<Inicio/>}/>
       <Route path="/contacto" element={<Contacto/>}/>
       <Route path="/portfolio" element={<Portfolio/>}/>
       <Route path="/sobremi" element={<Sobremi/>}/>
       <Route path="/tequiero" element={<Tequiero/>}/>
       <Route path="*" element={<Errorpage/>} />
       <Route path="/bodas" element={<Bodas/>}/>
       <Route path="/retrato" element={<Retrato/>}/>
       <Route path="/estudio" element={<Estudio/>}/>
       <Route path="/urbano" element={<Urbano/>}/>
     </Routes>
   </div>
 );
}


export default App;