import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Countrys from './components/Countrys';




class App extends React.Component {
  constructor() {
    super()

    this.state = {
      inputValue: '',
      searchSubmission: false,
    }
  }

  searchValue = (event) => {
    event.preventDefault()
    console.log('searched', event.target.value)
    this.setState({inputValue: event.target.value})
  }

  handleFormSubmission = (event) => {
    event.preventDefault()
    this.setState({searchSubmission: true})
    console.log('form submitted')
  }
  
  render() {

  

    return (
      <div className="App">
        <Router>
          <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
  
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li class="nav-item">
                  <Link to="/country" className="nav-link">Country</Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.searchValue} value={this.state.inputValue}></input>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onChange={this.handleFormSubmission} >Search</button>
                </form>
              </div>
            </nav>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/">
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
  
}

export default App;
