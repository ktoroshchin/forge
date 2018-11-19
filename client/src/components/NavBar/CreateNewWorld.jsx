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
    this.renderRedirect = this.renderRedirect.bind(this);
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
      return <Redirect to='/my-worlds' />
    }
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
          <h2>Create A New World</h2>
          <Form>
            <FormGroup>
              <Label>Name</Label>
              <Input onChange={this.handleNameChange} type="text" name="name" />
              <Label>Description</Label>
              <Input onChange={this.handleDescriptionChange} type="text" name="description" />
              <br />
              <Mutation mutation={POST_MUTATION} variables={{ name, description, creator_id }}>
                {postMutation => <Button color="success" onClick={(event)=>{postMutation(event)
                  .then(()=>{this.setRedirect()})}}>Submit</Button>}
              </Mutation>
              {this.renderRedirect()}
            </FormGroup>
          </Form>
        </div>
        )
    } else {
      return <Redirect to='/login' />
    }
  }
}

export default CreateNewWorld;
