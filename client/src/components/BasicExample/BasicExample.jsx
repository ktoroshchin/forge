import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import BasicMap from './BasicMap'
import HomePage from './HomePage'
import CustomMapExample from './CustomMapView.jsx'

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
        </ul>
        <hr />
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Map} />
        <Route path="/custommap" component={CustomMap} />
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
