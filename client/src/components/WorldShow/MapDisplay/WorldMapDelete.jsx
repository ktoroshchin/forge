import React, {Component} from "react";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, FormGroup, Label, Input, Form } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class WorldMapDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: false,
    }
    this.confirmCheck = this.confirmCheck.bind(this)
  }

  confirmCheck() {
    this.setState({
      confirm: !this.state.confirm
    });
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
          <Button className="btn btn-danger col-md-6">Remove</Button>
        }
        </ModalFooter>
      </div>
      )
  }
}

