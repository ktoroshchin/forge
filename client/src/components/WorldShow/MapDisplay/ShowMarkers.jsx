import React, { Component } from "react";
import { Marker, Popup } from 'react-leaflet';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

export default class ShowMarkers extends Component {
  render () {
    const {mapid} = this.props
    const findCityMarkers = gql`
          query{
            cities: findCitiesByMapId(map_id:"${mapid}"){
              id
              longitude
              latitude
              name
            }
          }`;
  const findTownMarkers = gql`
          query{
            towns: findTownsByMapId(map_id:"${mapid}"){
              id
              longitude
              latitude
              name
            }
          }`;
  const findLocationMarkers = gql`
          query{
            locations: findLocationsByMapId(map_id:"${mapid}"){
              id
              longitude
              latitude
              name
            }
          }`;
    return (
      <div>
      <Query query={findCityMarkers}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.cities.map(({ id, latitude, longitude, name }) => (
             <Marker
                  key={id}
                  position={[latitude, longitude]}
                  >
                  <Popup>
                    <span>
                      {name}
                    </span>
                    <br/>
                    <br/>
                    <span>
                      {id}
                    </span>
                  </Popup>
                </Marker>
              )));
        }}
      </Query>
      <Query query={findTownMarkers}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.towns.map(({ id, latitude, longitude, name }) => (
             <Marker
                  key={id}
                  position={[latitude, longitude]}
                  >
                  <Popup>
                    <span>
                      {name}
                    </span>
                    <br/>
                    <br/>
                    <span>
                      {id}
                    </span>
                  </Popup>
                </Marker>
              )));
        }}
      </Query>
      <Query query={findLocationMarkers}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.locations.map(({ id, latitude, longitude, name }) => (
             <Marker
                  key={id}
                  position={[latitude, longitude]}
                  >
                  <Popup>
                    <span>
                      {name}
                    </span>
                    <br/>
                    <br/>
                    <span>
                      {id}
                    </span>
                  </Popup>
                </Marker>
              )));
        }}
      </Query>
      </div>
    );
  }
}
