import React from "react";
import './ComentariosPage.css';

const ComentariosPage = () => {
    return (
        <>
        <div className="containerComentarios ">
                <header className="inicioComentarios">
                    <h3 className="tituloComentarios">
                        Deixe um comentário
                    </h3>
                    <img className="imagemComentarios" src="/imagens/comentariosImg.svg" alt="Ilustração de uma mulher negra enviando mensagens." />
                </header>
            </div>

            <div>
                <input 
                type="text" 
                placeholder="Digite aqui..."
                />
            </div>
                
        </>
    )
};

export default ComentariosPage;