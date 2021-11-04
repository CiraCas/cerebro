import React, {Fragment, useState, useEffect} from "react";
import {simpleCall} from "../utils/calls";
import Heroe from "../components/Heroe";

function Heroes() {
    
  const [marvel, setMarvel] = useState([]);
  const [heroeMarvelView, setHeroeMarvelView] = useState([]);

  useEffect(() => {
    simpleCall().then(
      result => {
        console.log(result.data.data.results[3]);
        setMarvel(result.data.data.results)
      }
    ).catch(console.log);
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
    <Fragment>

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
    </Fragment>
  )
  
}

export default Heroes;