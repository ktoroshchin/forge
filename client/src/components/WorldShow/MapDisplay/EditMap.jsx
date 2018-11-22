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

export default class EditMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMarker: null,
      modal: false,
      deleteModal: false,
    };
    this.refMarker = createRef()
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleDeleteModal() {
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

  backToView = () => {
    window.history.back();
  }

  componentWillMount() {
    if (!this.props.location.state) {
      return window.location.href = '/'
    }
  }

  render () {
    const mapID = this.props.location.state.ID;
    const {worldID, creatorID} = this.props.location.state;

    const findMap =
      gql`
        query {
          findMaps(id: "${mapID}"){
            id
            world_id
            url
            width
            height
          }
        }`;
    return (
      <div className="editMap container mt-3">
        <Query query={findMap}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (
              data.findMaps.map(({ id, world_id, url, height, width }) => (
                <div
                  key={id}
                  className="h-100"
                  >
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
                              worldID={world_id}
                              mapID={id}
                            />
                          </Modal>
                        </Popup>
                      </Marker>
                    }
                    <ShowMarkers mapID={id} isUser={true} />
                  </Map>
                  <div className="d-flex justify-content-between">
                    <Button
                      className="btn btn-outline-info col-sm-12 col-md-4 col-lg-3"
                      onClick={() => this.backToView()}
                    >
                      Back to World View
                    </Button>
                    {this.state.activeMarker === null &&
                      <Button
                        className="btn btn-outline-success col-sm-12 col-md-4 col-lg-3"
                        onClick={() => {this.addMarker(height, width)}}
                      >
                        New Marker
                      </Button>
                    }
                    {this.state.activeMarker !== null &&
                      <Button
                        className="btn btn-outline-success col-sm-12 col-md-4 col-lg-3"
                        disabled
                      >
                        New Marker
                      </Button>
                    }
                    <Button
                      className="btn btn-outline-danger col-sm-12 col-md-4 col-lg-3"
                      onClick={this.toggleDeleteModal}
                    >
                      Delete Map
                    </Button>
                    <Modal isOpen={this.state.deleteModal} toggle={this.toggleDeleteModal} className={this.props.className}>
                      <ModalHeader toggle={this.toggleDeleteModal}>Delete Your World Map</ModalHeader>
                      <WorldMapDelete worldID={worldID} creatorID={creatorID} mapID={id} />
                    </Modal>
                  </div>
                </div>
            )));
          }}
          </Query>

      </div>
    );
  }
}