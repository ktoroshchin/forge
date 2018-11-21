import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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

render(){
  const { category, world_id, name, description } = this.state
  const POST_MUTATION = gql`
    mutation ($category: String!, $world_id: ID!, $name: String!, $description: String){
      createNewMarker(category: $category, world_id: $world_id, name: $name, description: $description) {
        id
      }
    }`

  return (
    <div>
      <Form>
        
        <FormGroup>
          <Label for="Name">Name</Label>
          <Input onChange={this.handleLocationName} type="text" name="name" placeholder="location name"/>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input onChange={this.handleDescription} type="text" name="description" placeholder="description" />
        </FormGroup>
        <Mutation mutation={POST_MUTATION} variables={{ category, world_id, name, description }}>
          {postMutation => <Button color="success" onClick={(event)=>{postMutation(event); window.location.reload()}}>Submit</Button>}
        </Mutation>
      </Form>
    </div>
    )
  }
}

export default CreateNewLocation;
