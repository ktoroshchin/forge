import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      password: null,
      redirect: false
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleFirstNameChange(e) {
    this.setState({first_name: e.target.value});
  }
  handleLastNameChange(e) {
    this.setState({last_name: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  setRedirect() {
    this.setState({redirect: true});
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  render() {
    const { first_name, last_name, password } = this.state;
    const id = this.props.getUserID();
    const POST_MUTATION = gql`
      mutation ($id: ID!, $password: String!, $first_name: String, $last_name: String){
        bulkEditUser(id: $id, password: $password, first_name: $first_name, last_name: $last_name) {
         id
        }
      }`
    return (
      <div>
        <h2>Edit Profile</h2>
        <Form>
          <FormGroup>
            <Label>First Name (optional)</Label>
            <Input onChange={this.handleFirstNameChange} type="text" name="first_name" />
            <Label>Last Name (optional)</Label>
            <Input onChange={this.handleLastNameChange} type="text" name="last_name" />
            <Label>Password</Label>
            <Input onChange={this.handlePasswordChange} type="password" name="password" />
            <br />
            <Mutation mutation={POST_MUTATION} variables={{ id, first_name, last_name, password }}>
              {(postMutation, data) =>
                <Button color="success" onClick={(event)=>{postMutation(event); this.setRedirect()}}>Submit</Button>}
            </Mutation>
            {this.renderRedirect()}
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default EditProfile;