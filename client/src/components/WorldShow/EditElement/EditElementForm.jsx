import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import ElementDelete from './ElementDelete'

export default class EditEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      category: this.props.category,
      population: this.props.population,
      government: this.props.government,
      description: this.props.description,
      deleteModal: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePopulationChange = this.handlePopulationChange.bind(this);
    this.handleGovernmentChange = this.handleGovernmentChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
  }
  handleNameChange(e) {
    if (e.target.value.trim() === "") {
      this.setState({name: null});
    } else {
      this.setState({name: e.target.value.trim()});
    }
  }
  handlePopulationChange(e) {
    if (e.target.value.trim() === "" || isNaN(Number(e.target.value))) {
      this.setState({population: null});
    } else {
      this.setState({population: Number(e.target.value.trim())});
    }
  }
  handleGovernmentChange(e) {
    if (e.target.value.trim() === "") {
      this.setState({government: null});
    } else {
      this.setState({government: e.target.value.trim()});
    }
  }
  handleDescriptionChange(e) {
    if (e.target.value.trim() === "") {
      this.setState({description: null});
    } else {
      this.setState({description: e.target.value.trim()});
    }
  }
  handleRefresh() {
    window.location.reload()
  }
  toggleDeleteModal() {
    this.setState({
      deleteModal: !this.state.deleteModal
    });
  }

  handleMutationSubmit(postMutation) {
    return postMutation()
      .then(()=>{
        this.handleRefresh();
      })
      .catch((error) => {
        alert("Please input required fields")
      })
  }

  render() {
    const { name, category, population, government, description } = this.state;
    const {id} = this.props;
    const POST_MUTATION = gql`
    mutation(
      $id: ID!,
      $name: String!,
      $population: Int,
      $government: String,
      $description: String
      ){editMarkerInfo(
        id: $id,
        name: $name,
        population: $population,
        government: $government,
        description: $description
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
              <Label>Description (optional)</Label>
              <Input value={this.state.description}onChange={this.handleDescriptionChange} type="textarea" name="description" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn btn-outline-danger btn-sm col-3" onClick={this.toggleDeleteModal}>Delete {category}</Button>
          <Modal isOpen={this.state.deleteModal} toggle={this.toggleDeleteModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleDeleteModal}>Delete Your {category}</ModalHeader>
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
            description }}>
          {(postMutation) =>
            <Button
              className="btn btn-outline-success btn-sm col-3"
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
            description }}>
          {(postMutation) =>
            <Button
              className="btn btn-outline-success btn-sm col-3"
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