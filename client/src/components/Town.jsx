import React from "react";
import {ListGroupItem, ListGroup} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const findTown =
  gql`
    query {
     findTownById(id: "9ffa36a3-0425-42ed-898e-a622267898c4") {
       id
       name
       population
       government
       description
    }
}`;

function Town() {
  return (
    <div>
      <Query query={findTown}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (
            <ListGroup>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findTownById.name}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findTownById.population}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findTownById.government}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findTownById.description}</ListGroupItem>
            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default Town