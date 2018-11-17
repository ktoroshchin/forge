import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {ListGroupItem} from 'reactstrap';

const findTowns =
  gql`
  query {
    findTownsByWorldId(world_id: "2fd0df5b-5623-497a-bb21-3d5d9144f618") {
      id
      name
    }
  }`;

function TownList() {
  return (
    <div>
      <Query query={findTowns}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findTownsByWorldId.map(({ id, name }) => (
            <ListGroupItem tag="a" className="listItem" href="#" action>{name}</ListGroupItem>
          )));
        }}
      </Query>
    </div>
  );
}

export default TownList;

