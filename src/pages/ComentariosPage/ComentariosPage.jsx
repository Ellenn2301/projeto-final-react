import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './comentarios.module.css';

const ComentariosPage = () => {

    const getLocalList = () => {
        let items = localStorage.getItem('lista')

        if (items) {
            return JSON.parse(items)
          } else {
            return []
          }
        }

    const [comentario, setComentario] = useState('');
    const [lista, setLista] = useState(getLocalList);

      
    useEffect(() => {
        localStorage.setItem('lista', JSON.stringify(lista))
      }, [lista])

    function handleChangeComentarios (event){
        setComentario(event.target.value);
    }

    function handleSubmit () {

        if(comentario){
            setLista([...lista, {index: uuidv4(), comentario}])
        }
    }

    return (
        <>
            <div className={styles.container}>
                <header className={styles.inicioComentarios}>
                    <h3 className={styles.tituloComentarios}>
                        Deixe um comentário
                    </h3>
                    <img className={styles.imagemComentarios} src="/imagens/comentariosImg.svg" alt="Ilustração de uma mulher negra enviando mensagens." />
                </header>
            </div>

            <div className={styles.containerComentarios}>
                <input className={styles.coments}
                type="text" 
                placeholder="Aceitamos sugestões, elogios, críticas construtivas."
                onChange={handleChangeComentarios}
                value={comentario}
                />

                <button className={styles.buttonComents} type="submit" onClick={handleSubmit}>Enviar</button>
            </div>

            <ul>
                {lista.map( (value) => {
                    return(
                    <li key={value.index} className={styles.listaComentarios}>
                        {value.comentario}
                    </li>)
                     } )}
            </ul>
                
        </>
    )
};

export default ComentariosPage;