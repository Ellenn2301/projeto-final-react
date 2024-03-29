import React from "react";
import styles from './menu.module.css';
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <header className={styles.containerMenu}>
             <nav>
                <ul className={styles.listaMenu}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    
                    <li>
                        <Link to="/comentarios">Comentários</Link>
                    </li>
                    
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul> 
            </nav>
        </header>
       
    )
};

export default Menu;