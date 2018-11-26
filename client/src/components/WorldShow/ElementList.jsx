import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ListGroupItem } from 'reactstrap';

export default function ElementList({worldID, category, setValue, setLocationID}) {
  const findElements = gql`
    query {
      findMarkers(
        category: "${category}",
        world_id: "${worldID}"){
          id
          name
      }
    }`;
  return (
      <Query query={findElements}>
        {
          ({ loading, error, data }) => {
            if (loading) {
              return <div>Fetching</div>
            } else if (error) {
              return <div>Error</div>
            } else {
              return (data.findMarkers.map(({ id, name }) => (
                <ListGroupItem
                  key={id}
                  className="pointer"
                  onClick={()=>{setValue(category); setLocationID(id)}}
                  action
                >
                  {name}
                </ListGroupItem>
              )));
            }
          }
        }
      </Query>
  );
}
