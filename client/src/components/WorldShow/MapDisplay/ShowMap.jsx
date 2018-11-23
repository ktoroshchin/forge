import React, { Component } from 'react';
import { ImageOverlay, Map } from 'react-leaflet';
import { Link } from 'react-router-dom'
import { Button, Modal, ModalHeader } from 'reactstrap'
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
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {
    const {worldID, isUser, creatorID} = this.props
    const findMap =
      gql`
        query {
          findWorldMap(world_id: "${worldID}"){
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
            if (loading) {
              return <div>Fetching</div>
            } else if (error) {
              return <div>Error</div>
            } else if (data.findWorldMap.length === 0 && isUser === true) {
              return (
                <div>
                <Button className="btn btn-outline-info btn-sm col-3" onClick={this.toggleModal}>Add a World Map</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggleModal} className={this.props.className}>
                  <ModalHeader toggle={this.toggleModal}>Submit Your World Map</ModalHeader>
                  <WorldMapSubmit worldID={worldID} />
                </Modal>
                </div>
                )
            } else {
              return (
               <div key={data.findWorldMap.id} className="showMap">
                  <Map
                    id="map"
                    crs={L.CRS.Simple}
                    minZoom={-1}
                    maxZoom={2}
                    bounds={[[0, 0], [data.findWorldMap.height, data.findWorldMap.width]]}
                    center={[data.findWorldMap.height/2, data.findWorldMap.width/2]}
                    zoom={1}
                    >
                    <ImageOverlay
                      url={data.findWorldMap.url}
                      bounds={[[0, 0], [data.findWorldMap.height, data.findWorldMap.width]]}
                      />
                    <ShowMarkers mapID={data.findWorldMap.id} isUser={isUser} />
                  </Map>
                  {isUser === true &&
                    <div className="mapEditButtons">
                      <Link
                        className="col-3 p-0"
                        to={{
                          pathname: "/edit-map",
                          state: {
                            worldID,
                            creatorID,
                          }
                        }}
                      >
                        <Button className="btn btn-outline-warning btn-sm col-3">Edit Map</Button>
                      </Link>
                    </div>
                  }
                </div>
                )
            }
          }}
        </Query>
      </div>
    );
  }
}