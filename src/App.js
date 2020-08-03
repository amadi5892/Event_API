import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'
import Countrys from './components/Countrys'
import './App.css'





  
function App() {

    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul className="nav-bar">
                <li>
                  <Link  to="/home">Home</Link>
                </li>
                <li>
                  <Link  to="/country">Country</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home">
              <Home />
              </Route>
            <Route path="/country">
              <Countrys />
              </Route>
            <Route path="/wines">
              {/* <Wine /> */}
              </Route>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }

  
export default App;
