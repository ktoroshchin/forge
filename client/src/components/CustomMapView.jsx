import React, { Component } from 'react';
import { ImageOverlay, Map, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.js';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
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
      zoom: 1,
      draggable: true,
      dimensions: [1024, 2048],
      markerData: [],
    };
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  addMarker = (event) => {
    const {markerData} = this.state
    const coords = event.latlng
    markerData.push(coords)
    this.setState({markerData})
  }

  updateMarker = (event) => {
    console.log(event)
  }

  submitMarkers = () => {
    console.log('Hello!')
  }


  render () {
    const boundOrigin = [0, 0];
    const bounds = [boundOrigin, this.state.dimensions];
    const position = [this.state.center.lat, this.state.center.lng]

    return (
      <div>
        <Map
          id="map"
          crs={L.CRS.Simple}
          minZoom={-1}
          bounds={bounds}
          center={position}
          zoom={this.state.zoom}
          onClick={this.addMarker}
          >
          <ImageOverlay
            url='http://www.online-tabletop.com/wp-content/uploads/2017/01/tutoriala.jpg'
            bounds={bounds}
            />
          {this.state.markerData.map((element, index) =>
            <Marker
              key={index}
              position={element}
              draggable={this.state.draggable}
              onDragend={this.updateMarker}
              >
              <Popup>
                <span onClick={this.toggleDraggable}>
                  {this.state.draggable ? `Hello` : 'MARKER FIXED'}
                </span>
              </Popup>
            </Marker>
          )}
        </Map>
        <button onClick={this.submitMarkers}>
          Submit
        </button>
      </div>
    );
  }
}