import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ListGroupItem } from 'reactstrap';



function CityList({worldID, setValue, setLocationID}) {
  const findCities =
  gql`
  query {
    findMarkers(category: "City", world_id: "${worldID}") {
      id
      name
    }
  }`;

  return (
    <div>
      <Query query={findCities}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          return (data.findMarkers.map(({ id, name }) => (
            <ListGroupItem key={id} onClick={()=>{setValue("City"); setLocationID(id)}} action>{name} </ListGroupItem>
          )));
        }}
      </Query>
    </div>
  );
}

export default CityList;





