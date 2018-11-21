import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input, ModalBody, ModalFooter } from 'reactstrap';

class CreateNewCity extends Component {
  state = {
    category: "City",
    world_id: this.props.worldID,
    name: null,
    population: null,
    government: null,
    description: null
  }

handleCityName = this.handleCityName.bind(this);
handlePopulation = this.handlePopulation.bind(this);
handleGovernment = this.handleGovernment.bind(this);
handleDescription = this.handleDescription.bind(this);

handleCityName(e) {
  this.setState({name: e.target.value});
}
handlePopulation(e) {
  this.setState({population: Number(e.target.value)});
}
handleGovernment(e) {
  this.setState({government: e.target.value});
}
handleDescription(e) {
  this.setState({description: e.target.value});
}

  render(){
    const { category, world_id, name, population, government, description } = this.state
    const POST_MUTATION = gql`
      mutation ($category: String!, $world_id: ID!, $name: String!, $population: Int, $government: String, $description: String){
        createNewMarker(category: $category, world_id: $world_id, name: $name, population: $population, government: $government, description: $description) {
          id
        }
      }`
  return (
    <div>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="city">City</Label>
            <Input onChange={this.handleCityName} type="text" name="name" placeholder="city"/>
          </FormGroup>
          <FormGroup>
            <Label for="population">Population</Label>
            <Input onChange={this.handlePopulation} type="text" name="population" placeholder="population" />
          </FormGroup>
          <FormGroup>
            <Label for="government">Government</Label>
            <Input onChange={this.handleGovernment} type="text" name="government" placeholder="government" />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input onChange={this.handleDescription} type="textarea" name="description" placeholder="description" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Mutation mutation={POST_MUTATION} variables={{ category, world_id, name, population, government, description }}>
          {postMutation => <Button color="success" onClick={(event)=>{postMutation(event); window.location.reload()}}>Submit</Button>}
        </Mutation>
      </ModalFooter>
    </div>
    )
  }
}

export default CreateNewCity;
