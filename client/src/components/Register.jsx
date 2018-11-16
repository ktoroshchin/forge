import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      username: null,
      email: null,
      password: null
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
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

  render() {
    const { first_name, last_name, username, email, password } = this.state
    const POST_MUTATION = gql`
      mutation ($first_name: String, $last_name: String, $username: String!, $email: String!, $password: String!){
        createNewUser(first_name: $first_name, last_name: $last_name, username: $username, email: $email, password: $password) {
          id
        }
      }`
    return (
      <div>
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
            <Mutation mutation={POST_MUTATION} variables={{ first_name, last_name, username, email, password }} onCompleted={() => this.props.history.push('/')}>
              {postMutation => <Button color="success" onClick={postMutation}>Submit</Button>}
            </Mutation>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Register;