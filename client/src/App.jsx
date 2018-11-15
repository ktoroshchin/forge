import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import NavbarMain from './components/NavbarMain.jsx'
import HomePage from './components/HomePage.jsx'
import Login from './components/Login'
import Register from './components/Register'

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <NavbarMain />
        <Route exact path="/" component={HomePage}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  </ApolloProvider>
)

export default App;
