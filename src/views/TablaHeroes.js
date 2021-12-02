import React, {useEffect, useState} from 'react';
import DataGrid from 'react-data-grid';
import {simpleCall} from "../utils/calls";

const TablaHeroes = () => {

  const [marvel, setMarvel] = useState([]);

  useEffect(() => {
    simpleCall().then(
      result => {
        setMarvel(result.data);
        //setMarvel(result.data.data.results);
      }
    ).catch(console.log);
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
     
  return ( <DataGrid columns={columns} rows={rows} /> );
}
 
export default TablaHeroes;