import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditCityForm from './EditCityForm'

function EditCity({cityID}) {
  const findCity = gql`
  query {
    findMarkers(category: "City", id:"${cityID}") {
			id
   	  name
    	population
    	description
    	government
    }
  }`
  return (
    <Query query={findCity}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>
      return <EditCityForm id={data.findMarkers[0].id} name={data.findMarkers[0].name}
        population={data.findMarkers[0].population} government={data.findMarkers[0].government}
        description={data.findMarkers[0].description} />}}
    </Query>
  )
}

export default EditCity;