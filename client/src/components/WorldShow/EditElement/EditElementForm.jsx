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
    this.setState({name: e.target.value});
  }
  handlePopulationChange(e) {
    this.setState({population: Number(e.target.value)});
  }
  handleGovernmentChange(e) {
    this.setState({government: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }
  handleRefresh() {
    window.location.reload()
  }
  toggleDeleteModal() {
    this.setState({
      deleteModal: !this.state.deleteModal
    });
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
          <Button className="btn btn-outline-danger btn-sm col-3" onClick={this.toggleDeleteModal}>Delete {category}</Button>
          <Modal isOpen={this.state.deleteModal} toggle={this.toggleDeleteModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleDeleteModal}>Delete Your {category}</ModalHeader>
            <ElementDelete elementID={id} name={name} />
          </Modal>
        </ModalBody>
        <ModalFooter>
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
            <Button color="success" onClick={(event)=>{postMutation(event)
              .then(()=>{this.handleRefresh();})
              .catch((error) => {alert("Please input required fields")})}}>Submit</Button>}
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
            <Button color="success" onClick={(event)=>{postMutation(event)
              .then(()=>{this.handleRefresh();})
              .catch((error) => {alert("Please input required fields")})}}>Submit</Button>}
        </Mutation>
        }
        </ModalFooter>
      </div>
    )
  }
}