import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input, ModalBody, ModalFooter } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

class EditWorldForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }
  handleRefresh() {
    window.location.reload();
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
              <Label> Name (required)</Label>
              <Input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" />
              <Label>Description (optional)</Label>
              <Input value={this.state.description} onChange={this.handleDescriptionChange} type="text" name="description" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Mutation mutation={POST_MUTATION} variables={{ id, name, description, creator_id }}>
            {(postMutation) =>
              <Button color="success" onClick={(event)=>{postMutation(event)
                .then(()=>{this.handleRefresh();})
                .catch((error) => {alert("Please input required fields")})}}>Submit</Button>}
          </Mutation>
        </ModalFooter>
      </div>
    )
  }
}

export default EditWorldForm;