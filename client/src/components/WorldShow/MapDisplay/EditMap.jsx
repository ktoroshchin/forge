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
import WorldMapDelete from './WorldMapDelete'


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const newMarkerIcon = L.icon({
    iconUrl: require('./assets/location-pin.png'),
    iconSize: [35, 35],
    iconAnchor: [17.5, 35],
    popupAnchor: [0, -30],
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    shadowSize: [41, 41],
    shadowAnchor: [15, 40]
});

const buttonColSize = "col-sm-12 col-md-4 col-lg-3"

export default class EditMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: null,
      modal: false,
      deleteModal: false,
    };
    this.refMarker = createRef()
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleDeleteModal = () => {
    this.setState({
      deleteModal: !this.state.deleteModal
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

  handleAddMarkerButton = (height, width) => {
    if (!this.state.activeMarker) {
      return (
        <Button
          color="success"
          size="sm"
          className={buttonColSize}
          onClick={() => {this.addMarker(height, width)}}
        >
          New Marker
        </Button>
      )
    } else {
      return (
        <Button
          color="success"
          size="sm"
          className={buttonColSize}
          disabled
        >
          New Marker
        </Button>
      )
    }
  }

  backToView = () => {
    window.history.back();
  }

  componentWillMount = () => {
    if (!this.props.location.state) {
      return window.location.href = '/'
    }
  }

  render () {
    const { worldID, creatorID } = this.props.location.state;

    const findMap =
      gql`
        query {
          findWorldMap(world_id: "${worldID}"){
            id
            world_id
            url
            width
            height
          }
        }`;
    return (
      <div className="container page">
          <h2 className="header">World Map Edit</h2>
        <div className="info">
        <Query query={findMap}>
          {
            ({ loading, error, data }) => {
              if (loading) {
                return <div>Fetching</div>
              } else if (error) {
                return <div>Error</div>
              } else {
                const mapID = data.findWorldMap.id;
                const imgURL = data.findWorldMap.url;
                const height = data.findWorldMap.height;
                const width = data.findWorldMap.width;
                const bounds = [[0, 0], [height, width]];
                const center = [height/2, width/2];
                const maxBounds = [[-height/2, -width/2], [height*1.5, width*1.5]];
                return (
                    <div
                      key={mapID}
                      className="editMap"
                      >
                      <Map
                        id="editMap"
                        crs={L.CRS.Simple}
                        minZoom={-2}
                        maxZoom={2}
                        bounds={bounds}
                        center={center}
                        maxBounds={maxBounds}
                        >
                        <ImageOverlay
                          url={imgURL}
                          bounds={bounds}
                          />
                        {this.state.activeMarker !== null &&
                          <Marker
                            draggable={true}
                            onDragend={this.updateMarker}
                            position={this.state.activeMarker}
                            ref={this.refMarker}
                            icon={newMarkerIcon}
                            >
                            <Popup minWidth={90}>
                              <Button
                                outline
                                size="sm"
                                color="info"
                                onClick={this.toggleModal}
                              >
                                Edit
                              </Button>
                              <Button
                                outline
                                size="sm"
                                color="danger"
                                onClick={this.submitMarker}
                              >
                                Cancel
                              </Button>

                              <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                              <ModalHeader toggle={this.toggleModal}>Link to a...</ModalHeader>
                                <NewMarkerForm
                                  toggleModal={this.toggleModal}
                                  coords={this.state.activeMarker}
                                  worldID={worldID}
                                  mapID={mapID}
                                />
                              </Modal>
                            </Popup>
                          </Marker>
                        }
                        <ShowMarkers mapID={mapID} isUser={true} />
                      </Map>
                      <div className="d-flex justify-content-between">
                        <Button
                          color="info"
                          size="sm"
                          className={buttonColSize}
                          onClick={() => this.backToView()}
                        >
                          Back to World View
                        </Button>
                        {this.handleAddMarkerButton(height, width)}
                        <Button
                          color="danger"
                          size="sm"
                          className={buttonColSize}
                          onClick={this.toggleDeleteModal}
                        >
                          Delete Map
                        </Button>
                        <Modal
                          isOpen={this.state.deleteModal}
                          toggle={this.toggleDeleteModal}
                          className={this.props.className}
                        >
                          <ModalHeader
                            className="default"
                            toggle={this.toggleDeleteModal}
                          >
                            Delete Your World Map
                          </ModalHeader>
                            <WorldMapDelete worldID={worldID} creatorID={creatorID} mapID={mapID} />
                        </Modal>
                      </div>
                    </div>
                  )
                }
              }
            }
          </Query>
        </div>
      </div>
    );
  }
}