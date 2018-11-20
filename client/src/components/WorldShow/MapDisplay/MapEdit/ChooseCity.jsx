import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class ChooseCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      value: ""
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }))
  }

  select(event) {
    console.log(event.target.getAttribute('data-key'));
  }

  render() {
    const {submitMarker, coords: {lat, lng}, worldID, mapID} = this.props
    const listCities = gql`query {
      findCitiesByWorldId(world_id: "${worldID}"){
        id
        name
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
        <Query query={listCities}>
          {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findCitiesByWorldId.map(({ id, name }) => (
            <div>
            <ModalBody>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                  <DropdownToggle caret>
                    Select City
                  </DropdownToggle>
                  <DropdownMenu>
                        <DropdownItem key={id} data-key={id} onClick={this.select}>{name}</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
            </ModalBody>
            <ModalFooter>
              <Mutation
                mutation={POST_MUTATION}
                variables={{
                  "id": id,
                  "map_id": mapID,
                  "latitude": lat,
                  "longitude": lng}}>
                {(postMutation, data, error) =>
                <Button color="success" onClick={(event)=>{postMutation()
                  .then(()=>{submitMarker()})
                  .catch((error) => {
                    alert('Error')
                  }
                )}}>
                Submit</Button>}
              </Mutation>
            </ModalFooter>
            </div>
                )));
              }}
              </Query>
            </div>
      )
  }
}