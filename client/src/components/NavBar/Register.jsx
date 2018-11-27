import React, { Component } from "react";
import { Container, Card, CardTitle, CardText, Button, Form, FormGroup, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router'

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      redirect: false
    }
  }

  handleUsernameChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({username: null});
    } else {
      this.setState({username: event.target.value.trim()});
    }
  }

  handleEmailChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({email: null});
    } else {
      this.setState({email: event.target.value.trim()});
    }
  }

  handlePasswordChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({password: null});
    } else {
      this.setState({password: event.target.value.trim()});
    }
  }

  setUser = (data) => {
    this.props.setUsername(this.state.username);
    this.props.setUserID(data.data.register.id);
    this.setState({redirect: true});
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/my-worlds' />
    }
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then((data)=>{
        this.setUser(data);
      })
      .catch((error) => {
        if (!this.state.username || !this.state.email || !this.state.password) {
          alert("Please fill in required fields");
        } else {
          error.graphQLErrors.map(({ message }) => (alert(message)))
        }
      })
  }

  handleKeypressEnter = (event, postMutation) => {
    if (event.key === "Enter") {
      return this.handleMutationSubmit(postMutation)
    }
  }

  render() {
    const { username, email, password } = this.state;
    const {getUserID} = this.props;
    const POST_MUTATION = gql`
      mutation ($username: String!, $email: String!, $password: String!){
        register(username: $username, email: $email, password: $password) {
          id
        }
      }`

    if (!getUserID()) {
      return (
        <Container>
          <h1 className="my-4 text-center">REGISTER</h1>
          <Card
            body
            style={{
              backgroundColor: '#D3D3D3',
              borderColor: '#D3D3D3'
            }}
          >
            <Mutation mutation={POST_MUTATION} variables={{ username, email, password }}>
            {postMutation =>
              <Form>
                <FormGroup>
                  <CardTitle>Username</CardTitle>
                  <CardText>
                    <Input
                      onChange={this.handleUsernameChange}
                      type="text"
                      name="username"
                      onKeyPress={(event) => this.handleKeypressEnter(event, postMutation)}
                    />
                  </CardText>
                  <CardTitle>Email</CardTitle>
                  <CardText>
                    <Input
                      onChange={this.handleEmailChange}
                      type="text"
                      name="email"
                      onKeyPress={(event) => this.handleKeypressEnter(event, postMutation)}
                    />
                  </CardText>
                  <CardTitle>Password</CardTitle>
                  <CardText>
                    <Input
                      onChange={this.handlePasswordChange}
                      type="password"
                      name="password"
                      onKeyPress={(event) => this.handleKeypressEnter(event, postMutation)}
                    />
                  </CardText>
                </FormGroup>
                <Button
                  color="primary"
                  onClick={() => {this.handleMutationSubmit(postMutation)}}
                >
                  Submit
                </Button>
              </Form>
            }
            </Mutation>
            {this.renderRedirect()}
          </Card>
        </Container>
      )
    } else {
      return <Redirect to='/my-worlds' />
    }
  }
}
