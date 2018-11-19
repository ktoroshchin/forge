import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class CreateNewTown extends Component {
  state = {
    name: null,
    population: null,
    government: null,
    description: null,
    world_id: this.props.worldID,
    marker_id: null
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
    const { name, population, government, description, marker_id, world_id } = this.state
    const POST_MUTATION = gql`
      mutation ($name: String!, $population: Int, $government: String, $description: String, $world_id: ID!, $marker_id: ID){
        createNewTown(name: $name, population: $population, government: $government, description: $description, world_id: $world_id, marker_id: $marker_id) {
          id
        }
      }`
    return (
      <div>
        <Form>
          <Label for="form">Create a new Town</Label>
          <FormGroup>
            <Label for="town">Name</Label>
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
          <Mutation mutation={POST_MUTATION} variables={{ name, population, description, marker_id, world_id }}>
            {postMutation => <Button color="success" onClick={(event)=>{postMutation(event); window.location.reload()}}>Submit</Button>}
          </Mutation>
        </Form>
      </div>
      )
    }
  }

export default CreateNewTown;
