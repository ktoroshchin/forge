import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import ElementDelete from './ElementDelete'

export default class EditElementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      category: this.props.category,
      population: this.props.population,
      government: this.props.government,
      description: this.props.description,
      commerce: this.props.commerce,
      defences: this.props.defences,
      deleteModal: false
    }
  }

  handleNameChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({name: null});
    } else {
      this.setState({name: event.target.value});
    }
  }
  handlePopulationChange = (event) => {
    if (event.target.value.trim() === "" || isNaN(Number(event.target.value))) {
      this.setState({population: null});
    } else {
      this.setState({population: Number(event.target.value)});
    }
  }
  handleGovernmentChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({government: null});
    } else {
      this.setState({government: event.target.value});
    }
  }

  handleCommerceChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({commerce: null});
    } else {
      this.setState({commerce: event.target.value});
    }
  }

  handleDefencesChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({defences: null});
    } else {
      this.setState({defences: event.target.value});
    }
  }



  handleDescriptionChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({description: null});
    } else {
      this.setState({description: event.target.value});
    }
  }
  handleRefresh = () => {
    window.location.reload()
  }
  toggleDeleteModal = () => {
    this.setState({
      deleteModal: !this.state.deleteModal
    });
  }
  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then(()=>{
        this.handleRefresh();
      })
      .catch((error) => {
        alert("Please input required fields")
      })
  }

  render = () => {
    const { name, category, population, government, description, commerce, defences } = this.state;
    const { id } = this.props;
    const POST_MUTATION = gql`
      mutation(
        $id: ID!,
        $name: String!,
        $population: Int,
        $government: String,
        $description: String,
        $commerce: String,
        $defences: String
        ){editMarkerInfo(
          id: $id,
          name: $name,
          population: $population,
          government: $government,
          description: $description,
          commerce: $commerce,
          defences: $defences
          ){
          id
        }
      }`
    return (
      <div>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>Name (required)</Label>
              <Input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" />
              {this.state.population !== false &&
                <div>
                  <Label for="population">Population (optional)</Label>
                  <Input value={this.state.population} onChange={this.handlePopulationChange} type="text" name="population" />
                </div>
              }
              {this.state.government !== false &&
                <div>
                  <Label>Government (optional)</Label>
                  <Input value={this.state.government}onChange={this.handleGovernmentChange} type="text" name="government" />
                </div>
              }
              {this.state.commerce !== false &&
                <div>
                  <Label>Commerce (optional)</Label>
                  <Input value={this.state.commerce}onChange={this.handleCommerceChange} type="text" name="commerce" />
                </div>
              }
              {this.state.defences !== false &&
                <div>
                  <Label>Defences (optional)</Label>
                  <Input value={this.state.defences}onChange={this.handleDefencesChange} type="text" name="defences" />
                </div>
              }
              <Label>Description (optional)</Label>
              <Input value={this.state.description}onChange={this.handleDescriptionChange} type="textarea" name="description" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <Button color="danger" size="sm" className="col-3" onClick={this.toggleDeleteModal}>Delete {category}</Button>
          <Modal isOpen={this.state.deleteModal} toggle={this.toggleDeleteModal} className={this.props.className}>
            <ModalHeader className="default" toggle={this.toggleDeleteModal}>Delete Your {category}</ModalHeader>
            <ElementDelete elementID={id} name={name} />
          </Modal>
        {category === "Location" &&
          <Mutation
            mutation={POST_MUTATION}
            variables={{
              id,
              name,
              "population": null,
              "government": null,
              "commerce": null,
              "defences": null,
              description }}>
            {(postMutation) =>
              <Button
                color="success"
                size="sm"
                className="col-3"
                onClick={() => {this.handleMutationSubmit(postMutation)}}>
                Submit
              </Button>
            }
          </Mutation>
        }
        {category !== "Location" &&
          <Mutation
            mutation={POST_MUTATION}
            variables={{
              id,
              name,
              population,
              government,
              commerce,
              defences,
              description }}>
            {(postMutation) =>
              <Button
                color="success"
                size="sm"
                className="col-3"
                onClick={() => {this.handleMutationSubmit(postMutation)}}>
                Submit
              </Button>
            }
          </Mutation>
        }
        </ModalFooter>
      </div>
    )
  }
}
