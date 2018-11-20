import React from "react";
import {ListGroupItem, ListGroup} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from "react-router-dom";



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
              <ListGroupItem className="listItem" action><span className="categoryName">Name</span><span>: </span>{data.findCityById.name}</ListGroupItem>
              <ListGroupItem className="listItem" action><span className="categoryName">Population</span><span>: </span>{data.findCityById.population}</ListGroupItem>
              <ListGroupItem className="listItem" action><span className="categoryName">Government</span><span>: </span>{data.findCityById.government}</ListGroupItem>
              <ListGroupItem className="listItem" action><span className="categoryName">Description</span><span>: </span>{data.findCityById.description}</ListGroupItem>
              <Link to={{pathname: "/edit-city", state: {cityID: cityID}}}>Edit City</Link>
            </ListGroup>

          );
        }}
      </Query>
    </div>
  );
}

export default City;
