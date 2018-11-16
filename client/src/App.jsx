import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import NavbarMain from './components/NavbarMain.jsx'
import HomePage from './components/HomePage.jsx'
import Login from './components/Login'
import Register from './components/Register'
import CustomMapExample from './components/CustomMapView'
import CreateNewWorld from './components/CreateNewWorld'
import WorldMapSubmit from './components/WorldMapSubmit'
import DisplayWorldDetails from './components/DisplayWorldDetails'
import CreateNewCity from './components/CreateNewCity'
import ChooseCategoryToUpdate from './components/ChooseCategoryToUpdate'
import Cookies from 'universal-cookie';


const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})
const cookies = new Cookies();
const addUserID = function() {
  cookies.set('userID', 'Pacman', { path: '/' });
}
const deleteUserID = function() {
  cookies.remove('userID');
}
const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <NavbarMain cookies={cookies} addUserID={addUserID} deleteUserID={deleteUserID} />
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
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
