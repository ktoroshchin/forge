import React,  { Component } from "react";
import { ListGroup,ListGroupItem, Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
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
      this.setState({
        modal: e.target.value
      });
    }




render(){
  return(
      <div>
        <div className="row ChooseCategoryToCreate">
          <ListGroupItem className="category text-center">Category</ListGroupItem>
            <Button className="category-button col-md-12 col-lg-12 col-xl-12" onClick={this.toggleModal} value={"1"} >
              Cities
            </Button>
            <Modal isOpen={this.state.modal === "1"} toggle={this.toggleModal} >
              <ModalHeader toggle={this.toggleModal}>Create a New City</ModalHeader>
                <CreateNewCity worldID={this.state.worldID} />
            </Modal>

            <Button className="category-button col-md-12 col-lg-12 col-xl-12" onClick={this.toggleModal} value={"2"} >
              Towns
            </Button>
            <Modal isOpen={this.state.modal === "2"} toggle={this.toggleModal} >
              <ModalHeader toggle={this.toggleModal}>Create a New Town</ModalHeader>
              <ModalBody>
                <CreateNewTown worldID={this.state.worldID} toggleModal={this.toggleModal} />
              </ModalBody>
            </Modal>

            <Button className="category-button col-md-12 col-lg-12 col-xl-12" onClick={this.toggleModal} value={"3"} >
              Locations
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