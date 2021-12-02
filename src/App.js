import React from "react";
import Login from "./views/Login";
import Heroes from "./views/Heroes";
import BuscarHeroe from "./views/BuscarHeroe";
import TablaHeroes from "./views/TablaHeroes";
import InsertHeroe from "./views/InsertHeroe";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 

function App() {
  return (
      <Router>
        <div>
          <nav
            className = "footer"
          >
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/heroes">Heroes</Link>
              </li>
              <li>
                <Link to="/buscarheroe">Buscador</Link>
              </li>
              <li>
                <Link to="/tablaheroes">Tabla Heroes</Link>
              </li>
              <li>
                <Link to="/insertheroe">Agregar Heroe</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
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
        </div>
      </Router>
    );
  }



export default App;
