import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteCall } from "../../utils/calls";
import { NavegadorContext } from '../../context/NavegadorContext';
import { ModalContext } from '../../context/ModalContext';
import Modal from '../Modal';
import './Heroe.css';
const Heroe = ({ heroe, actualizarHeroes }) => {

    const history = useHistory();
    const { id } = heroe;
    const { setSelect } = useContext ( NavegadorContext );
    const { setMensaje } = useContext ( ModalContext );
    const [ eliminar, setEliminar ] = useState( false );

    useEffect(() => {
        
        if( eliminar === true ){
        
            deleteCall( id ).then(
                result => {
                    console.log( result.status );
                }
            ).catch(console.log); 
            setMensaje('Heroe eliminado');
            document.getElementById('ms').showModal();
            
        } 

    }, [ eliminar ])

    const borrar = () => {
        setEliminar( true );
        actualizarHeroes();
    }

    const modificar = id => {
        setSelect( 'agregar' );
        history.push( `/insertheroe/${id}` );
    }


    return ( 
        <div className="grupo-foto" key={heroe.id}>
            <div className="contenido">
                <h3>{heroe.name}</h3>
                <figure>
                    {/* <img src={heroe.thumbnail.path+"/portrait_xlarge.jpg"} alt={heroe.name}/> */}
                    <figcaption>Imagen de {heroe.name}</figcaption>
                </figure> 
                <h4>{heroe.id}</h4>
                <p title="Descripción de heroe">{heroe.description}</p>
            </div>
            <div className="botones">
                <button 
                    type="button"
                    className="boton"
                    onClick={borrar}
                >Eliminar</button>
                <button 
                    type="button"
                    className="boton"
                    onClick={() => modificar( id )}
                >Modificar</button>
            </div>
            <Modal/>
            
        </div>
    );
}
 
export default Heroe;