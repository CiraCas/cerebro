import React, {useEffect, useState} from 'react';
import Heroe from '../components/Heroe';
import axios from 'axios';


const BuscarHeroe = () => {
    const [letra, setLetra] = useState('a');
    let url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${letra}&apikey=bcb5cdc12116ddeb6a2b6a25d072a121&ts=1234&hash=a1a6cbfa9fb2c207fa141966f0150269`;
    const [heroes, setHeroes] = useState([]);

    const buscarHeroe = (e) => {
      setLetra(
        e.target.value
      )  
    }

    const llamada = ()=>{
      axios.get(url)
      .then(
        result => {
          setHeroes(result.data.data.results);
        }
      )
      .catch(console.log)
    }

    useEffect(() => {
      llamada()
    }, [letra])

    //mostrar heroes
      /* const mostrarHeroes = () =>{
        const arrayForEachHeroe = [];
        //debugger
        heroes.forEach((heroe, i)=>{
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
    return ( 
        <>
            <input
                onChange={buscarHeroe}
                placeholder="Busca Heroe"
            />
            {/* <div className="container grupos-fotos">{mostrarHeroes()}</div> */}
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