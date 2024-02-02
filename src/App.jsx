import React from "react";
import Banner from "./componentes/Banner/banner";
import Footer from "./componentes/Footer/footer";
import { Route, Routes } from "react-router-dom";
import SobrePage from "./pages/SobrePage";

function App() {

  return (

        <div>

          <Banner />
          <Footer />
          <Routes>
            <Route path="/sobre" element={<SobrePage />}/>
          </Routes>

        </div>
       

  )
  

}

export default App
