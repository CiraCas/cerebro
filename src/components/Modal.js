import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import { useHistory } from 'react-router-dom';

const Modal = ({ ruta }) => {
    
    const history = useHistory();
    const { mensaje, setMensaje } = useContext ( ModalContext );
    const cerrar = () => {
        setMensaje('');
        document.getElementById('ms').close();
        if(ruta){
            history.push(ruta);
        }
    }
    
    return ( 
        <dialog id="ms">
        <h4 className='red'>{mensaje}</h4>
        <button onClick={cerrar}>Ok!</button>
        </dialog> 
    );
}
 
export default Modal;