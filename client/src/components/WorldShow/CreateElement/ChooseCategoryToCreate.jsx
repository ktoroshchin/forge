import React,  { Component } from "react";
import { ListGroupItem, Button, Modal, ModalHeader } from 'reactstrap';
import AddNewElement from './AddNewElement'

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
            <AddNewElement category="City" worldID={this.state.worldID} />
          </Modal>
          <Button className="category-button col-12" onClick={this.toggleModal} value={"2"} >
            New Town
          </Button>
          <Modal isOpen={this.state.modal === "2"} toggle={this.toggleModal} >
            <ModalHeader toggle={this.toggleModal}>Create a New Town</ModalHeader>
            <AddNewElement category="Town" worldID={this.state.worldID} toggleModal={this.toggleModal} />
          </Modal>
          <Button className="category-button col-12" onClick={this.toggleModal} value={"3"} >
            New Location
          </Button>
          <Modal isOpen={this.state.modal === "3"} toggle={this.toggleModal} >
            <ModalHeader toggle={this.toggleModal}>Create a New Location</ModalHeader>
            <AddNewElement category="Location" worldID={this.state.worldID} />
          </Modal>
        </div>
      </div>
    )
  }
}

export default ChooseCategoryToCreate;