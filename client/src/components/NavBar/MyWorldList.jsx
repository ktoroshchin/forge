import React from "react";
import World from "../World"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

function MyWorldList({getUserID}) {
  const userID = getUserID();
  const findUserWorlds =
  gql`
    query {
      findWorlds(creator_id: "${userID}") {
        id
        name
        description
        creator_id
      }
    }`;
  if (userID) {
    return (
      <div className="container text-center">
        <h2>My Worlds</h2>
        <Query query={findUserWorlds}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            if (data.findWorlds.length === 0) return <div>No Worlds</div>
            return (data.findWorlds.map(({ id, name, description, creator_id }) => (
              <World key={id} world_id={id} name={name} description={description} creator_id={creator_id} />
            )));
          }}
        </Query>
      </div>
    );
  } else {
    return <Redirect to='/login' />
  }
}

export default MyWorldList;
