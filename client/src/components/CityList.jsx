import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { ListGroupItem } from 'reactstrap';



function CityList({worldID}) {
  const findCities =
  gql`
  query {
    findCitiesByWorldId(world_id: "${worldID}") {
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
          return (data.findCitiesByWorldId.map(({ id, name }) => (
            <ListGroupItem key = {id} tag="a" id={id}  className="listItem" href="#" action>{name}</ListGroupItem>
          )));
        }}
      </Query>
    </div>
  );
}

export default CityList;





