import React from "react";
import Menu from "./componentes/Menu/menu";
import Footer from "./componentes/Footer/footer";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import SobrePage from './pages/SobrePage/SobrePage';
import ComentariosPage from './pages/ComentariosPage/ComentariosPage';
import ContatoPage from './pages/ContatoPage/ContatoPage';



function App() {

  return (
      <div>
            <Menu />

            <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/sobre" element={<SobrePage />}/>
            <Route path="/comentarios" element={<ComentariosPage />}/>
            <Route path="/contato" element={<ContatoPage />}/>
            </Routes>

            <Footer />
            
        </div>
        
  )
  
}

export default App;
