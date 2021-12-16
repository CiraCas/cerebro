import React, { useContext } from 'react';

import { Link } from "react-router-dom";
import { UsuarioContext } from '../context/UsuarioContext';


const Navegador = () => {

    const { registered } = useContext(UsuarioContext);

    
    return ( 
      <>
        {registered
          ?
          (
            <aside className="bo-aside">
            
              <nav>
                  <ul className="menu-navigation navegacion">
                  
                    <li>
                        <Link to="/heroes">Heroes</Link>
                    </li>
                    <li>
                        <Link to="/buscarheroe">Buscador</Link>
                    </li>
                    <li>
                        <Link to="/tablaheroes">Tabla Heroes</Link>
                    </li>
                    <li>
                        <Link to="/insertheroe">Agregar Heroe</Link>
                    </li>
                          
                  </ul>
                  
              </nav>
              
            
            </aside>
          )
          : 
          null
        }
      </>

     );
}
 
export default Navegador;