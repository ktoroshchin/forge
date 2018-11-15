import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
    const { username, email, password } = this.state
    const POST_MUTATION = gql`
      mutation newMutation($username: String!, $email: String!, $password: String!){
        createNewUser(username: $username, email: $email, password: $password) {
          id
        }
      }`
    return (
      <div>
        <h2>Register</h2>
        <form>
          <label>
            Username:
            <input onChange={this.handleUsernameChange} type="text" name="username" />
          </label>
          <label>
            Email:
            <input onChange={this.handleEmailChange} type="text" name="email" />
          </label>
          <label>
            Password:
            <input onChange={this.handlePasswordChange} type="password" name="password" />
          </label>
          <Mutation mutation={POST_MUTATION} variables={{ username, email, password }}>
            {postMutation => <button onClick={postMutation}>Submit</button>}
          </Mutation>
        </form>
      </div>
    )
  }
}

export default Register;
