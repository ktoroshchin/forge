import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {ListGroupItem} from 'reactstrap';

function LocationList({worldID, setValue, setLocationID}) {
  const findLocations =
  gql`
  query {
    findMarkers(world_id: "${worldID}", category: "Location"){
      id
      name
    }
  }`;
  return (
    <div>
      <Query query={findLocations}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findMarkers.map(({ id, name }) => (
            <ListGroupItem key={id} onClick={()=>{setValue("Location"); setLocationID(id)}} action>{name}</ListGroupItem>
          )));
        }}
      </Query>
    </div>
  );
}

export default LocationList;

