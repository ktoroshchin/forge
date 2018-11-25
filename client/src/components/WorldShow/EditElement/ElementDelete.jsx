import React, { Component } from "react";
import { Button, ModalFooter, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class ElementDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
    }
  }

  confirmCheck = () => {
    this.setState({
      confirm: !this.state.confirm
    });
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then(()=>{
        window.location.reload();
      })
      .catch((error) => {
        error.graphQLErrors.map(({ message }) => (alert(message)))
      })
  }

  render = () => {
    const { elementID, name } = this.props;
    const POST_MUTATION = gql`
      mutation ($id: ID!){
        destroyMarker(id: $id)
      }`
    return (
      <div>
        <ModalBody className="default">
          Are you sure you want to delete "{name}"?
          <FormGroup check>
            <Label className="pointer" check>
              <Input className="pointer" type="checkbox" onChange={this.confirmCheck}/>
              Yes I want to delete "{name}"!
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
            Delete
          </Button>
        }
        {this.state.confirm &&
          <Mutation
            mutation={POST_MUTATION}
            variables={{ "id": elementID }}>
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
