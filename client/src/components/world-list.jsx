import React from "react";
import World from "./world"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const findAllWorlds =
  gql`
    query {
      allWorlds{
        id
        name
        description
      }
    }`;


function WorldList() {
  return (
    <div>
      <h2>Worlds</h2>
      <Query query={findAllWorlds}>

    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>

      return (data.allWorlds.map(({ id, name, description }) => (
        <div key={id}>
          <p>{name}</p>
          <p> {description} </p>
        </div>
      )));
    }}
  </Query>
    </div>
  );
}

export default WorldList;
