import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import SimpleExample from './map-view.js'
import CustomMapExample from './custom-map-view.js'

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

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Map} />
        <Route path="/custommap" component={CustomMap} />
      </div>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
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
      <SimpleExample />
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
