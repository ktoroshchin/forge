import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './styles/App.css';
import HomePage from './components/HomePage.jsx'
import NavbarMain from './components/NavBar/NavbarMain.jsx'
import Login from './components/NavBar/Login'
import Register from './components/NavBar/Register'
import EditProfile from './components/NavBar/EditProfile'
import CreateNewWorld from './components/NavBar/CreateNewWorld'
import MyWorldList from './components/NavBar/MyWorldList'
import DisplayWorldDetails from './components/WorldShow/DisplayWorldDetails'
import EditMap from './components/WorldShow/MapDisplay/EditMap'
import Cookies from 'universal-cookie';

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
          <Route exact path="/" render={() => <HomePage getUserID={getUserID} />} />
          <NavbarMain cookies={cookies} deleteUser={deleteUser} />
          <Route path="/login" render={() => <Login setUsername={setUsername} setUserID={setUserID} getUserID={getUserID} />} />
          <Route path="/register" render={() => <Register setUsername={setUsername} setUserID={setUserID} getUserID={getUserID} />} />
          <Route path="/edit-profile" render={() => <EditProfile getUserID={getUserID} />} />
          <Route path="/new-world" render={() => <CreateNewWorld getUserID={getUserID} />} />
          <Route path="/my-worlds" render={() => <MyWorldList getUserID={getUserID} />} />
          <Route path="/world-show" component={DisplayWorldDetails} />
          <Route path="/edit-map" component={EditMap} />
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App;