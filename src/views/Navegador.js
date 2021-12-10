import React, { useContext } from 'react';
import Desconectar from './Desconectar';
import { Link } from "react-router-dom";
import { UsuarioContext } from '../context/UsuarioContext';


const Navegador = () => {

    const { registered } = useContext(UsuarioContext);

    
    return ( 
      <div 
        className = "header"
      >
        {registered
        ?
          <Desconectar
          />
        : null
        }
        <nav className="container">
            <ul className='navegacion'>
              
              {registered
              ? 
              (
                <>
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
                    </>
                )
              : 
                <li>
                    <Link to="/">Login</Link>
                </li>
              }
              
            </ul>
        </nav>
        
      </div>
     );
}
 
export default Navegador;