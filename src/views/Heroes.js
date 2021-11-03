import React, {Fragment, useState, useEffect} from "react";
import axios from "axios";
//import {llamada} from "../utils/calls";
import Heroe from "../components/Heroe";


function Heroes() {
    
  //funcion consulta api.respuesta
    const [marvel, setMarvel] = useState([]);
    const [heroeMarvelView, setHeroeMarvelView] = useState([]);


    const llamada = () => {
      axios.get('https://gateway.marvel.com/v1/public/characters?apikey=bcb5cdc12116ddeb6a2b6a25d072a121&ts=1234&hash=a1a6cbfa9fb2c207fa141966f0150269')
      .then(
        result => {
          //console.log(result.data.data.results[0]);
          setMarvel(result.data.data.results)
        }
      )
      .catch(console.log)
    }

    useEffect(() => {
      /* let datos = llamada()
      debugger
      console.log(datos); */
      llamada()
    }, []) 

  //random heroe
    const randomHeroeMarvel = () => {
      const elementoAleatorio = Math.floor(Math.random()*(marvel.length));
      const heroe = marvel[elementoAleatorio];
      setHeroeMarvelView([
        ...heroeMarvelView,
        heroe
      ])
      marvel.splice(elementoAleatorio, 1);
    }

  //mostrar heroes
    /* const mostrarHeroesMarvel = () => {
      const arrayForEachHeroe = [];
      heroeMarvelView.forEach((heroe, i)=>{
        arrayForEachHeroe.push(
          <div className="grupo-foto" key={i}>
            <h2>{heroe.name}</h2>
            <img src={heroe.thumbnail.path+"/portrait_xlarge.jpg"} alt={heroe.name}/>
            <h3>{heroe.id}</h3>
            <p>{heroe.description}</p>
          </div>
        )
      }) 
      return(arrayForEachHeroe)
    } */

  //return
    return(
      <Fragment>

        {/* <div className="container grupos-fotos">{mostrarHeroesMarvel()}</div> */}
        <div className="container grupos-fotos">
          {heroeMarvelView.map(heroe=>(
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