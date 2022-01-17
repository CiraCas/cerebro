import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioContext';
import { NavegadorContext } from "../context/NavegadorContext";

const Desconectar = () => {

    const { setRegistered, setUsuario, registered, usuario } = useContext( UsuarioContext );
    const { setSelect } = useContext ( NavegadorContext );
    const history = useHistory();

    const disconnect = () => {

        
        setUsuario({
            name: '',
            password: ''
        });
        setSelect ( 'heroes' );
        setRegistered(false);
        history.push('/');

    }
    return ( 
        <>
            {registered
                ?
                (
                    <div className="alin-derecha">
                        <h3>Hola {usuario.name}</h3>
                        <i 
                            type="button"
                            onClick={disconnect}
                            className="fas fa-sign-out-alt">
                            <p className="fas-p">Desconectar</p>
                        </i>           
                    </div> 
                )
                : null
            }
        </>
    );
        
        
}
 
export default Desconectar;