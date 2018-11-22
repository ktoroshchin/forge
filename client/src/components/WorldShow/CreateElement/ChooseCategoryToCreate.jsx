import React,  { Component } from "react";
import { ListGroupItem, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import CreateNewCity from './CreateNewCity'
import CreateNewTown from './CreateNewTown'
import CreateNewLocation from './CreateNewLocation'

class ChooseCategoryToCreate extends Component {
  state = {
    modal: false,
    worldID: this.props.worldID
  }
  toggleModal = this.toggleModal.bind(this)
  toggleModal(e) {
    this.setState({modal: e.target.value});
  }
  render() {
    return(
      <div>
        <div className="ChooseCategoryToCreate">
          <ListGroupItem className="category text-center">Category</ListGroupItem>
          <Button className="category-button col-12" onClick={this.toggleModal} value={"1"} >
            New City
          </Button>
          <Modal isOpen={this.state.modal === "1"} toggle={this.toggleModal} >
            <ModalHeader toggle={this.toggleModal}>Create a New City</ModalHeader>
              <CreateNewCity worldID={this.state.worldID} />
          </Modal>
          <Button className="category-button col-12" onClick={this.toggleModal} value={"2"} >
            New Town
          </Button>
          <Modal isOpen={this.state.modal === "2"} toggle={this.toggleModal} >
            <ModalHeader toggle={this.toggleModal}>Create a New Town</ModalHeader>
            <ModalBody>
              <CreateNewTown worldID={this.state.worldID} toggleModal={this.toggleModal} />
            </ModalBody>
          </Modal>
          <Button className="category-button col-12" onClick={this.toggleModal} value={"3"} >
            New Location
          </Button>
          <Modal isOpen={this.state.modal === "3"} toggle={this.toggleModal} >
            <ModalHeader toggle={this.toggleModal}>Create a New Location</ModalHeader>
            <ModalBody>
              <CreateNewLocation worldID={this.state.worldID} />
            </ModalBody>
          </Modal>
        </div>
      </div>
    )
  }
}

export default ChooseCategoryToCreate;