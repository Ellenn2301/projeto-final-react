import React from "react";
import Menu from "./componentes/Menu/menu";
import Footer from "./componentes/Footer/footer";
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';


function App() {

  return (
      <div>
            <Menu />

            <Routes>
            <Route path="/" element={<HomePage />}/>
            </Routes>

            <Footer />
            
        </div>
        
  )
  
}

export default App;
