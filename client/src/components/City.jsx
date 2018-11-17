import React from "react";
import {ListGroupItem, ListGroup} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const findCity =
  gql`
    query {
     findCityById(id: "4fe96c13-e6e1-4895-a95c-eec79edcee2f") {
       id
       name
       population
       government
       description
    }
}`;

function City() {
  return (
    <div>
      <Query query={findCity}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (
            <ListGroup>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findCityById.name}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findCityById.population}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findCityById.government}</ListGroupItem>
              <ListGroupItem tag="a" className="listItem" href="#" action>{data.findCityById.description}</ListGroupItem>
            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default City;
