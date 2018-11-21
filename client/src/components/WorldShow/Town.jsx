import React from "react";
import {ListGroupItem, ListGroup, Button} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from "react-router-dom";



function Town({townID, isUser}) {
  const findTown =
  gql`
  query {
    findMarkers(category: "Town", id: "${townID}") {
      id
      name
      population
      government
      description
    }
  }`;
  return (
    <div>
      <Query query={findTown}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (
            <ListGroup>
              <ListGroupItem className="listItem"  action><span className="categoryName">Name</span><span>: </span>{data.findTownById.name}</ListGroupItem>
              <ListGroupItem className="listItem"  action><span className="categoryName">Population</span><span>: </span>{data.findTownById.population}</ListGroupItem>
              <ListGroupItem className="listItem"  action><span className="categoryName">Government</span><span>: </span>{data.findTownById.government}</ListGroupItem>
              <ListGroupItem className="listItem"  action><span className="categoryName">Description</span><span>: </span>{data.findTownById.description}</ListGroupItem>
              {isUser && <Link to={{pathname: "/edit-town", state: {townID: townID}}}>
                <Button className="btn btn-success add-world col-md-12">Edit Town</Button>
                </Link>}
            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default Town