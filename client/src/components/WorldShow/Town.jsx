import React from "react";
import {ListGroupItem, ListGroup} from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';



function Town({townID}) {
  const findTown =
  gql`
  query {
    findTownById(id: "${townID}") {
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
            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default Town