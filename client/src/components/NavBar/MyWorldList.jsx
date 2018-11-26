import React from "react";
import World from "../World"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router'
import {Jumbotron} from 'reactstrap'

export default function MyWorldList({ getUserID }) {
  const userID = getUserID();
  const findUserWorlds = gql`
    query {
      findWorlds(creator_id: "${userID}") {
        id
        name
        description
        creator_id
        world_map {
          url
        }
      }
    }`;

  if (userID) {
    return (
      <div className="container page">
        <h2 className="header default">My Worlds</h2>
        <div className="info">
          <Query query={findUserWorlds}>
            {
              ({ loading, error, data }) => {
                if (loading) {
                  return <div>Fetching</div>
                } else if (error) {
                  return <div>Error</div>
                } else if (data.findWorlds.length === 0) {
                  return <Jumbotron className="jumbotron default">No Worlds</Jumbotron>
                } else {
                  return (data.findWorlds.map(({ id, name, description, creator_id, world_map }) => (
                    <World
                      key={id}
                      world_id={id}
                      name={name}
                      description={description}
                      creator_id={creator_id}
                      world_map={world_map}
                    />
                  )));
                }
              }
            }
          </Query>
        </div>
      </div>
    );
  } else {
    return <Redirect to='/login' />
  }
}
