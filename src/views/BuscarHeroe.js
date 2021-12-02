import React, {useEffect, useState} from 'react';
import Heroe from '../components/Heroe';
import { searchCall, simpleCall} from "../utils/calls"; 

const BuscarHeroe = () => {

  /* const [ letra, setLetra ] = useState('');
  const [ marvel, setMarvel ] = useState([]);
  const [ heroes, setHeroes ] = useState([]);
  console.log(heroes);

  //const{name} = marvel[0];
  
  useEffect(() => {
    simpleCall().then(
      result => {
        setMarvel(result.data);
      }
    ).catch(console.log);
  }, []) 

  const buscarHeroe = (e) => {
    setLetra(
      e.target.value
    )  
  }

  const filtrar = letra => {
    let resultado = [];
    marvel.forEach(heroe => {
      //debugger
      let nombre = heroe.name.toLowerCase();
      let letras = letra.toLowerCase();
      console.log( nombre.startsWith(letras));
      //let filtrado = heroes.filter(elemento => elemento.id !== heroe.id);
      //console.log(`filtro ${filtrado}`);
      if ( nombre.startsWith(letras)){
        resultado.push(heroe)
        // setHeroes([
          //...filtrado,
          //heroe
        //]) 
      } 
      
    });
    setHeroes([ 
      ...resultado
    ])

  }

  useEffect(() => {

      setHeroes([]);
    
      //if(letra !== ''){
        filtrar(letra);
      //}
    
  }, [letra]) */

  


  // ------------------------------------------Buscador en la api de Marvel-----------------------------------------------------

  const [letra, setLetra] = useState('a');

  let url = `https://localhost:44354/api/heroes/name/${letra}`

  //let url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${letra}&apikey=bcb5cdc12116ddeb6a2b6a25d072a121&ts=1234&hash=a1a6cbfa9fb2c207fa141966f0150269`;
  const [heroes, setHeroes] = useState([]);

  const buscarHeroe = (e) => {
    setLetra(
      e.target.value
    )  
  }

  useEffect(() => {
    searchCall(url).then(
      result => {
        //setHeroes(result.data.data.results)
        setHeroes(result.data)
      }
    ).catch(console.log);
  }, [letra, url]) 

  return ( 
    <>
      <input
        onChange={buscarHeroe}
        placeholder="Busca Heroe"
      />
        
      <div className="container grupos-fotos">
        {heroes.map(heroe=>(
          <Heroe
            key = {heroe.id}
            heroe = {heroe}
          />
        ))} 
      </div>
    </> 
  );
}
 
export default BuscarHeroe;