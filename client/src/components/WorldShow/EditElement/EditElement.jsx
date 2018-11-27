import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import EditElementForm from './EditElementForm'

export default function EditElement({markerID}) {
  const findElement = gql`
    query{
      findMarkers(id:"${markerID}"){
        id
        name
        category
        population
        description
        government
        commerce
        defences
      }
    }`
  return (
    <Query query={findElement}>
    {
      ({ loading, error, data }) => {
        if (loading) {
          return <div>Fetching</div>
        } else if (error) {
          return <div>Error</div>
        } else {
          return (data.findMarkers.map(({ id, name, category, population, description, government, defences, commerce }) => {
            if (category === "Location") {
              return (
                <EditElementForm
                  key={id}
                  id={id}
                  name={name}
                  category={category}
                  population={false}
                  government={false}
                  description={description}
                  commerce={false}
                  defences={false}
                />
              )
            } else {
              return (
                <EditElementForm
                  key={id}
                  id={id}
                  name={name}
                  category={category}
                  population={population}
                  government={government}
                  description={description}
                  commerce={commerce}
                  defences={defences}
                />
              )
            }
          }));
        }
      }
    }
    </Query>
  )
}

