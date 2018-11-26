import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Jumbotron } from 'reactstrap'

import Element from './ElementInfo'

export default function SearchElementList() {
  const searchMarkers = gql`
    query ($world_id: ID!, $name: String!){
      searchMarkers(world_id: $world_id, name: $name) {
        id
      }
    }`;
  const world_id = "9a967301-3467-4197-9e5e-99769f4ba13b";
  const name = "Specter";
  return (
    <div className="container page">
      <h2 className="header default">Search</h2>
      <div>
        <Query query={searchMarkers} variables={{ world_id, name }}>
          {
            ({ loading, error, data }) => {
              if (loading) {
                return <div>Fetching</div>
              } else if (error) {
                return <div>Error</div>
              } else if (data.searchMarkers.length === 0) {
                  return <Jumbotron className="jumbotron default">No Worlds</Jumbotron>
              } else {
                return (data.searchMarkers.map(({ id }) => (
                  <Element
                    key={id}
                    markerID={id}
                  />
                )));
              }
            }
          }
        </Query>
      </div>
    </div>
  );
}
