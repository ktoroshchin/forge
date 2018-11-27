import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Jumbotron, Button } from 'reactstrap'

import Element from './ElementInfo'

export default function SearchElementList({ worldID, search }) {
  const searchMarkers = gql`
    query ($world_id: ID!, $name: String!){
      searchMarkers(world_id: $world_id, name: $name) {
        id
      }
    }`;
  return (
    <div>
      <h1 className="header">Searching for "{search}"</h1>
      <Query query={searchMarkers} variables={{ 'world_id': worldID, 'name': search }}>
        {
          ({ loading, error, data }) => {
            if (loading) {
              return <div>Fetching</div>
            } else if (error) {
              return <div>Error</div>
            } else if (data.searchMarkers.length === 0) {
                return (
                  <div>
                    <Button onClick={()=>{window.location.reload()}} color="secondary" style={{margin: '1em',}}>Back</Button>
                    <Jumbotron className="jumbotron default">No Elements Found</Jumbotron>
                  </div>
                  )
            } else {
              return (data.searchMarkers.map(({ id }) => (
                <div key={id}>
                  <Element markerID={id} />
                  <br />
                </div>
              )));
            }
          }
        }
      </Query>
    </div>
  );
}
