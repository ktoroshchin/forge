import React, {Component}  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Cookies from 'universal-cookie';

import './styles/App.css';

import NavbarMain from './components/NavBar/NavbarMain.jsx'
import Login from './components/NavBar/Login'
import Register from './components/NavBar/Register'
import CreateNewWorld from './components/NavBar/CreateNewWorld'

import DisplayWorldDetails from './components/WorldShow/DisplayWorldDetails'
import WorldMapSubmit from './components/WorldShow/WorldMapSubmit'
import ChooseCategoryToUpdate from './components/WorldShow/ChooseCategoryToUpdate'
import CreateNewCity from './components/WorldShow/CreateNewCity'

import HomePage from './components/HomePage.jsx'
import CustomMapExample from './components/BasicExample/CustomMapView'


const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})
const cookies = new Cookies();
const setUsername = function(username) {
  cookies.set('username', username, {path: '/'});
}
const setUserID = function(userID) {
  cookies.set('userID', userID, {path: '/'})
}
const deleteUser = function() {
  cookies.remove('username');
  cookies.remove('userID');
}
const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <NavbarMain cookies={cookies} deleteUser={deleteUser} />
        <Route exact path="/" component={HomePage} />
        <Route path="/login" render={() => <Login setUsername={setUsername} setUserID={setUserID} />} />
        <Route path="/register" render={() => <Register setUsername={setUsername} setUserID={setUserID} />} />
        <Route path="/custommap" component={CustomMapExample} />
        <Route path="/new-world" component={CreateNewWorld} />
        <Route path="/newworldmap" component={WorldMapSubmit} />
        <Route path="/world-show" component={DisplayWorldDetails} />
        <Route path="/update-category" component={ChooseCategoryToUpdate} />
        <Route path="/updatecity" component={CreateNewCity} />
      </div>
    </Router>
  </ApolloProvider>
)

export default App;
