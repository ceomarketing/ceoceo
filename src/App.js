import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './App.css';
import logo from './logo.svg';

import Home from "./components/Home";
import About from "./components/About";
import People from "./components/People";
import Programs from './components/Programs';
import Corporate from './components/Corporate';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <div className="header">
              <img src={logo} width="50" height="50" alt="Logo" />
              <ul className="headerMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/people">People</NavLink></li>
                  
                <li><NavLink to="/programs">Programs</NavLink></li>
                <li><NavLink to="/corporate">Corporate</NavLink></li> 
              </ul>
              <ul className="headerUser">
                <li className="login"><NavLink to="/register">Login</NavLink></li>
                <li className="register"><NavLink to="/register">Register</NavLink></li>    
              </ul>      
            </div>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/people" component={People}/>
              <Route path="/programs" component={Programs}/>
              <Route path="/corporate" component={Corporate}/>
              <Route path="/register" component={Register}/>
            </div>
            <Footer />
          </div>
        </HashRouter>
    );
  }
}

export default App;


