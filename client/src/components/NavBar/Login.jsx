import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
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
  }
  handleUsernameChange(e) {
    if (e.target.value.trim() === "") {
      this.setState({username: null});
    } else {
      this.setState({username: e.target.value.trim()});
    }
  }
  handlePasswordChange(e) {
    if (e.target.value.trim() === "") {
      this.setState({password: null});
    } else {
      this.setState({password: e.target.value.trim()});
    }
  }
  setUser(data) {
    this.props.setUsername(this.state.username);
    this.props.setUserID(data.data.login.id);
    this.setState({redirect: true})
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  handleMutationSubmit(postMutation) {
    return postMutation()
      .then((data)=>{
        this.setUser(data);
      })
      .catch((error) => {
        alert("Please fill in required fields")
      })
  }
  handleKeypressEnter(event, postMutation) {
    if (event.key === "Enter") {
      return this.handleMutationSubmit(postMutation)
    }
  }
  render() {
    const { username, password } = this.state;
    const { getUserID } = this.props;
    const POST_MUTATION = gql`
      mutation ($username: String!, $password: String!){
        login(username: $username, password: $password) {
          id
        }
      }`;
    if (!getUserID()) {
      return (
        <div className="container page">
          <h2 className="header">Login</h2>
          <div className="info">
            <Mutation mutation={POST_MUTATION} variables={{ username, password }}>
              {postMutation =>
                <Form>
                  <FormGroup>
                    <Label>Username</Label>
                    <Input
                      onChange={this.handleUsernameChange}
                      type="text"
                      name="username"
                      onKeyPress={(event) => this.handleKeypressEnter(event, postMutation)}
                    />
                    <Label>Password</Label>
                    <Input
                      onChange={this.handlePasswordChange}
                      type="password"
                      name="password"
                      onKeyPress={(event) => this.handleKeypressEnter(event, postMutation)}
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
      return <Redirect to='/' />
    }
  }
}

export default Login;