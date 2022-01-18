import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from '../../context/UsuarioContext';
import {simpleCall} from "../../utils/calls";
import Heroe from "../../components/Heroe";
import './Heroes.css';



function Heroes() {
    
  const [marvel, setMarvel] = useState([]);
  const [heroeMarvelView, setHeroeMarvelView] = useState([]);
  const [actualizar, setActualizar] = useState('false');
  const { registered } = useContext(UsuarioContext);
  const history = useHistory();

  const actualizarHeroes = () => {
    setActualizar( 'true' );
  }

  useEffect(() => {
    if(!registered){
      history.push('/')
  
    }else{
      simpleCall().then(
      result => {
        setMarvel(result.data)
        //setMarvel(result.data.data.results)
      }
    ).catch(console.log);
    }
    
  }, [actualizar]) 

  const randomHeroeMarvel = () => {
    const elementoAleatorio = Math.floor(Math.random()*(marvel.length));
    const heroe = marvel[elementoAleatorio];
    setHeroeMarvelView([
      ...heroeMarvelView,
      heroe
    ])
    marvel.splice(elementoAleatorio, 1);
  }
  
  
  return(
    <main className="container heroes">

      <h1 className="centrar">Heroes</h1>

      {
        marvel.length === 0 
        ? 
        (
          <p>No hay más heroes</p>
        ) 
        : 
        (
          <div >
            <button
              onClick={randomHeroeMarvel}
              id="boton"
              className="boton"
            >Añadir heroe
            </button>
          </div>
        )
      }

      <div className="grupos-fotos">
       
        {heroeMarvelView.map( heroe => (
          <Heroe
            key = {heroe.id}
            heroe = {heroe}
            actualizarHeroes = {actualizarHeroes}
          />
        ))}
      </div>

    </main>
  )
  
}

export default Heroes;