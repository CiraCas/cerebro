import React from "react";
import Login from "./views/Login";
import Heroes from "./views/Heroes";
import BuscarHeroe from "./views/BuscarHeroe";
import TablaHeroes from "./views/TablaHeroes";
import InsertHeroe from "./views/InsertHeroe";
import Navegador from "./views/Navegador";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; 

import UsuarioProvider from "./context/UsuarioContext";

function App() {

  return (
    <UsuarioProvider>
      <Router>

        <Navegador/>
          
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
          <Route path="/">
            <Login />
          </Route>
        </Switch>
        
      </Router>
    </UsuarioProvider>
  );
}



export default App;
