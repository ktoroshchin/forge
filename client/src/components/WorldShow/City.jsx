import React from "react";
import {ListGroupItem, ListGroup, Button} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from "react-router-dom";



function City({cityID, isUser}) {
  const findCity =
  gql`
  query {
    findMarkers(category: "City", id: "${cityID}") {
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
              <ListGroupItem className="listItem" action><span className="categoryName">Name</span><span>: </span>{data.findMarkers[0].name}</ListGroupItem>
              <ListGroupItem className="listItem" action><span className="categoryName">Population</span><span>: </span>{data.findMarkers[0].population}</ListGroupItem>
              <ListGroupItem className="listItem" action><span className="categoryName">Government</span><span>: </span>{data.findMarkers[0].government}</ListGroupItem>
              <ListGroupItem className="listItem" action><span className="categoryName">Description</span><span>: </span>{data.findMarkers[0].description}</ListGroupItem>
              {isUser && <Link to={{pathname: "/edit-city", state: {cityID: cityID}}}>
                <Button className="btn btn-success add-world col-md-12">Edit City</Button>
                </Link>}
            </ListGroup>

          );
        }}
      </Query>
    </div>
  );
}

export default City;
