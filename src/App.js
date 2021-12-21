import Ruta from "./components/router";
import ErrorProvider from "./context/ErrorContext";

/* import Login from "./views/Login";
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
  Route
} from "react-router-dom";  */

import UsuarioProvider from "./context/UsuarioContext";


function App() {


  return (
    <UsuarioProvider>
      <ErrorProvider>
        <Ruta/>
        {/* <Router>
          <div
            className="bo-flex-container"
          >
          
              <Navegador/>
            
              
            <section
              className="bo-main"
            >
              <Desconectar/>
              <Switch>
                <Route path="/insertuser">
                  <InsertUser />
                </Route>
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
            </section>
          </div>
          
          
        </Router> */}
      </ErrorProvider>
    </UsuarioProvider>
  );
}



export default App;
