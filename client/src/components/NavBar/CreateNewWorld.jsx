import React, { Component } from "react";
import { Container, Card, CardTitle, CardText, Button, Form, FormGroup, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router'

export default class CreateNewWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      description: null,
      creator_id: this.props.getUserID(),
      redirect: false
    }
  }

  handleNameChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({name: null});
    } else {
      this.setState({name: event.target.value.trim()});
    }
  }

  handleDescriptionChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({description: null});
    } else {
      this.setState({description: event.target.value.trim()});
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      window.location.reload();
      return <Redirect to='/my-worlds' />
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then((data)=>{
        this.setRedirect();
      })
      .catch((error) => {
        alert("Please fill in required fields")
      })
  }

  render() {
    if (this.props.getUserID()) {
      const { name, description, creator_id } = this.state;
      const POST_MUTATION = gql`
        mutation ($name: String!, $description: String, $creator_id: ID!){
          createNewWorld(name: $name, description: $description, creator_id: $creator_id) {
            id
          }
        }`
      return (
        <Container>
          <h1 className="my-4 text-center">Create A New World</h1>
          <Card
            body
            inverse
            style={{
              backgroundColor: '#595959',
              borderColor: '#595959'
            }}
          >
            <Mutation mutation={POST_MUTATION} variables={{ name, description, creator_id }}>
              {(postMutation) =>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                  <CardTitle>World Name (required)</CardTitle>
                  <CardText>
                    <Input
                      onChange={this.handleNameChange}
                      type="text"
                      name="name"
                    />
                  </CardText>
                  <CardTitle>World Description (optional)</CardTitle>
                  <CardText>
                    <Input
                      onChange={this.handleDescriptionChange}
                      type="textarea"
                      name="description"
                    />
                  </CardText>
                </FormGroup>
                <Button
                  color="success"
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
      return <Redirect to='/login' />
    }
  }
}
