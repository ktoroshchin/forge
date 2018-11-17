import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {ListGroupItem} from 'reactstrap';

const findLocations =
  gql`
  query {
    findLocationsByWorldId(world_id: "2fd0df5b-5623-497a-bb21-3d5d9144f618") {
      id
      name
    }
  }`;

function LocationList() {
  return (
    <div>
      <Query query={findLocations}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findLocationsByWorldId.map(({ id, name }) => (
            <ListGroupItem key={id} tag="a" className="listItem" href="#" action>{name}</ListGroupItem>
          )));
        }}
      </Query>
    </div>
  );
}

export default LocationList;

