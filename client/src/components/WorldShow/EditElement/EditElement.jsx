import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditElementForm from './EditElementForm'

function EditElement({markerID}) {
  const findElement = gql`
  query {
    findMarkers(id:"${markerID}") {
      id
      name
      category
      population
      description
      government
    }
  }`
  return (
    <Query query={findElement}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>
      return (data.findMarkers.map(({ id, name, category, population, description, government }) => {
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
            />
            )
        }
      }));
    }}
    </Query>
  )
}

export default EditElement;