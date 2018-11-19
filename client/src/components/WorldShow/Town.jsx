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
              <ListGroupItem className="listItem">{data.findTownById.name}</ListGroupItem>
              {data.findTownById.population !== null && <ListGroupItem className="listItem">{data.findTownById.population}</ListGroupItem> }
              {data.findTownById.government !== null && <ListGroupItem className="listItem">{data.findTownById.government}</ListGroupItem> }
              {data.findTownById.description !== null && <ListGroupItem className="listItem">{data.findTownById.description}</ListGroupItem> }
            </ListGroup>
          );
        }}
      </Query>
    </div>
  );
}

export default Town