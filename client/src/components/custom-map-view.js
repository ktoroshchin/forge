import React, { Component, createRef } from 'react';
import { ImageOverlay, Map, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import Leaflet from 'leaflet';

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class CustomMapExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 512,
        lng: 1024,
      },
      marker: {
        lat: 512,
        lng: 1024,
      },
      zoom: 1,
      draggable: true,
      dimensions: [],
    };
  }

  refmarker = createRef()

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  updatePosition = () => {
    const marker = this.refmarker.current
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng(),
      })
    }
  }

  render () {
    const boundOrigin = [0, 0];
    const imageSize = [1024, 2048];
    const bounds = [boundOrigin, imageSize];
    const position = [this.state.center.lat, this.state.center.lng]
    const markerPosition = [this.state.marker.lat, this.state.marker.lng]


    return (
      <div>
        <Map
          id="map"
          crs={Leaflet.CRS.Simple}
          minZoom={-1}
          bounds={bounds}
          center={position}
          zoom={this.state.zoom}
          >
          <ImageOverlay
            url='http://www.online-tabletop.com/wp-content/uploads/2017/01/tutoriala.jpg'
            bounds={bounds}
            />
          <Marker
            draggable={this.state.draggable}
            onDragend={this.updatePosition}
            position={markerPosition}
            ref={this.refmarker}
            >
            <Popup minWidth={90}>
            <span onClick={this.toggleDraggable}>
              {this.state.draggable ? `${markerPosition}` : 'MARKER FIXED'}
            </span>
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}