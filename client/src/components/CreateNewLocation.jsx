import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateNewLocation extends Component {
  state = {
    name: null,
    description: null,
    marker_id: null,
    world_id: "3d4f3bc5-a4c9-46a2-a16b-20e039730842",
    id: "1"
  }

handleLocation = this.handleLocation.bind(this);
handleDescription = this.handleDescription.bind(this);


handleLocation(e) {
  this.setState({population: Number(e.target.value)});
}
handleDescription(e) {
  this.setState({description: e.target.value});
}

render(){
  const { name, description, marker_id, world_id, id } = this.state
  const POST_MUTATION = gql`
    mutation ($name: String!, $description: String, $world_id: ID!, $marker_id: ID, $id: ID!){
      createNewLocation(name: $name, description: $description, world_id: $world_id, marker_id: $marker_id, id: $id) {
        id
      }
    }`

  return (
    <div>
      <Form>
        <Label for="form">Create a new Location</Label>
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input onChange={this.handleLocation} type="text" name="name" placeholder="location name"/>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input onChange={this.handleDescription} type="text" name="description" placeholder="description" />
        </FormGroup>
        <Mutation mutation={POST_MUTATION} variables={{ name, description, marker_id, world_id, id }}>
          {postMutation => <Button color="success" onClick={postMutation}>Submit</Button>}
        </Mutation>
      </Form>
    </div>
    )
  }
}

export default CreateNewLocation;
