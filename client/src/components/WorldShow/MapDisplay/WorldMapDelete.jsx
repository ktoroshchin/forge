import React, {Component} from "react";
import { Button, ModalFooter, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Redirect } from "react-router-dom";

export default class WorldMapDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
      sent: false,
      redirect: false,
    }
    this.confirmCheck = this.confirmCheck.bind(this)
    this.handleMutationSubmit = this.handleMutationSubmit.bind(this)
  }

  confirmCheck() {
    this.setState({
      confirm: !this.state.confirm
    });
  }

  handleMutationSubmit(postMutation, thisState) {
    return postMutation()
      .then(()=>{
        thisState.setState({
          sent: true,
        },
        () => thisState.activateRedirect()
        );
      })
      .catch((error) => {
        error.graphQLErrors.map(({ message }) => (alert(message)))})
  }

  activateRedirect() {
    this.setState({
      redirect: true,
    })
  }

  renderRedirect() {
    if (this.state.redirect) {
      return (
          <Redirect
            to={{
              pathname: "/world-show",
              state: {
                worldID: this.props.worldID,
                creatorID: this.props.creatorID,
              }
            }}
          />
      )
    }
  }

  render() {
    const {mapID} = this.props;

    const POST_MUTATION = gql`
      mutation (
        $id: ID!){
        removeMapById(
          id: $id)
      }`
    return (
      <div>
        <ModalBody>
          Are you sure you want to remove your map? This will remove all the markers placed on it as well!
          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={this.confirmCheck}/>
              Yes I want to delete my map!
            </Label>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
        {!this.state.confirm &&
          <Button className="btn btn-danger col-md-6" disabled>Remove</Button>
        }
        {this.state.confirm &&
          <Mutation
            mutation={POST_MUTATION}
            variables={{
              "id": mapID }}>
            {(postMutation, data, error) =>

              <Button
                className="btn btn-danger col-md-6"
                onClick={() => {this.handleMutationSubmit(postMutation, this)}}
              >
                Remove
                {this.renderRedirect()}
              </Button>
            }
          </Mutation>
        }
        </ModalFooter>
      </div>
      )
  }
}

