import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import WorldDelete from './WorldDelete'

export default class EditWorldForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
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

  handleDescriptionChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({description: null});
    } else {
      this.setState({description: event.target.value});
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then(()=>{
        window.location.reload();
      })
      .catch((error) => {
        alert("Please input required fields")
      })
  }

  toggleDeleteModal = () => {
    this.setState({
      deleteModal: !this.state.deleteModal
    });
  }

  render() {
    const { name, description } = this.state
    const { id, creator_id } = this.props;
    const POST_MUTATION = gql`
      mutation(
        $id: ID!,
        $name: String!,
        $description: String,
        $creator_id: ID!){
          editWorldInfo(
            id: $id,
            name: $name,
            description: $description,
            creator_id: $creator_id){
              id
            }
          }`
    return (
      <div className="container">
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>World Name (required)</Label>
              <Input value={name} onChange={this.handleNameChange} type="text" name="name" />
              <Label>World Description (optional)</Label>
              <Input value={description} onChange={this.handleDescriptionChange} type="textarea" name="description" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn btn-outline-danger btn-sm col-3" onClick={this.toggleDeleteModal}>Remove World</Button>
          <Modal isOpen={this.state.deleteModal} toggle={this.toggleDeleteModal} className={this.props.className}>
            <ModalHeader className="default" toggle={this.toggleDeleteModal}>Remove Your World</ModalHeader>
            <WorldDelete worldID={id} />
          </Modal>
          <Mutation
            mutation={POST_MUTATION}
            variables={{
              id,
              name,
              description,
              creator_id
            }}
          >
            {(postMutation) =>
              <Button
                color="success"
                size="sm"
                className="col-3"
                onClick={()=>{this.handleMutationSubmit(postMutation)}}
              >
                Submit
              </Button>
            }
          </Mutation>
        </ModalFooter>
      </div>
    )
  }
}
