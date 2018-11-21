import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      username: null,
      email: null,
      password: null,
      redirect: false
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.setUser = this.setUser.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleFirstNameChange(e) {
    this.setState({first_name: e.target.value});
  }
  handleLastNameChange(e) {
    this.setState({last_name: e.target.value});
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  setUser(data) {
    if (this.state.username && this.state.email && this.state.password) {
      this.props.setUsername(this.state.username);
      this.props.setUserID(data.data.register.id)
      this.setState({redirect: true})
    } else {
      alert("Please fill in required fields")
    }
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  render() {
    const { first_name, last_name, username, email, password } = this.state;
    const {getUserID} = this.props;
    const POST_MUTATION = gql`
      mutation ($first_name: String, $last_name: String, $username: String!, $email: String!, $password: String!){
        register(first_name: $first_name, last_name: $last_name, username: $username, email: $email, password: $password) {
          id
        }
      }`
    if (!getUserID()) {
      return (
        <div>
          <div className="container">
            <h2>Register</h2>
            <Form>
              <FormGroup>
                <Label>First Name (optional)</Label>
                <Input onChange={this.handleFirstNameChange} type="text" name="first_name" />
                <Label>Last Name (optional)</Label>
                <Input onChange={this.handleLastNameChange} type="text" name="last_name" />
                <Label>Username</Label>
                <Input onChange={this.handleUsernameChange} type="text" name="username" />
                <Label>Email</Label>
                <Input onChange={this.handleEmailChange} type="text" name="email" />
                <Label>Password</Label>
                <Input onChange={this.handlePasswordChange} type="password" name="password" />
                <br />
                <Mutation mutation={POST_MUTATION} variables={{ first_name, last_name, username, email, password }}>
                  {(postMutation, data) =>
                    <Button color="success" onClick={(event)=>{postMutation(event).then((data)=>{this.setUser(data);})}}>
                    Submit</Button>}
                </Mutation>
                {this.renderRedirect()}
              </FormGroup>
            </Form>
          </div>
        </div>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

export default Register;