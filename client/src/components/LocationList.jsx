import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {ListGroupItem} from 'reactstrap';

function LocationList({worldID, setValue, setLocationID}) {
  const findLocations =
  gql`
  query {
    findLocationsByWorldId(world_id: "${worldID}") {
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
          return (data.findLocationsByWorldId.map(({ id, name }) => (
            <ListGroupItem key={id} onClick={()=>{setValue("Location"); setLocationID(id)}} action>{name}</ListGroupItem>
          )));
        }}
      </Query>
    </div>
  );
}

export default LocationList;

