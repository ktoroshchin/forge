import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Container, Col, Jumbotron } from 'reactstrap'

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
    <Container className="custom-container">
      <h1 className="header">Searching for "{name}"</h1>
      <div className="custom-row">
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
                return (data.searchWorlds.map(({ id, name, description, creator_id, world_map }) => {
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
      </div>
    </Container>
  );
}
