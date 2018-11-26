import React, { Component }from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Container, Col, Jumbotron, Button } from 'reactstrap'
import { Redirect } from 'react-router'
import Cookies from 'universal-cookie';

import World from "./World"

const cookies = new Cookies();

const getUserID = () => {
  return cookies.get('userID');
}

export default class SearchWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = (page) => {
    if (this.state.redirect) {
      if (page === 'all-worlds') {
        return <Redirect to='/' />
      } else {
        return <Redirect to='/my-worlds' />
      }
    }
  }

  render() {
    const {search, page} = this.props.location.state;
    const searchAllWorlds = gql`
      query ($name: String!){
        searchWorlds(name: $name) {
          id
          name
          description
          creator_id
          world_map {
            url
          }
        }
      }`;
    const searchMyWorlds = gql`
      query ($creator_id: ID, $name: String!){
        searchWorlds(creator_id: $creator_id, name: $name) {
          id
          name
          description
          creator_id
          world_map {
            url
          }
        }
      }`;
    if (page === 'all-worlds') {
      return (
        <Container>
          <Button onClick={()=>{this.setRedirect()}} color="success">Back</Button>
          <h1 className="header">Searching for "{search}"</h1>
          <div className="custom-row">
            <Query query={searchAllWorlds} variables={{ 'name': search }}>
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
          {this.renderRedirect(page)}
        </Container>
      );
    } else {
      return (
        <Container>
          <Button onClick={()=>{this.setRedirect()}} color="success">Back</Button>
          <h1 className="header">Searching for "{search}"</h1>
          <div className="custom-row">
            <Query query={searchMyWorlds} variables={{ 'name': search, 'creator_id': getUserID() }}>
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
          {this.renderRedirect(page)}
        </Container>
      );
    }
  }
}