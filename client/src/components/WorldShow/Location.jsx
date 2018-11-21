import React, {Component} from "react";
import {ListGroupItem, ListGroup, Button, Modal, ModalHeader} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditLocation from './EditElement/EditLocation'

export default class Location extends Component {
  state = {
    isUser: this.props.isUser,
    modal: false
  };
  toggleModal = this.toggleModal.bind(this);
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const findLocation =
    gql`
    query {
      findMarkers(category:"Location", id: "${this.props.locationID}"){
        id
        name
        description
      }
    }`;
    return (
      <div>
        <Query query={findLocation}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (
              <ListGroup>
                <ListGroupItem className="listItem"><span className="categoryName">Name</span><span>: </span>{data.findMarkers[0].name}</ListGroupItem>
                <ListGroupItem className="listItem"><span className="categoryName">Description</span><span>: </span>{data.findMarkers[0].description}</ListGroupItem>
                {this.state.isUser &&
                  <div>
                  <Button className="btn btn-success add-world col-md-12" onClick={this.toggleModal}>Edit Location</Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Edit Location</ModalHeader>
                      <EditLocation
                        toggleModal={this.toggleModal}
                        locationID={data.findMarkers[0].id}
                            />
                  </Modal>
                  </div>
                }
              </ListGroup>
            );
          }}
        </Query>
      </div>
    );
  }
}
