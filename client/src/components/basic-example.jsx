import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SimpleExample from './map-view'
import Homepage from './homepage'
import Login from './login'
import Register from './register'
import DisplayWorldDetails from './DisplayWorldDetails'

function BasicExample() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/world">World Details</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Map} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/world" component={DisplayWorldDetails} />

      </div>
    </BrowserRouter>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Map() {
  return (
    <div id="map">
      <SimpleExample />
    </div>
  );
}


export default BasicExample;
