import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Cookies from 'universal-cookie';


import './styles/App.css';

import NavbarMain from './components/NavBar/NavbarMain.jsx'
import Login from './components/NavBar/Login'
import Register from './components/NavBar/Register'
import CreateNewWorld from './components/NavBar/CreateNewWorld'
import MyWorldList from './components/NavBar/MyWorldList'
import EditProfile from './components/NavBar/EditProfile'

import DisplayWorldDetails from './components/WorldShow/DisplayWorldDetails'
import EditMap from './components/WorldShow/MapDisplay/EditMap'

import HomePage from './components/HomePage.jsx'

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})
const cookies = new Cookies();

const getUserID = function() {
  return cookies.get('userID');
}
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

const App = () => {
  return (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <NavbarMain cookies={cookies} deleteUser={deleteUser} />
        <Route exact path="/" render={() => <HomePage getUserID={getUserID} />} />
        <Route path="/login" render={() => <Login setUsername={setUsername} setUserID={setUserID} getUserID={getUserID} />} />
        <Route path="/register" render={() => <Register setUsername={setUsername} setUserID={setUserID} getUserID={getUserID} />} />
        <Route path="/edit-profile" render={() => <EditProfile getUserID={getUserID} />} />
        <Route path="/new-world" render={() => <CreateNewWorld getUserID={getUserID} />} />
        <Route path="/world-show" component={DisplayWorldDetails} />
        <Route path="/my-worlds" render={() => <MyWorldList getUserID={getUserID} />} />
        <Route path="/edit-map" component={EditMap} />
      </div>
    </Router>
  </ApolloProvider>
)
}

export default App;
