import React from "react";
import {ListGroupItem, ListGroup} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const findLocation =
  gql`
    query {
     findLocationById(id: "1ac24514-5a4c-48ed-a379-797c8865e4fb") {
       id
       marker_id
       world_id
       name
       description
    }
}`;

function Location() {
  return (
    <div>
      <Query query={findLocation}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (
            <ListGroup>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findLocationById.name}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findLocationById.description}</ListGroupItem>
            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default Location;
