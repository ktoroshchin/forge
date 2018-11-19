import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class ChooseTown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
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
    const listTowns = gql`query {
      findTownsByWorldId(world_id: "2fd0df5b-5623-497a-bb21-3d5d9144f618"){
        id
        name
      }
    }`
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle caret>
            Select Town
          </DropdownToggle>
          <DropdownMenu>
          <Query query={listTowns}>
            {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (data.findTownsByWorldId.map(({ id, name }) => (
                <DropdownItem key={id} data-key={id} onClick={this.select}>{name}</DropdownItem>
            )));
          }}
          </Query>
          </DropdownMenu>
        </Dropdown>
      )
  }
}