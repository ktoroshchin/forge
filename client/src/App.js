import React, { Fragment } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const App = () => (
  <ApolloProvider client={client}>
    <Fragment>
      Forge Project
    </Fragment>
  </ApolloProvider>
)

export default App;
