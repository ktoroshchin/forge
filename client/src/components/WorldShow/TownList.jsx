import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {ListGroupItem} from 'reactstrap';

function TownList({worldID, setValue, setLocationID}) {
  const findTowns =
  gql`
  query {
    findTownsByWorldId(world_id: "${worldID}") {
      id
      name
    }
  }`;
  return (
    <div>
      <Query query={findTowns}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findTownsByWorldId.map(({ id, name }) => (
            <ListGroupItem key={id} onClick={()=>{setValue("Town"); setLocationID(id)}} action>{name}</ListGroupItem>
          )));
        }}
      </Query>
    </div>
  );
}

export default TownList;

