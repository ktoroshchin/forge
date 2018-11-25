import React, { Component } from "react";
import { ListGroupItem, ListGroup, Button, Modal, ModalHeader } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import EditElement from './EditElement/EditElement'

export default class Element extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggleEditModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleEditButton = (id, category) => {
    if (this.props.isUser) {
      return (
        <div>
          <Button
            outline
            size="sm"
            color="success"
            className="col-xs-6 col-sm-4 col-md-4 col-lg-4"
            onClick={this.toggleEditModal}>
            Edit {category}
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggleEditModal}>
            <ModalHeader className="default" toggle={this.toggleEditModal}>Edit {category}</ModalHeader>
              <EditElement
                toggleModal={this.toggleEditModal}
                markerID={id}
                    />
          </Modal>
        </div>
      )
    } else {
      return null
    }
  }

  render = () => {
    const { markerID } = this.props
    const findElement = gql`
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
      <Query query={findElement}>
        {
          ({ loading, error, data }) => {
            if (loading) {
              return <div>Fetching</div>
            } else if (error) {
              return <div>Error</div>
            } else {
              return (data.findMarkers.map(({ id, name, category, population, government, description }) => {
                if (category === "Location") {
                  return (
                    <div key={id}>
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
                      {this.toggleEditButton(id, category)}
                    </div>
                  )
                } else {
                  return (
                    <div key={id}>
                      <ListGroup>
                        <ListGroupItem className="listItem">
                          <span className="categoryName">Name</span>
                          <span>: </span>
                          {name}
                        </ListGroupItem>
                        <ListGroupItem className="listItem">
                          <span className="categoryName">Population</span>
                          <span>: </span>{population}
                        </ListGroupItem>
                        <ListGroupItem className="listItem">
                          <span className="categoryName">Government</span>
                          <span>: </span>{government}
                        </ListGroupItem>
                        <ListGroupItem className="listItem">
                          <span className="categoryName">Description</span>
                          <span>: </span>{description}
                        </ListGroupItem>
                      </ListGroup>
                      {this.toggleEditButton(id, category)}
                    </div>
                  )
                }
              }));
            }
          }
        }
      </Query>
    );
  }
}
