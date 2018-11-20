import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditTownForm from './EditTownForm'

function EditTown({location}) {
  const townID = location.state.townID;
  const findTown = gql`
  query {
    findTownById(id: "${townID}"){
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
      return <EditTownForm id={data.findTownById.id} name={data.findTownById.name} description={data.findTownById.description} population={data.findTownById.population} government={data.findTownById.government} />}}
    </Query>
  )
}

export default EditTown;