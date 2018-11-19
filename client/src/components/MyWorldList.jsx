import React from "react";
import World from "./World"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const findUserWorlds =
  gql`
    query {
      allWorlds{
        id
        name
        description
      }
    }`;

function MyWorldList() {
  return (
    <div>
      <h2>Worlds</h2>
      <Query query={findAllWorlds}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.allWorlds.map(({ id, name, description }) => (
            <World key={id} id={id} name={name} description={description} />
          )));
        }}
      </Query>
    </div>
  );
}

export default MyWorldList;
