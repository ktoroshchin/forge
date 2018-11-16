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
      creator_id: "7597283c-0a43-4be5-bc73-95280f3c0c5f"
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
    const { name, description, creator_id } = this.state;
    const POST_MUTATION = gql`
      mutation ($name: String!, $description: String, $creator_id: ID!){
        createNewWorld(name: $name, description: $description, creator_id: $creator_id) {
          id
        }
      }`
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
          <Mutation mutation={POST_MUTATION} variables={{ name, description, creator_id }} onCompleted={() => this.props.history.push('/')}>
            {postMutation => <button color="success" onClick={postMutation}>Submit</button>}
          </Mutation>
        </form>
        <CreateNewCity />
        <CreateNewTown/>
        <CreateNewLocation/>
      </div>
      )
  }
}

export default CreateNewWorld;
