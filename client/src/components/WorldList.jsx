import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Col } from "reactstrap";


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
            return (data.findWorlds.map(({ id, name, description, creator_id, world_map }) => {
                let worldDesc = ""
                if (description) {
                  if (description.length <= 200) {
                    worldDesc = description
                  } else {
                    worldDesc = description.slice(0, 199) + "..."
                  }
                } else {
                  worldDesc = null
                }

                return (
                  <Col key={id} sm="6" lg="4" className="portfolio-item">
                    <World
                      world_id={id}
                      name={name}
                      description={worldDesc}
                      creator_id={creator_id}
                      world_map={world_map}
                    />
                  </Col>
                )
            }));
          }
        }
      }
    </Query>
  );
}
