import React, { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';

const Modal = ({ cerrar }) => {
    
    const { mensaje } = useContext ( ModalContext );

    return ( 
        <>
            <h4 className='red'>{mensaje}</h4>
            <button onClick={cerrar}>Ok!</button>
        </> 
    );
}
 
export default Modal;