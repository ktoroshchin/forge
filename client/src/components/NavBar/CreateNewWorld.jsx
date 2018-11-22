import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

class CreateNewWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      creator_id: this.props.getUserID(),
      redirect: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }
  setRedirect() {
    this.setState({
      redirect: true
    })
  }
  renderRedirect() {
    if (this.state.redirect) {
      window.location.reload();
      return <Redirect to='/my-worlds' />
    }
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleMutationSubmit(postMutation) {
    return postMutation()
      .then((data)=>{
        this.setRedirect();
      })
      .catch((error) => {
        (alert("Please input required fields"))
      })
  }
  render() {
    if (this.props.getUserID()) {
      const { name, description, creator_id } = this.state;
      const POST_MUTATION = gql`
        mutation ($name: String!, $description: String, $creator_id: ID!){
          createNewWorld(name: $name, description: $description, creator_id: $creator_id) {
            id
          }
        }`
      return (
        <div>
          <div className="container">
            <h2>Create A New World</h2>
            <Mutation mutation={POST_MUTATION} variables={{ name, description, creator_id }}>
              {(postMutation) =>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label>World Name (required)</Label>
                  <Input
                    onChange={this.handleNameChange}
                    type="text"
                    name="name"
                  />
                  <Label>World Description (optional)</Label>
                  <Input
                    onChange={this.handleDescriptionChange}
                    type="textarea"
                    name="description"
                  />
                </FormGroup>
                <Button
                  color="success"
                  onClick={() => {this.handleMutationSubmit(postMutation)}}>
                  Submit
                </Button>
              </Form>
            }
            </Mutation>
            {this.renderRedirect()}
          </div>
        </div>
      )
    } else {
      return <Redirect to='/login' />
    }
  }
}

export default CreateNewWorld;