import React, { Component, createRef } from 'react';
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
      activeMarker: null,
      markerData: [
      {
        id: 1,
        coords: {
          lat: 471.5,
          lng: 396.5,
        },
      },
      {
        id: 2,
        coords: {
          lat: 675,
          lng: 379,
        },
      },
      {
        id: 3,
        coords: {
          lat: 640,
          lng: 478,
        },
      },
      {
        id: 4,
        coords: {
          lat: 688.5,
          lng: 1037.5,
        },
      },
      ],
    };
    this.refMarker = createRef()
  }

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  addMarker = (event) => {
    this.setState({activeMarker: this.state.center})
  }

  updateMarker = () => {
    const marker = this.refMarker.current
    if (marker != null) {
      this.setState({
        activeMarker: marker.leafletElement.getLatLng(),
      })
    }
  }

  submitMarker = () => {
    const marker = this.refMarker.current
    if (marker != null) {
      const markerID = marker.leafletElement._leaflet_id
      const coords = marker.leafletElement._latlng
      const newMarker = {
        id: markerID,
        coords: coords,
      }
      const {markerData} = this.state
      markerData.push(newMarker)
      this.setState({
        activeMarker: null,
        markerData,
      })
      console.log('Marker Submitted')
    }
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
          >
          <ImageOverlay
            url='http://www.online-tabletop.com/wp-content/uploads/2017/01/tutoriala.jpg'
            bounds={bounds}
            />
          {this.state.activeMarker !== null &&
            <Marker
              draggable={this.state.draggable}
              onDragend={this.updateMarker}
              position={this.state.activeMarker}
              ref={this.refMarker}
              >
              <Popup minWidth={90}>
                <button onClick={this.submitMarker}>
                  Submit Marker
                </button>
              </Popup>
            </Marker>
          }

          {this.state.markerData.map((element) =>
            <Marker
              key={element.id}
              position={element.coords}
              >
              <Popup>
                <span>
                  {element.id}
                </span>
              </Popup>
            </Marker>
          )}
        </Map>
      {this.state.activeMarker === null &&
        <button onClick={this.addMarker}>
          New Marker
        </button>
      }
      </div>
    );
  }
}