import React, { Component } from "react";
import { Marker, Popup } from 'react-leaflet';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button } from 'reactstrap';

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
              category
              longitude
              latitude
              name
              population
              government
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
          return (data.findMarkers.map(({ id, latitude, longitude, name }) => (
             <Marker
                  key={id}
                  position={[latitude, longitude]}
                  >
                  <Popup>
                    <span>
                      {name}
                    </span>
                    <br/>
                    <br/>
                    {isUser === true &&
                      <Mutation
                        mutation={POST_MUTATION}
                        variables={{
                          "id": id}}>
                        {(postMutation, data, error) =>
                        <Button color="danger" onClick={(event)=>{postMutation()
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
