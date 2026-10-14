import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './componentes/pages/home'
import Sobre from './componentes/pages/sobre';
import Contato from './componentes/pages/contato';
import Servicos from './componentes/pages/servicos';

function App() {

  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/servicos" element={<Servicos/>}/>
      </Routes>
    </>
    
  )
}

export default App
