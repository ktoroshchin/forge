import React, { Component, createRef } from 'react';
import { ImageOverlay, Map, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';
import NewMarkerForm from './MapEdit/NewMarkerForm'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import ShowMarkers from './ShowMarkers'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class EditMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 512,
        lng: 1024,
      },
      zoom: 1,
      activeMarker: null,
    };
    this.refMarker = createRef()
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  addMarker = (height, width) => {
    this.setState({activeMarker: {
      lat: height/2,
      lng: width/2,
    }})
  }

  updateMarker = () => {
    const marker = this.refMarker.current
    if (marker != null) {
      this.setState({
        activeMarker: marker.leafletElement.getLatLng(),
      })
    }
  }

  updatePosition = () => {
    const marker = this.refmarker.current
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng(),
      })
    }
  }

  submitMarker = () => {
    const marker = this.refMarker.current
    if (marker != null) {
     this.setState({
        activeMarker: null,
      })
      console.log('Marker Submitted')
    }
  }

  render () {
    const worldID = this.props.location.state.worldID
    const findMap =
      gql`
        query {
          findMapsByWorldId(world_id: "${worldID}"){
            id
            url
            width
            height
          }
        }`;
    return (
      <div>
        <Query query={findMap}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (
              data.findMapsByWorldId.map(({ id, url, height, width }) => (
                <div key={id}>
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
                    {this.state.activeMarker !== null &&
                      <Marker
                        draggable={true}
                        onDragend={this.updateMarker}
                        position={this.state.activeMarker}
                        ref={this.refMarker}
                        >
                        <Popup minWidth={90}>
                          <NewMarkerForm
                            submitMarker={this.submitMarker}
                            coords={this.state.activeMarker}
                            worldID={worldID}
                            mapID={id}
                          />
                        </Popup>
                      </Marker>
                    }
                    <ShowMarkers mapid={id} />
                  </Map>
                  {this.state.activeMarker === null &&
                    <button onClick={() => {this.addMarker(height, width)}}>
                      New Marker
                    </button>
                  }
                </div>
            )));
          }}
          </Query>
      </div>
    );
  }
}