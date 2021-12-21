import React, { createContext, useState} from 'react';


export const ErrorContext = createContext();

const ErrorProvider = (props) => {

     
    const [msgError, setMsgError] = useState('');

    return ( 
        <ErrorContext.Provider
            value={{
                setMsgError,
                msgError
            }}
        >
            {props.children}
        </ErrorContext.Provider>
     );
}
 
export default ErrorProvider;