import React, { Component }from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Container, Col, Jumbotron, Button } from 'reactstrap'
import { Redirect } from 'react-router'

import World from "./World"

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
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  render() {
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
    const {search} = this.props.location.state;
    return (
      <Container>
        <Button onClick={()=>{this.setRedirect()}} color="success">Back</Button>
        <h1 className="my-4 text-center">Searching for "{search}"</h1>
        <div className="custom-row">
          <Query query={searchWorlds} variables={{ 'name': search }}>
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
        {this.renderRedirect()}
      </Container>
    );
  }
}
