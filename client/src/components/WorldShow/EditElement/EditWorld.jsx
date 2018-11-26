import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import EditWorldForm from './EditWorldForm'

export default function EditWorld({ worldID }) {
  const findWorld = gql`
    query{
      findWorlds(id: "${worldID}"){
        id
        name
        description
        creator_id
      }
    }`
  return (
    <Query query={findWorld}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <div>Fetching</div>
        } else if (error) {
          return <div>Error</div>
        } else {
          const worldID = data.findWorlds[0].id;
          const worldName = data.findWorlds[0].name;
          const worldDesc = data.findWorlds[0].description;
          const creatorID = data.findWorlds[0].creator_id;
          return (
            <EditWorldForm
              id={worldID}
              name={worldName}
              description={worldDesc}
              creator_id={creatorID}
            />
          )
        }
      }
    }
    </Query>
  )
}
