import React, { useContext } from 'react';
import Login from "./views/Login";
import Heroes from "./views/Heroes";
import BuscarHeroe from "./views/BuscarHeroe";
import TablaHeroes from "./views/TablaHeroes";
import InsertHeroe from "./views/InsertHeroe";
import Navegador from "./views/Navegador";
import InsertUser from "./views/InsertUser";
import Desconectar from "./views/Desconectar";

import { 
    BrowserRouter as Router,
    Switch,
    Route } from "react-router-dom";
import { UsuarioContext } from './context/UsuarioContext';

const Ruta = () => {
    const { registered } = useContext(UsuarioContext);


    return ( <Router>
        {registered
          ?
          (
            <div
            className="flex-container"
            >
            
                <Navegador/>
            
                
            <section
                className="main"
            >
                <Desconectar/>
                <Switch>
                
                    <Route path="/insertheroe">
                        <InsertHeroe />
                    </Route>
                    <Route path="/tablaheroes">
                        <TablaHeroes />
                    </Route>
                    <Route path="/buscarheroe">
                        <BuscarHeroe />
                    </Route>
                    <Route path="/heroes">
                        <Heroes />
                    </Route>
                </Switch>
            </section>
            </div>
          )
          : 
          (
            <Switch>
                <Route path="/insertuser">
                    <InsertUser />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
          )
        }
        
        
      </Router> );
}
 
export default Ruta;