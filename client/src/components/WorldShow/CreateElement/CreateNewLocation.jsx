import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input, ModalBody, ModalFooter } from 'reactstrap';

class CreateNewLocation extends Component {
  state = {
    category: "Location",
    world_id: this.props.worldID,
    name: null,
    description: null
  }
  handleLocationName = this.handleLocationName.bind(this);
  handleDescription = this.handleDescription.bind(this);
  handleLocationName(e) {
    this.setState({name: e.target.value});
  }
  handleDescription(e) {
    this.setState({description: e.target.value});
  }
  render() {
    const { category, world_id, name, description } = this.state
    const POST_MUTATION = gql`
      mutation ($category: String!, $world_id: ID!, $name: String!, $description: String){
        createNewMarker(category: $category, world_id: $world_id, name: $name, description: $description) {
          id
        }
      }`
    return (
      <div>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="Name">Location Name (required)</Label>
              <Input onChange={this.handleLocationName} type="text" name="name" />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description (optional)</Label>
              <Input onChange={this.handleDescription} type="text" name="description" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Mutation mutation={POST_MUTATION} variables={{ category, world_id, name, description }}>
            {postMutation => <Button color="success" onClick={(event)=>{postMutation(event); window.location.reload()}}>Submit</Button>}
          </Mutation>
        </ModalFooter>
      </div>
    )
  }
}

export default CreateNewLocation;
