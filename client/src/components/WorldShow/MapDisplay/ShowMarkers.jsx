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
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  deleteMarker() {
    console.log('Deleting Marker!')
  }
  render () {
    const {mapID, isUser} = this.props
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
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findMarkers.map(({ id, latitude, longitude, category, name, description }) => (
             <Marker
                  key={id}
                  position={[latitude, longitude]}
                  >
                  <Popup>
                    <ListGroup>
                      <ListGroupItem className="listItem"><strong>Name</strong>: {name}</ListGroupItem>
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
                    <Button className="btn btn-info btn-sm col-4" onClick={this.toggleModal}>More Details</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                      <ModalHeader toggle={this.toggleModal}>Details of {name}</ModalHeader>
                      <ModalBody>
                        <ElementInfo markerID={id} isUser={isUser} />
                      </ModalBody>
                    </Modal>
                    {isUser === true &&
                      <Mutation
                        mutation={POST_MUTATION}
                        variables={{
                          "id": id}}>
                        {(postMutation, data, error) =>
                        <Button className="btn btn-danger btn-sm col-4 offset-4" onClick={(event)=>{postMutation()
                          .then(()=>{window.location.reload()})
                          .catch((error) => {
                            alert('Error')
                          }
                        )}}>
                        Delete</Button>
                      }
                      </Mutation>
                    }
                  </Popup>
                </Marker>
              )));
        }}
      </Query>
      </div>
    );
  }
}
