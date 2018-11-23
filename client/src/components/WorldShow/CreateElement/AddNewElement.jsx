import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input, ModalBody, ModalFooter } from 'reactstrap';

export default class AddNewElement extends Component {
  state = {
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
    if (e.target.value.trim() === "") {
      this.setState({name: null});
    } else {
      this.setState({name: e.target.value.trim()});
    }
  }
  handlePopulation(e) {
    if (e.target.value.trim() === "" || isNaN(Number(e.target.value))) {
      this.setState({population: null});
    } else {
      this.setState({population: Number(e.target.value.trim())});
    }
  }
  handleGovernment(e) {
    if (e.target.value.trim() === "") {
      this.setState({government: null});
    } else {
      this.setState({government: e.target.value.trim()});
    }
  }
  handleDescription(e) {
    if (e.target.value.trim() === "") {
      this.setState({description: null});
    } else {
      this.setState({description: e.target.value.trim()});
    }
  }
  handleMutationSubmit(postMutation) {
    return postMutation()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert("Please input required fields")
      })
  }
  render() {
    const { world_id, name, population, government, description } = this.state
    const { category } = this.props
    const POST_MUTATION = gql`
      mutation (
      $category: String!,
      $world_id: ID!,
      $name: String!,
      $population: Int,
      $government: String,
      $description: String){
        createNewMarker(
          category: $category,
          world_id: $world_id,
          name: $name,
          population: $population,
          government: $government,
          description: $description) {
            id
        }
      }`
    return (
      <Mutation
        mutation={POST_MUTATION}
        variables={{
          category,
          world_id,
          name,
          population,
          government,
          description }}>
        {postMutation =>
          <div>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="name">{category} Name (required)</Label>
                  <Input
                    onChange={this.handleCityName}
                    type="text"
                    name="name"
                  />
                  {category !== "Location" &&
                    <div>
                      <Label for="population">Population (optional)</Label>
                      <Input
                        onChange={this.handlePopulation}
                        type="text"
                        name="population"
                      />
                      <Label for="government">Government (optional)</Label>
                      <Input
                        onChange={this.handleGovernment}
                        type="text"
                        name="government"
                      />
                    </div>
                  }
                  <Label for="description">Description (optional)</Label>
                  <Input
                    onChange={this.handleDescription}
                    type="textarea"
                    name="description"
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button
                color="success"
                onClick={() => {this.handleMutationSubmit(postMutation)}}>
                Submit
              </Button>
            </ModalFooter>
          </div>
        }
      </Mutation>
    )
  }
}