import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditLocationForm from './EditLocationForm'

function EditLocation({location}) {
  const locationID = location.state.locationID;
  const findLocation = gql`
  query {
    findMarkers(category: "Location", id: "${locationID}"){
      id
      name
      description
    }
  }`
  return (
    <Query query={findLocation}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>
      return <EditLocationForm id={data.findMarkers[0].id} name={data.findMarkers[0].name} description={data.findMarkers[0].description} />}}
    </Query>
  )
}

export default EditLocation;