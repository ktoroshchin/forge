import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  render() {
    const { username, password } = this.state;
    const validLogin =
      gql`
        query ($username: String!, $password: String!){
          login(username: $username, password: $password){
            id,
            username
          }
        }`;
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
            <Button color="success">Submit</Button>
          </FormGroup>
        </Form>
        <Query query={validLogin} variables={{ username, password }}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          if (data.login == null) return <p>Invalid</p>
          return <p>{data.login.id}</p>;
        }}
      </Query>
      </div>
    )
  }
}

export default Login;
