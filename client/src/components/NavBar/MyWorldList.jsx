import React from "react";
import World from "../World"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router'
import { Container, Col, Jumbotron } from 'reactstrap'

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
      <Container className="custom-container">
        <h1 className="header">My Worlds</h1>
        <div className="custom-row">
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
                  return (data.findWorlds.map(({ id, name, description, creator_id, world_map }) => {
                    let worldDesc = ""

                    if (description.length <= 200) {
                      worldDesc = description
                    } else {
                      worldDesc = description.slice(0, 199) + "..."
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
  } else {
    return <Redirect to='/login' />
  }
}
