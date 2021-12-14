import React, { useContext } from 'react';
import Desconectar from './Desconectar';
import { Link } from "react-router-dom";
import { UsuarioContext } from '../context/UsuarioContext';


const Navegador = () => {

    const { registered } = useContext(UsuarioContext);

    
    return ( 
      <>
        {registered
          ?
          (
            <div 
              className = "header"
            >
              <Desconectar
              />
            
              <nav className="container">
                  <ul className='navegacion'>
                  
                      <>
                          <li
                           tabIndex="0"
                          >
                              <Link to="/heroes">Heroes</Link>
                          </li>
                          <li
                            tabIndex="1"
                          >
                              <Link to="/buscarheroe">Buscador</Link>
                          </li>
                          <li>
                              <Link to="/tablaheroes">Tabla Heroes</Link>
                          </li>
                          <li>
                              <Link to="/insertheroe">Agregar Heroe</Link>
                          </li>
                          </>
                     
                
                    
                  </ul>
              </nav>
              
            </div>
          )
          : null
        }
      </>

     );
}
 
export default Navegador;