import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ListGroupItem } from 'reactstrap';

function ElementList({worldID, category, setValue, setLocationID}) {
  const findElements =
  gql`
  query {
    findMarkers(category: "${category}", world_id: "${worldID}") {
      id
      name
    }
  }`;
  return (
    <div>
      <Query query={findElements}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findMarkers.map(({ id, name }) => (
            <ListGroupItem className="pointer" key={id} onClick={()=>{setValue(category); setLocationID(id)}} action>{name} </ListGroupItem>
          )));
        }}
      </Query>
    </div>
  );
}

export default ElementList;





