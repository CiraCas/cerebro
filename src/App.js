import React, {Fragment, setState} from "react";
import Home from "./views/Home";
import Heroes from "./views/Heroes";
import BuscarHeroe from "./views/BuscarHeroe";
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/heroes">Heroes</Link>
              </li>
              <li>
                <Link to="/buscarheroe">Buscador</Link>
              </li>
            </ul>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/buscarheroe">
              <BuscarHeroe />
            </Route>
            <Route path="/heroes">
              <Heroes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }



export default App;
