import React, { Component } from 'react';
import { ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class ChooseElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  select = (event) => {
    this.setState({
      value: event.target.value,
    })
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        alert("Issue with marker creation!")
      })
  }

  render = () => {
    const { coords: {lat, lng}, worldID, mapID, eleCategory } = this.props
    const listElements = gql`
      query{
        findMarkers(world_id:"${worldID}"){
          id
          category
          name
          map_id
        }
      }`;
    const POST_MUTATION = gql`
      mutation (
        $id: ID!,
        $map_id: ID!,
        $latitude: Float!,
        $longitude: Float!){
        placeMarkerOnMap(
          id: $id,
          map_id: $map_id,
          latitude: $latitude,
          longitude: $longitude){
          id
        }
      }`

    return (
      <div>
        <FormGroup>
          <Label for="categorySelect">Choose a {eleCategory}...</Label>
          <Input onChange={this.select} type="select" name="select" id="categorySelect">
            <option value="">Select...</option>
            <Query query={listElements}>
              {({ loading, error, data }) => {
                if (loading) {
                  return <option>Fetching</option>
                } else if (error) {
                  return <option>Error</option>
                } else {
                  return (data.findMarkers.map(({ id, category, name, map_id }) => {
                    if (category === eleCategory) {
                      if (!map_id) {
                        return (
                          <option key={id} value={id}>{name}</option>
                          )
                      } else {
                        return (
                          <option key={id} value={id} disabled>{name} already placed!</option>
                          )
                      }
                    } else {
                      return null;
                    }
                  }));
                }
              }}
            </Query>
          </Input>
        </FormGroup>
        <ModalFooter>
          {this.state.value !== "" &&
            <Mutation
              mutation={POST_MUTATION}
              variables={{
                "id": this.state.value,
                "map_id": mapID,
                "latitude": lat,
                "longitude": lng}}>
              {(postMutation, data, error) =>
                <Button
                  size="sm"
                  color="success"
                  className="col-3"
                  onClick={() => {this.handleMutationSubmit(postMutation)}}
                >
                  Submit
                </Button>
              }
            </Mutation>
          }
          {this.state.value === "" &&
            <Button
              size="sm"
              color="success"
              className="col-3"
              disabled
            >
              Submit
            </Button>
          }
        </ModalFooter>
      </div>
    )
  }
}