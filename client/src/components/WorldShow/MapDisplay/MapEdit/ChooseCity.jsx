import React, { Component } from 'react';
import { ModalFooter, Button, FormGroup, Label, Input } from 'reactstrap';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class ChooseCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.select = this.select.bind(this);
  }

  select(event) {
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    const { coords: {lat, lng}, worldID, mapID} = this.props
    const listCities = gql`query {
      findCitiesByWorldId(world_id: "${worldID}"){
        id
        name
        map_id
      }
    }`
    const POST_MUTATION = gql`
      mutation (
        $id: ID!,
        $map_id: ID!,
        $latitude: Float!,
        $longitude: Float!){
        placeCityOnMap(
          id: $id,
          map_id: $map_id,
          latitude: $latitude,
          longitude: $longitude){
          world_id
        }
      }`

    return (
      <div>
        <FormGroup>
          <Label for="categorySelect">Choose a City...</Label>
          <Input onClick={this.select} type="select" name="select" id="categorySelect">
            <option value="">Select...</option>
            <Query query={listCities}>
              {({ loading, error, data }) => {
              if (loading) return <option>Fetching</option>
              if (error) return <option>Error</option>
              return (data.findCitiesByWorldId.map(({ id, name, map_id }) => {
                if (!map_id) {
                  return (
                    <option key={id} value={id}>{name}</option>
                    )
                } else {
                  return (
                    <option key={id} value={id} disabled>{name} already placed!</option>
                    )
                }
                }));
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
            <Button color="success" onClick={(event)=>{postMutation()
              .then(()=>{window.location.reload()})
              .catch((error) => {
                alert('Error')
              }
            )}}>
            Submit</Button>}
          </Mutation>
          }
          {this.state.value === "" &&
          <Button color="success" disabled>Submit</Button>
          }
        </ModalFooter>
      </div>
      )
  }
}