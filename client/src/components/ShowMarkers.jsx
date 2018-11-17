import React, { Component } from "react";
import { Marker, Popup } from 'react-leaflet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class ShowMarkers extends Component {
  render () {
    const {mapid} = this.props
    const findMarkers =
        gql`
          query {
            findMarkersByMapId(map_id: "${mapid}"){
              id
              latitude
              longitude
            }
          }`;
    return (
      <Query query={findMarkers}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findMarkersByMapId.map(({ id, latitude, longitude }) => (
             <Marker
                  key={id}
                  position={[longitude, latitude]}
                  >
                  <Popup>
                    <span>
                      {id}
                    </span>
                  </Popup>
                </Marker>
              )));
        }}
      </Query>
    );
  }
}
