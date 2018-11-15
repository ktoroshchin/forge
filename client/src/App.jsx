import React  from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import NavbarMain from './components/NavbarMain.jsx'
import Homepage from './components/homepage.jsx'
import login from './components/login.jsx'
import register from './components/register.jsx'
import BasicExample from './components/basic-example.jsx'

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <NavbarMain />
        <BasicExample />
        <Route exact path="/" component={Homepage}/>
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />

    </div>
    </Router>
  </ApolloProvider>
)

export default App;
