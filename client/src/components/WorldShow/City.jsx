import React, {Component} from "react";
import {ListGroupItem, ListGroup, Button, Modal, ModalHeader} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditCity from './EditElement/EditCity'

export default class City extends Component {
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
    const findCity =
    gql`
    query {
      findMarkers(category: "City", id: "${this.props.cityID}") {
        id
        name
        population
        government
        description
      }
    }`;
    return (
      <div>
        <Query query={findCity}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (
              <ListGroup>
                <ListGroupItem className="listItem" action><span className="categoryName">Name</span><span>: </span>{data.findMarkers[0].name}</ListGroupItem>
                <ListGroupItem className="listItem" action><span className="categoryName">Population</span><span>: </span>{data.findMarkers[0].population}</ListGroupItem>
                <ListGroupItem className="listItem" action><span className="categoryName">Government</span><span>: </span>{data.findMarkers[0].government}</ListGroupItem>
                <ListGroupItem className="listItem" action><span className="categoryName">Description</span><span>: </span>{data.findMarkers[0].description}</ListGroupItem>
                {this.state.isUser &&
                  <div>
                  <Button className="btn btn-success add-world col-md-12" onClick={this.toggleModal}>Edit City</Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Edit City</ModalHeader>
                      <EditCity
                        toggleModal={this.toggleModal}
                        cityID={this.state.cityID}
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
