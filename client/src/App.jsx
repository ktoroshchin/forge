import React, { Fragment } from 'react';
import './styles/App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BasicExample from './components/basic-example'

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const App = () => (
  <ApolloProvider client={client}>
    <Fragment>
      Forge Project
    </Fragment>
    <BasicExample />
  </ApolloProvider>
)

export default App;