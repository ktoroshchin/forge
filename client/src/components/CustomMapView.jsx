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
      zoom: 1,
      draggable: true,
      dimensions: [],
      markerData: [],
    };
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  addMarker = (event) => {
    const {markerData} = this.state
    const markerID = event.target._leaflet_id
    const coords = event.latlng
    const newMarker = {
      id: markerID,
      coords: coords,
    }
    markerData.push(newMarker)
    this.setState({markerData})
  }

  updateMarker = (event) => {
    console.log(event.target)
    console.log(event.target._latlng)

    console.log(event.target._leaflet_id)
  }

  render () {
    const boundOrigin = [0, 0];
    const imageSize = [1024, 2048];
    const bounds = [boundOrigin, imageSize];
    const position = [this.state.center.lat, this.state.center.lng]

    return (
      <div>
        <Map
          id="map"
          crs={Leaflet.CRS.Simple}
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
          {this.state.markerData.map((element) =>
            <Marker
              key={element.id}
              position={element.coords}
              draggable={this.state.draggable}
              onDragend={this.updateMarker}
              ref={element.id}
              >
              <Popup>
                <span onClick={this.toggleDraggable}>
                  {this.state.draggable ? `Hello` : 'MARKER FIXED'}
                </span>
              </Popup>
            </Marker>
          )}
        </Map>
      </div>
    );
  }
}