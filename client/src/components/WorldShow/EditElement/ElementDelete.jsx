import React, {Component} from "react";
import { Button, ModalFooter, ModalBody, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class ElementDelete extends Component {
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
  confirmCheck() {
    this.setState({
      confirm: !this.state.confirm
    });
  }
  setRedirect() {
    this.setState({
      redirect: true
    })
  }
  renderRedirect() {
    if (this.state.redirect) {
      window.location.reload();
    }
  }
  render() {
    const {elementID, name} = this.props;
    const POST_MUTATION = gql`
      mutation ($id: ID!){
        destroyMarker(id: $id)
      }`
    return (
      <div>
        <ModalBody>
          Are you sure you want to delete "{name}"?
          <FormGroup check>
            <Label check>
              <Input type="checkbox" onChange={this.confirmCheck}/>
              Yes I want to delete "{name}"!
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
              "id": elementID }}>
            {(postMutation, data, error) =>
            <Button className="btn btn-danger col-md-6" onClick={(event)=>{postMutation()
              .then(()=>{this.setRedirect()})
              .catch((error) => {(error.graphQLErrors.map(({ message }) => (alert(message))))})}}>
            Remove</Button>}
          </Mutation>
        }
        {this.renderRedirect()}
        </ModalFooter>
      </div>
    )
  }
}

