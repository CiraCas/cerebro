import React, { createContext, useState} from 'react';


export const UsuarioContext = createContext();

const UsuarioProvider = (props) => {

    const [usuario, setUsuario] = useState({
        name: '',
        password: ''
    });
    const [ usuSearch, setUsuSearch ] = useState([]);
    const [ registered, setRegistered ] = useState(false)

    return ( 
        <UsuarioContext.Provider
            value={{
                setUsuario,
                setUsuSearch,
                setRegistered,
                registered,
                usuSearch,
                usuario,
            }}
        >
            {props.children}
        </UsuarioContext.Provider>
     );
}
export default UsuarioProvider;