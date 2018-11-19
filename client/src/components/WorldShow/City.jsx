import React from "react";
import {ListGroupItem, ListGroup} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';



function City({cityID}) {
  const findCity =
  gql`
  query {
    findCityById(id: "${cityID}") {
      id
      name
      population
      government
      description
    }
  }`;
  return (
    <div>
      <Query query={findCity}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (
            <ListGroup>
            <ListGroupItem className="listItem">{data.findCityById.name}</ListGroupItem>
            {data.findCityById.population !== null && <ListGroupItem className="listItem">{data.findCityById.population}</ListGroupItem> }
            {data.findCityById.government !== null && <ListGroupItem className="listItem">{data.findCityById.government}</ListGroupItem> }
            {data.findCityById.description !== null && <ListGroupItem className="listItem">{data.findCityById.description}</ListGroupItem> }

            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default City;
