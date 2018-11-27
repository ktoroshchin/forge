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

  setRedirect = (id) => {
    this.setState({
      world_id: id,
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      window.location.reload();
      return <Redirect to={{pathname: "/world-show",
        state: {worldID: this.state.world_id, creatorID: this.state.creator_id}}}
      />
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then((data)=>{
        this.setRedirect(data.data.createNewWorld.id);
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
            creator_id
          }
        }`
      return (
        <Container className="custom-container">
          <h1 className="header">Create A New World</h1>
          <Card
            body
            style={{
              backgroundColor: '#D3D3D3',
              borderColor: '#D3D3D3'
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
      return <Redirect to='/login' />
    }
  }
}
