import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import World from "./World"

export default function SearchWorldList() {
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
  const name = "Ymir"
  return (
    <div>
      <Query query={searchWorlds} variables={{ name }}>
        {
          ({ loading, error, data }) => {
            if (loading) {
              return <div>Fetching</div>
            } else if (error) {
              return <div>Error</div>
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
  );
}
