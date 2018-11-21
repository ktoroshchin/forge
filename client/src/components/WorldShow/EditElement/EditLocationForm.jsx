import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

class EditLocationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
      redirect: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }
  setRedirect() {
    this.setState({redirect: true});
  }
  renderRedirect() {
    if (this.state.redirect) {
      window.location.reload();
      return <Redirect to='/' />
    }
  }
  render() {
    const { name, description } = this.state;
    const {id} = this.props;
    const POST_MUTATION = gql`
      mutation ($id: ID!, $name: String!, $description: String){
        editMarkerInfo(id: $id, name: $name, description: $description) {
         id
        }
      }`
    return (
      <div>
        <h2>Edit Location</h2>
        <Form>
          <FormGroup>
            <Label>Name (required)</Label>
            <Input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" />
            <Label>Description (optional)</Label>
            <Input value={this.state.description} onChange={this.handleDescriptionChange} type="text" name="description" />
            <br />
            <Mutation mutation={POST_MUTATION} variables={{ id, name, description }}>
              {(postMutation) =>
                <Button color="success" onClick={(event)=>{postMutation(event)
                  .then(()=>{this.setRedirect();})
                  .catch((error) => {alert("Please input required fields")})}}>Submit</Button>}
            </Mutation>
            {this.renderRedirect()}
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default EditLocationForm;