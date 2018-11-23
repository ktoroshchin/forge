import React, {Component} from "react";
import {ListGroupItem, ListGroup, Button, Modal, ModalHeader} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditElement from './EditElement/EditElement'

export default class Element extends Component {
  state = {
    modal: false
  };
  toggleModal = this.toggleModal.bind(this);
  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    const {isUser, markerID} = this.props
    const findElement =
    gql`
    query {
      findMarkers(id: "${markerID}") {
        id
        name
        category
        population
        government
        description
      }
    }`;
    return (
      <div>
        <Query query={findElement}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (data.findMarkers.map(({ id, name, category, population, government, description }) => (
              <div key={id}>
              {category === "Location" &&
              <ListGroup>
                <ListGroupItem className="listItem default">
                  <span className="categoryName">Name</span>
                  <span>: </span>
                  {name}
                </ListGroupItem>
                <ListGroupItem className="listItem default">
                  <span className="categoryName">Description</span>
                  <span>: </span>{description}
                </ListGroupItem>
              </ListGroup>
              }
              {category !== "Location" &&
              <ListGroup>
                <ListGroupItem className="listItem default">
                  <span className="categoryName">Name</span>
                  <span>: </span>
                  {name}
                </ListGroupItem>
                <ListGroupItem className="listItem default">
                  <span className="categoryName">Population</span>
                  <span>: </span>{population}
                </ListGroupItem>
                <ListGroupItem className="listItem default">
                  <span className="categoryName">Government</span>
                  <span>: </span>{government}
                </ListGroupItem>
                <ListGroupItem className="listItem default">
                  <span className="categoryName">Description</span>
                  <span>: </span>{description}
                </ListGroupItem>
              </ListGroup>
              }
              {isUser &&
              <div>
                <Button
                  className="btn btn-success add-world col-xs-6 col-sm-4 col-md-4 col-lg-4"
                  onClick={this.toggleModal}>
                  Edit {category}
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                  <ModalHeader className="default" toggle={this.toggleModal}>Edit {category}</ModalHeader>
                    <EditElement
                      toggleModal={this.toggleModal}
                      markerID={id}
                          />
                </Modal>
              </div>
              }
              </div>
            )));
          }}
        </Query>
      </div>
    );
  }
}
