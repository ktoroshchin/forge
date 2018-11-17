import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import HomePage from "../HomePage"
import {Redirect} from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      redirect: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  setUsername(e) {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.addUserID(this.state.username);
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
    return (
      <div>
        <h2>Login</h2>
        <Form>
          <FormGroup>
            <Label>Username</Label>
            <Input onChange={this.handleUsernameChange} type="text" name="username" />
            <Label>Password</Label>
            <Input onChange={this.handlePasswordChange} type="password" name="password" />
            <br />
            <Button color="success" type="submit" onClick={this.setUsername}>Submit</Button>
            {this.renderRedirect()}
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Login;
