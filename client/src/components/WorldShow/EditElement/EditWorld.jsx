import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditWorldForm from './EditWorldForm'

function EditWorld({location}) {
  const findWorld = gql`
  query {
    findWorldById(id: "${location.state.worldID}"){
      id
      name
      description
      creator_id
    }
  }`
  return (
    <Query query={findWorld}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>
      return <EditWorldForm id={data.findWorldById.id} name={data.findWorldById.name} description={data.findWorldById.description} creator_id={data.findWorldById.creator_id} />}}
    </Query>
  )
}

export default EditWorld;