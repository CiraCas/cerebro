import React, { createContext, useState} from 'react';


export const ModalContext = createContext();

const ModalProvider = (props) => {
     
    const [mensaje, setMensaje] = useState('');

    return ( 
        <ModalContext.Provider
            value={{
                setMensaje,
                mensaje,
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;