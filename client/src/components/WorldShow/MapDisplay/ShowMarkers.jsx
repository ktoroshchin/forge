import React, { Component } from "react";
import { Marker, Popup } from 'react-leaflet';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

export default class ShowMarkers extends Component {
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
          return (data.findMarkers.map(({ id, latitude, longitude, name, description }) => (
             <Marker
                  key={id}
                  position={[latitude, longitude]}
                  >
                  <Popup>
                    <ListGroup>
                      <ListGroupItem className="listItem"><strong>Name</strong>: {name}</ListGroupItem>
                      {description !== null &&
                        <ListGroupItem className="listItem">
                        {description.length <= 100 &&
                        <span>
                          <strong>Description</strong>: {description}
                        </span>
                        }
                        {description.length >= 250 &&
                        <span>
                          <strong>Description</strong>: {description}
                        </span>
                        }
                        </ListGroupItem>
                      }
                    </ListGroup>
                    <br/>
                    <Button className="btn btn-info btn-sm col-4">More Details</Button>
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
