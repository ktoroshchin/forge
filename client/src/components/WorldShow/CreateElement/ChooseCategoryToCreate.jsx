import React,  { Component } from "react";
import { Button, Modal, ModalHeader, Card, CardTitle, CardDeck } from 'reactstrap';

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
    const cardStyle = {
      backgroundColor: '#D3D3D3',
      borderColor: '#D3D3D3',
      boxShadow: '10px 10px 5px 0px black'
    }
    return (
      <div>
        <CardDeck className="mb-4">
          <Card body style={cardStyle} className="text-center default">
            <CardTitle>City</CardTitle>
            <Button color="primary" onClick={this.toggleModal} value={"City"} >
              Create New
            </Button>
          </Card>
          <Card body style={cardStyle} className="text-center default">
            <CardTitle>Town</CardTitle>
            <Button color="primary" onClick={this.toggleModal} value={"Town"} >
              Create New
            </Button>
          </Card>
          <Card body style={cardStyle} className="text-center default">
            <CardTitle>Location</CardTitle>
            <Button color="primary" onClick={this.toggleModal} value={"Location"} >
              Create New
            </Button>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card body style={cardStyle} className="text-center default">
            <CardTitle>People of Importance</CardTitle>
            <Button color="primary" disabled>
              Create New
            </Button>
          </Card>
          <Card body style={cardStyle} className="text-center default">
            <CardTitle>Place of Importance</CardTitle>
            <Button color="primary" disabled>
              Create New
            </Button>
          </Card>
        </CardDeck>
        <Modal isOpen={this.state.modal} toggle={this.toggleModal} >
          <ModalHeader className="default" toggle={this.toggleModal}>Create a New {this.state.modal}</ModalHeader>
          <AddNewElement category={this.state.modal} worldID={this.state.worldID} toggleModal={this.toggleModal} />
        </Modal>
      </div>
    )
  }
}
