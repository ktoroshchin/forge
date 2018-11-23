import React from "react";
import World from "./World"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const findAllWorlds =
  gql`
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

function WorldList() {
  return (
    <div>
      <Query query={findAllWorlds}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findWorlds.map(({ id, name, description, creator_id, world_map }) => (
            <World key={id} world_id={id} name={name} description={description} creator_id={creator_id} world_map={world_map} />
          )));
        }}
      </Query>
    </div>
  );
}

export default WorldList;
