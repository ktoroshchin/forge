import React, { Component } from 'react';
import { ImageOverlay, Map } from 'react-leaflet';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
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
    const {worldID, isUser} = this.props
    const findMap =
      gql`
        query {
          findMaps(world_id: "${worldID}"){
            id
            url
            width
            height
            world_map
          }
        }`;
    return (
      <div>
        <Query query={findMap}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            if (data.findMaps.length === 0 && isUser === true) return <WorldMapSubmit worldID={worldID} />
            return (
              data.findMaps.map(({ id, url, height, width, world_map }) => (
               <div>
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
                    <ShowMarkers mapID={id} isUser={false} />
                  </Map>
                }
                </div>
                <div>
                  {isUser === true &&
                    <Link
                      to={{
                        pathname: "/edit-map",
                        state: {
                          ID: id,
                        }
                      }}
                    >
                      <Button>Edit Map</Button>
                    </Link>
                  }
                </div>
                </div>
            )));
          }}
        </Query>
      </div>
    );
  }
}