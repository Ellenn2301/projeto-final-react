import React from "react";
import './Menu.css';
import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <nav>
           <ul className="listaMenu">
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
    )
};

export default Menu;