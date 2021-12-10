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
    return ( 
        <div
            className="alin-derecha"
        >
            
            <i 
            type="button"
            onClick={disconnect}
            className="fas fa-sign-out-alt">
            </i>
            
        </div> 
    );
        
        
}
 
export default Desconectar;