import React, { Component, createRef } from 'react';
import { ImageOverlay, Map, Marker, Popup } from 'react-leaflet';
import { Button, Modal, ModalHeader } from 'reactstrap'
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
      activeMarker: null,
      modal: false,
    };
    this.refMarker = createRef()
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
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
        modal: false,
      })
    }
  }

  componentWillMount() {
    if (!this.props.location.state) {
      return window.location.href = '/'
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
                          <Button color="secondary" onClick={this.toggleModal}>Edit</Button>
                          <Button color="secondary" onClick={this.submitMarker}>Cancel</Button>

                          <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                          <ModalHeader toggle={this.toggleModal}>Link to a...</ModalHeader>
                            <NewMarkerForm
                              toggleModal={this.toggleModal}
                              coords={this.state.activeMarker}
                              worldID={worldID}
                              mapID={id}
                            />
                          </Modal>
                        </Popup>
                      </Marker>
                    }
                    <ShowMarkers mapid={id} isUser={true} />
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