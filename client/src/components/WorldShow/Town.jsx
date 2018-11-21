import React, {Component} from "react";
import {ListGroupItem, ListGroup, Button, Modal, ModalHeader} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditTown from './EditElement/EditTown'

export default class Town extends Component {
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
    const findTown =
    gql`
    query {
      findMarkers(category: "Town", id: "${this.props.townID}") {
        id
        name
        population
        government
        description
      }
    }`;
    return (
      <div>
        <Query query={findTown}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (
              <ListGroup>
                <ListGroupItem className="listItem"><span className="categoryName">Name</span><span>: </span>{data.findMarkers[0].name}</ListGroupItem>
                <ListGroupItem className="listItem"><span className="categoryName">Population</span><span>: </span>{data.findMarkers[0].population}</ListGroupItem>
                <ListGroupItem className="listItem"><span className="categoryName">Government</span><span>: </span>{data.findMarkers[0].government}</ListGroupItem>
                <ListGroupItem className="listItem"><span className="categoryName">Description</span><span>: </span>{data.findMarkers[0].description}</ListGroupItem>
                {this.state.isUser &&
                  <div>
                  <Button className="btn btn-success add-world col-md-12" onClick={this.toggleModal}>Edit Town</Button>
                  <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Edit Town</ModalHeader>
                      <EditTown
                        toggleModal={this.toggleModal}
                        townID={data.findMarkers[0].id}
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