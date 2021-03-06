import React, { Component } from "react";
import { Marker, Popup } from 'react-leaflet';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, ListGroup, ListGroupItem, Modal, ModalHeader, ModalBody } from 'reactstrap';

import ElementInfo from "../ElementInfo";

export default class ShowMarkers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      markerID: null,
      markerName: null,
    };
  }

  toggleModal = (markerID, markerName) => {
    this.setState({
      modal: !this.state.modal,
      markerID,
      markerName,
    });
  }

  handleMutationSubmit = (postMutation) => {
    return postMutation()
      .then((data) => {
        window.location.reload();
      })
      .catch((error) => {
        alert("Issue with marker creation!")
      })
  }

  render = () => {
    const { mapID, isUser } = this.props
    const findMarkers = gql`
          query{
            findMarkers(map_id:"${mapID}"){
              id
              longitude
              latitude
              category
              name
              description
            }
          }`;
    const POST_MUTATION = gql`
      mutation (
        $id: ID!){
        removeMarkerById(
          id: $id)
      }`
    return (
      <div>
        <Query query={findMarkers}>
          {
            ({ loading, error, data }) => {
              if (loading) {
                return <div>Fetching</div>
              } else if (error) {
                return <div>Error</div>
              } else {
                return (
                  data.findMarkers.map(({ id, latitude, longitude, category, name, description }) => (
                  <Marker
                    key={id}
                    position={[latitude, longitude]}
                  >
                    <Popup>
                      <ListGroup>
                        <ListGroupItem className="listItem">
                          <strong>Name</strong>: {name}
                        </ListGroupItem>
                        {description !== null &&
                          <ListGroupItem className="listItem">
                            {description.length <= 250 &&
                            <span>
                              <strong>Description</strong>: {description}
                            </span>
                            }
                            {description.length > 250 &&
                            <span>
                              <strong>Description</strong>: {description.slice(0, 249)}...
                            </span>
                            }
                          </ListGroupItem>
                        }
                      </ListGroup>
                      <br/>
                      <div className="justified">
                        <Button
                          color="info"
                          size="sm"
                          onClick={() => {this.toggleModal(id, name)}}
                        >
                          More Details
                        </Button>
                        {isUser === true &&
                          <Mutation
                            mutation={POST_MUTATION}
                            variables={{"id": id}}
                          >
                            {(postMutation) =>
                              <Button
                                color="danger"
                                size="sm"
                                onClick={() => {this.handleMutationSubmit(postMutation)}}
                              >
                                Delete
                              </Button>
                            }
                          </Mutation>
                        }
                      </div>
                    </Popup>
                  </Marker>
                  ))
                );
              }
            }
          }
        </Query>
        <Modal
          className={this.props.className}
          toggle={this.toggleModal}
          isOpen={this.state.modal}
        >
          <ModalHeader toggle={this.toggleModal}>
            Details of {this.state.markerName}
          </ModalHeader>
          <ModalBody>
            <ElementInfo markerID={this.state.markerID} isUser={isUser} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
