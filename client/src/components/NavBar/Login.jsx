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
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  setUser(data) {
    this.props.setUsername(this.state.username);
    this.props.setUserID(data.data.login.user_id);
    this.setState({redirect: true})
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
   render() {
    const { username, password } = this.state;
    const {getUserID} = this.props;

    const POST_MUTATION = gql`
      mutation ($username: String!, $password: String!){
        login(username: $username, password: $password) {
          user_id
        }
      }`;
    if (!getUserID()) {
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
                {(postMutation, data, error) =>
                  <Button color="success" onClick={(event)=>{postMutation(event)
                    .then((data)=>{this.setUser(data);})
                    .catch((error) => {alert("Wrong login credentials")})}}>
                  Submit</Button>}
              </Mutation>
              {this.renderRedirect()}
            </FormGroup>
          </Form>
        </div>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

export default Login;
