import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditWorldForm from './EditWorldForm'

function EditWorld({worldID}) {
  const findWorld = gql`
  query {
    findWorlds(id: "${worldID}"){
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
      return <EditWorldForm id={data.findWorlds[0].id} name={data.findWorlds[0].name}
        description={data.findWorlds[0].description} creator_id={data.findWorlds[0].creator_id} />}}
    </Query>
  )
}

export default EditWorld;