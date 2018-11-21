import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditTownForm from './EditTownForm'

function EditTown({location}) {
  const townID = location.state.townID;
  const findTown = gql`
  query {
    findMarkers(category: "Town", id: "${townID}"){
      id
      name
      description
      population
      government
    }
  }`
  return (
    <Query query={findTown}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>
      return <EditTownForm id={data.findMarkers[0].id} name={data.findMarkers[0].name}
        description={data.findMarkers[0].description} population={data.findMarkers[0].population}
         government={data.findMarkers[0].government} />}}
    </Query>
  )
}

export default EditTown;