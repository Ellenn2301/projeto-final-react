import React, { useState } from "react";
import './ComentariosPage.css';

const ComentariosPage = () => {

    return (
        <>
            <div className="container ">
                <header className="inicioComentarios">
                    <h3 className="tituloComentarios">
                        Deixe um comentário
                    </h3>
                    <img className="imagemComentarios" src="/imagens/comentariosImg.svg" alt="Ilustração de uma mulher negra enviando mensagens." />
                </header>
            </div>

            <div className="containerComentarios">
                <input className="coments"
                type="text" 
                placeholder="Aceitamos sugestões, elogios, críticas construtivas."
                />

                <button className="buttonComents" type="submit">Enviar</button>
  
            </div>
                
        </>
    )
};

export default ComentariosPage;