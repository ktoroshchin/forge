import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import World from "./World"

export default function WorldList() {
  const findAllWorlds = gql`
    query {
      findWorlds{
        id
        name
        description
        creator_id
        world_map {
          url
        }
      }
    }`;
  return (
    <Query query={findAllWorlds}>
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
  );
}
