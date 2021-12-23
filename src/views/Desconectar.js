import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';
import { UsuarioContext } from '../context/UsuarioContext';

const Desconectar = () => {

    const { setRegistered, setUsuario, registered, usuario } = useContext(UsuarioContext);
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
                        </i>
                        
                    </div> 
                )
                : null
            }
        </>
    );
        
        
}
 
export default Desconectar;