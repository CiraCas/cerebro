import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioContext';

const Desconectar = () => {

    const { setRegistered, setUsuario } = useContext(UsuarioContext);
    const history = useHistory();

    const disconnect = () => {
        setRegistered(false);
        setUsuario({
            name: '',
            password: ''
        });
        history.push('/');


    }
    return ( <button 
        type="button"
        onClick={disconnect}
      >Desconectar</button> );
}
 
export default Desconectar;