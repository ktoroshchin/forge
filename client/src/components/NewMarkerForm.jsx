import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class NewMarkerForm extends Component {
constructor(props) {
    super(props);
    this.state = {
      modal: false,
      dropdownOpen: false,
      value: "",
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.select = this.select.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText,
    },
    () => this.toggleModal())
  }

  render() {
    const {submitMarker} = this.props
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle caret>
            Select Category
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={this.select}>City</DropdownItem>
            <DropdownItem onClick={this.select}>Town</DropdownItem>
            <DropdownItem onClick={this.select}>Location</DropdownItem>
          </DropdownMenu>
        </Dropdown>
          {this.state.value === 'City' &&
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Choose City</ModalHeader>
            <ModalBody>
              List of Cities
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => {submitMarker()}}>
                Submit
              </Button>
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
            </Modal>
          }
          {this.state.value === 'Town' &&
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Choose Town</ModalHeader>
            <ModalBody>
              List of Towns
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => {submitMarker()}}>
                Submit
              </Button>
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
            </Modal>
          }
          {this.state.value === 'Location' &&
            <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
            <ModalHeader toggle={this.toggleModal}>Choose Location</ModalHeader>
            <ModalBody>
              List of Locations
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => {submitMarker()}}>
                Submit
              </Button>
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>
            </Modal>
          }
      </div>
    )
  }
}