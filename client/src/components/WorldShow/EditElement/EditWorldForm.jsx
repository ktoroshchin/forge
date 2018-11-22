import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import WorldDelete from './WorldDelete'

class EditWorldForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
      deleteModal: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
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
  handleDescriptionChange(e) {
    if (e.target.value.trim() === "") {
      this.setState({description: null});
    } else {
      this.setState({description: e.target.value.trim()});
    }
  }
  handleRefresh() {
    window.location.reload();
  }
  toggleDeleteModal() {
    this.setState({
      deleteModal: !this.state.deleteModal
    });
  }
  render() {
    const { name, description } = this.state;
    const { id, creator_id } = this.props;
    const POST_MUTATION = gql`
      mutation ($id: ID!, $name: String!, $description: String, $creator_id: ID!){
        editWorldInfo(id: $id, name: $name, description: $description, creator_id: $creator_id) {
         id
        }
      }`
    return (
      <div className="container">
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>World Name (required)</Label>
              <Input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" />
              <Label>World Description (optional)</Label>
              <Input value={this.state.description} onChange={this.handleDescriptionChange} type="textarea" name="description" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter className="justify-content-between">
          <Button className="btn btn-outline-danger btn-sm col-3" onClick={this.toggleDeleteModal}>Remove World</Button>
          <Modal isOpen={this.state.deleteModal} toggle={this.toggleDeleteModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleDeleteModal}>Remove Your World</ModalHeader>
            <WorldDelete worldID={id} />
          </Modal>
          <Mutation mutation={POST_MUTATION} variables={{ id, name, description, creator_id }}>
            {(postMutation) =>
              <Button className="btn btn-outline-success btn-sm col-3" onClick={(event)=>{postMutation(event)
                .then(()=>{this.handleRefresh();})
                .catch((error) => {alert("Please input required fields")})}}>Submit</Button>}
          </Mutation>
        </ModalFooter>
      </div>
    )
  }
}

export default EditWorldForm;