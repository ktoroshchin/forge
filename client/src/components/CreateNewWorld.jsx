import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CreateNewCity from './CreateNewCity'
import CreateNewTown from './CreateNewTown'
import CreateNewLocation from './CreateNewLocation'

class CreateNewWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }
  render() {
    const { name, description } = this.state;
    return (
      <div>
        <h2>Create A New World</h2>
        <form>
          <label>
            Name:
            <input onChange={this.handleNameChange} type="text" name="name" />
          </label>
          <label>
            Description:
            <input onChange={this.handleDescriptionChange} type="text" name="description" />
          </label>
          <br />
        </form>
        <CreateNewCity />
        <CreateNewTown/>
        <CreateNewLocation/>
      </div>
      )
  }
}

export default CreateNewWorld;
