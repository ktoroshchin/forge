import React, { Component } from "react";
import { Button, ModalFooter, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from 'react-router'

export default class WorldDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
      redirect: false
    }
  }

  confirmCheck = () => {
    this.setState({
      confirm: !this.state.confirm
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      window.location.reload();
      return (
        <Redirect to='/my-worlds' />
      )
    }
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then(()=>{
        this.setRedirect()
      })
      .catch((error) => {
        error.graphQLErrors.map(({ message }) => (alert(message)))
      })
  }

  render = () => {
    const { worldID } = this.props;
    const POST_MUTATION = gql`
      mutation ($id: ID!){
        removeWorldById(id: $id)
      }`
    return (
      <div>
        <ModalBody className="default">
          Are you sure you want to remove your world?
          <FormGroup check>
            <Label className="pointer" check>
              <Input className="pointer" type="checkbox" onChange={this.confirmCheck}/>
              Yes I want to remove my world!
            </Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
        {!this.state.confirm &&
          <Button
            color="danger"
            size="sm"
            className="col-md-6"
            disabled
          >
            Remove
          </Button>
        }
        {this.state.confirm &&
          <Mutation
            mutation={POST_MUTATION}
            variables={{
              "id": worldID }}>
            {(postMutation) =>
              <Button
                color="danger"
                size="sm"
                className="col-md-6"
                onClick={()=>{this.handleMutationSubmit(postMutation)}}
              >
                Remove
              </Button>
            }
          </Mutation>
        }
        {this.renderRedirect()}
        </ModalFooter>
      </div>
    )
  }
}
