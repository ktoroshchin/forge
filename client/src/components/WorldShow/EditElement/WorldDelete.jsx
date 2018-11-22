import React, {Component} from "react";
import { Button, ModalFooter, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

export default class WorldDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
      redirect: false
    }
    this.confirmCheck = this.confirmCheck.bind(this)
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleNameChange(e) {
    this.setState({description: e.target.value});
  }
  setRedirect() {
    this.setState({
      redirect: true
    })
  }
  renderRedirect() {
    if (this.state.redirect) {
      window.location.reload();
      return <Redirect to='/my-worlds' />
    }
  }
  confirmCheck() {
    this.setState({
      confirm: !this.state.confirm
    });
  }

  render() {
    const {worldID} = this.props;

    const POST_MUTATION = gql`
      mutation ($id: ID!){
        removeWorldById(id: $id)
      }`
    return (
      <div>
        <ModalBody>
          Are you sure you want to remove your world?
          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={this.confirmCheck}/>
              Yes I want to delete my world!
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
              "id": worldID }}>
            {(postMutation, data, error) =>
            <Button className="btn btn-danger col-md-6" onClick={(event)=>{postMutation()
              .then(()=>{this.setRedirect()})
              .catch((error) => {
                alert('Error')
              }
            )}}>
            Remove</Button>}
          </Mutation>
        }
        {this.renderRedirect()}
        </ModalFooter>
      </div>
      )
  }
}
