import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
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
    this.setUser = this.setUser.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  setUser(data) {
    if (this.state.username && this.state.password) {
      this.props.setUsername(this.state.username);
      this.props.setUserID(data.data.createNewUser.id);
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
    const { username, password } = this.state;
    const POST_MUTATION = gql`
      mutation ($username: String!, $password: String!){
        login(username: $username, password: $password) {
          user_id
        }
      }`
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
            <Mutation mutation={POST_MUTATION} variables={{ username, password }}>
              {(postMutation, data) =>
                <Button color="success" onClick={(event)=>{postMutation(event).then((data)=>{this.setUser(data);})}}>
                Submit</Button>}
            </Mutation>
            {this.renderRedirect()}
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Login;
