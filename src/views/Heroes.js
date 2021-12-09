import React, { useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioContext';
import {simpleCall} from "../utils/calls";
import Heroe from "../components/Heroe";



function Heroes() {
    
  const [marvel, setMarvel] = useState([]);
  const [heroeMarvelView, setHeroeMarvelView] = useState([]);
  const { registered } = useContext(UsuarioContext);
  const history = useHistory();

  

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
    
  }, []) 

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
    <>
      
      <div className="container grupos-fotos">
        {heroeMarvelView.map( heroe => (
          <Heroe
            key = {heroe.id}
            heroe = {heroe}
          />
        ))}
      </div>

      {
        marvel.length === 0 ? (
          <p>No hay más heroes</p>
        ) : (
          <button
            onClick={randomHeroeMarvel}
            id="boton"
          >Añadir heroe</button>
        )
      }
    </>
  )
  
}

export default Heroes;