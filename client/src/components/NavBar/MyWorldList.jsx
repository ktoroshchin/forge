import React from "react";
import World from "../World"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

function MyWorldList({getUserID}) {
  const userID = getUserID();
  const findUserWorlds =
  gql`
    query {
      findWorldsByCreatorId(creator_id: "${userID}") {
        id
        name
        description
      }
    }`;
  return (
    <div>
      <h2>My Worlds</h2>
      <Query query={findUserWorlds}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findWorldsByCreatorId.map(({ id, name, description }) => (
            <World key={id} id={id} name={name} description={description} />
          )));
        }}
      </Query>
    </div>
  );
}

export default MyWorldList;
