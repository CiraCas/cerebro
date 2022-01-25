import React, {useEffect, useState, useContext} from 'react';
import DataGrid from 'react-data-grid';
import {simpleCall} from "../utils/calls";
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioContext';

const TablaHeroes = () => {

  const [ marvel, setMarvel ] = useState([]);

  const { registered } = useContext(UsuarioContext);
  const history = useHistory();

  useEffect(() => {
    if(!registered){
      history.push('/')
  
    }else{
      simpleCall().then(
        result => {
          setMarvel(result.data);
          //setMarvel(result.data.data.results);
        }
      ).catch(console.log);
    }
    
  }, []) 

  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'nombre', name: 'Nombre' },
    { key: 'descripcion', name: 'Descripción' }
  ];
  
  const rows = [];
  
  marvel.forEach((heroe, i)=>{
    rows.push(
      {id: `${heroe.id}`, nombre: `${heroe.name}`, descripcion: `${heroe.description}`}
    )
    return rows
  }) 
     
  return ( 
    <main
      className='centrar container'
    >
      <h2>Tabla Heroes</h2> 
          
      <DataGrid columns={columns} rows={rows} /> 
    </main>
  );
}
 
export default TablaHeroes;