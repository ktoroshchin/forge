import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Jumbotron } from 'reactstrap'

import World from "./World"

export default function SearchWorldList({ location }) {
  const searchWorlds = gql`
    query ($name: String!){
      searchWorlds(name: $name) {
        id
        name
        description
        world_map {
          url
        }
      }
    }`;
  const name = location.state.search;
  return (
    <div className="container page">
      <h2 className="header default">Search</h2>
      <div>
        <Query query={searchWorlds} variables={{ name }}>
          {
            ({ loading, error, data }) => {
              if (loading) {
                return <div>Fetching</div>
              } else if (error) {
                return <div>Error</div>
              } else if (data.searchWorlds.length === 0) {
                  return <Jumbotron className="jumbotron default">No Worlds</Jumbotron>
              } else {
                return (data.searchWorlds.map(({ id, name, description, creator_id, world_map }) => (
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
}