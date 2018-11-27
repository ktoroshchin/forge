import React, { Component } from "react";
import World from "../World"
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router'
import { Link } from "react-router-dom";
import { Container, Col, Button } from 'reactstrap'

import SearchBar from "./SearchBar"

export default class MyWorldList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const userID = this.props.getUserID();
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
            <SearchBar page="my-worlds"/>
            <Query query={findUserWorlds}>
              {
                ({ loading, error, data }) => {
                  if (loading) {
                    return <div>Fetching</div>
                  } else if (error) {
                    return <div>Error</div>
                  } else if (data.findWorlds.length === 0) {
                    return (
                      <div>
                        <h2>No Worlds</h2>
                        <Link to="/new-world">
                          <Button color='primary'>Create A New World</Button>
                        </Link>
                      </div>
                    )
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
                        <Col key={id} sm="6" lg="4" className="portfolio-item mb-3">
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
}
