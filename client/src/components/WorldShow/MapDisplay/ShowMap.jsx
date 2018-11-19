import React, { Component } from 'react';
import { ImageOverlay, Map } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ShowMarkers from './ShowMarkers'
import WorldMapSubmit from './WorldMapSubmit'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class ShowMap extends Component {
  render () {
    const {worldID, userID} = this.props
    const findMap =
      gql`
        query {
          findMapsByWorldId(world_id: "${worldID}"){
            id
            url
            width
            height
            world_map
          }
        }`;
    const findUserID =
      gql`
        query {
          findWorldById(id: "${worldID}"){
            id
            creator_id
          }
        }`;
    return (
      <div>
        <Query query={findMap}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            if (data.findMapsByWorldId.length === 0) return <WorldMapSubmit worldID={worldID} />
            return (
              data.findMapsByWorldId.map(({ id, url, height, width, world_map }) => (
                <div key={id}>
                {world_map === true &&
                  <Map
                    id="map"
                    crs={L.CRS.Simple}
                    minZoom={-1}
                    maxZoom={2}
                    bounds={[[0, 0], [height, width]]}
                    center={[height/2, width/2]}
                    zoom={1}
                    >
                    <ImageOverlay
                      url={url}
                      bounds={[[0, 0], [height, width]]}
                      />
                    <ShowMarkers mapid={id} />
                  </Map>
                }
                </div>
            )));
          }}
        </Query>
        <Query query={findUserID}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (
            <div>
              {userID === data.findWorldById.creator_id &&
             <span>Edit Button Goes Here</span>

              }
              </div>
              );
        }}
      </Query>
      </div>
    );
  }
}