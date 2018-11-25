import React,  { Component } from "react";
import { ListGroupItem, Button, Modal, ModalHeader } from 'reactstrap';

import AddNewElement from './AddNewElement'

export default class ChooseCategoryToCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      worldID: this.props.worldID
    }
  }

  toggleModal = (event) => {
    this.setState({
      modal: event.target.value
    });
  }

  render = () => {
    return (
      <div className="ChooseCategoryToCreate default">
        <ListGroupItem className="category text-center">Category</ListGroupItem>
        <Button className="category-button col-12" onClick={this.toggleModal} value={"1"} >
          New City
        </Button>
        <Modal isOpen={this.state.modal === "1"} toggle={this.toggleModal} >
          <ModalHeader className="default" toggle={this.toggleModal}>Create a New City</ModalHeader>
          <AddNewElement category="City" worldID={this.state.worldID} />
        </Modal>
        <Button className="category-button col-12" onClick={this.toggleModal} value={"2"} >
          New Town
        </Button>
        <Modal isOpen={this.state.modal === "2"} toggle={this.toggleModal} >
          <ModalHeader className="default" toggle={this.toggleModal}>Create a New Town</ModalHeader>
          <AddNewElement category="Town" worldID={this.state.worldID} toggleModal={this.toggleModal} />
        </Modal>
        <Button className="category-button col-12" onClick={this.toggleModal} value={"3"} >
          New Location
        </Button>
        <Modal isOpen={this.state.modal === "3"} toggle={this.toggleModal} >
          <ModalHeader className="default" toggle={this.toggleModal}>Create a New Location</ModalHeader>
          <AddNewElement category="Location" worldID={this.state.worldID} />
        </Modal>
      </div>
    )
  }
}
