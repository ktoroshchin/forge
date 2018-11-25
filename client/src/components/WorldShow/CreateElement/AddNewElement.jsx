import React, { Component } from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input, ModalBody, ModalFooter } from 'reactstrap';

export default class AddNewElement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      world_id: this.props.worldID,
      name: null,
      population: null,
      government: null,
      description: null
    }
  }

  handleCityName = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({name: null});
    } else {
      this.setState({name: event.target.value.trim()});
    }
  }

  handlePopulation = (event) => {
    if (event.target.value.trim() === "" || isNaN(Number(event.target.value))) {
      this.setState({population: null});
    } else {
      this.setState({population: Number(event.target.value.trim())});
    }
  }

  handleGovernment = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({government: null});
    } else {
      this.setState({government: event.target.value.trim()});
    }
  }

  handleDescription = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({description: null});
    } else {
      this.setState({description: event.target.value.trim()});
    }
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        alert("Please input required fields")
      })
  }

  render = () => {
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
                onClick={() => {this.handleMutationSubmit(postMutation)}}
              >
                Submit
              </Button>
            </ModalFooter>
          </div>
        }
      </Mutation>
    )
  }
}
