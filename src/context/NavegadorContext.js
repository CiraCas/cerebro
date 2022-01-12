import React, { createContext, useState} from 'react';


export const NavegadorContext = createContext();

const NavegadorProvider = (props) => {

     
    const [select, setSelect] = useState('heroes');

    return ( 
        <NavegadorContext.Provider
            value={{
                setSelect,
                select
            }}
        >
            {props.children}
        </NavegadorContext.Provider>
     );
}
 
export default NavegadorProvider;