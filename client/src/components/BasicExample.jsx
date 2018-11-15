import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
<<<<<<< HEAD:client/src/components/basic-example.jsx
import SimpleExample from './map-view'
import Homepage from './homepage'
import Login from './login'
import Register from './register'
import DisplayWorldDetails from './DisplayWorldDetails'
=======
import BasicMap from './BasicMap'
import HomePage from './HomePage'
import CustomMapExample from './CustomMapView.jsx'
>>>>>>> 2d955925df767f0c3c920590c4cf3ecad167cdb2:client/src/components/BasicExample.jsx

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
            <Link to="/custommap">Custom Map</Link>
          </li>
          <li>
            <Link to="/world">World Details</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Map} />
<<<<<<< HEAD:client/src/components/basic-example.jsx
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/world" component={DisplayWorldDetails} />

=======
        <Route path="/custommap" component={CustomMap} />
>>>>>>> 2d955925df767f0c3c920590c4cf3ecad167cdb2:client/src/components/BasicExample.jsx
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
    <div>
      <BasicMap />
    </div>
  );
}

function CustomMap() {
  return (
    <div>
      <CustomMapExample />
    </div>
  );
}

export default BasicExample;
