import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

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
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input onChange={this.handleNameChange} type="text" name="name" />
            <Label>Description</Label>
            <Input onChange={this.handleDescriptionChange} type="text" name="description" />
            <br />
            <Mutation mutation={POST_MUTATION} variables={{ name, description, creator_id }} onCompleted={() => this.props.history.push('/')}>
              {postMutation => <Button color="success" onClick={postMutation}>Submit</Button>}
            </Mutation>
          </FormGroup>
        </Form>
      </div>
      )
  }
}

export default CreateNewWorld;
