import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { UsuarioContext } from '../../context/UsuarioContext';
import { NavegadorContext } from '../../context/NavegadorContext';
import logoMarvel from '../../img/Marvel-Logo.png';
import './Navegador.css';

const Navegador = () => {

  const { registered } = useContext(UsuarioContext);
  const { setSelect, select } = useContext ( NavegadorContext );

  return ( 
    <>
      {registered
        ?
        (
          <aside className="aside">
            <div className="logo">
              <img className="logo" src={logoMarvel} alt="logo Marvel"/>
            </div>
          
            <nav>
                <ul className="menu-navigation">
                
                  <li>
                      <Link 
                        onClick={() => setSelect('heroes')}
                        className={select === 'heroes'
                        ? 'select'
                        : 'no-select' }
                        to="/heroes"
                      >Heroes</Link>
                  </li>
                  <li>
                      <Link 
                        onClick={() => setSelect('buscador')}
                        className={select === 'buscador'
                        ? 'select'
                        : 'no-select' }
                        to="/buscarheroe"
                      >Buscador</Link>
                  </li>
                  <li>
                      <Link 
                        onClick={() => setSelect('tabla')}
                        className={select === 'tabla'
                        ? 'select'
                        : 'no-select' }
                        to="/tablaheroes"
                      >Tabla Heroes</Link>
                  </li>
                  <li>
                      <Link 
                        onClick={() => setSelect('agregar')}
                        className={select === 'agregar'
                        ? 'select'
                        : 'no-select' }
                        to="/insertheroe/null"
                      >Agregar Heroe</Link>
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