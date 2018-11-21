import React from "react";
import {ListGroupItem, ListGroup, Button} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from "react-router-dom";



function Location({locationID, isUser}) {
  const findLocation =
  gql`
  query {
    findMarkers(id: "${locationID}"){
      id
      name
      description
      population
      government
    }
  }`;
  return (
    <div>
      <Query query={findLocation}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (
            <ListGroup>
              <ListGroupItem className="listItem"><span className="categoryName">Name</span><span>: </span>{data.findMarkers[0].name}</ListGroupItem>
              <ListGroupItem className="listItem"><span className="categoryName">Description</span><span>: </span>{data.findMarkers[0].description}</ListGroupItem>
              {isUser && <Link to={{pathname: "/edit-location", state: {locationID: locationID}}}>
                <Button className="btn btn-success add-world col-md-12">Edit Location</Button>
                </Link>}
            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default Location;
