import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'
import EditCityForm from './EditCityForm'

function EditCity() {
  const findCity = gql`
  query {
       findCityById(id:"b3d1fa04-ee42-464b-9956-e3dd0081bb04") {
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
      return <EditCityForm id={data.findCityById.id} name={data.findUserById.name} population={data.findCityById.population} government={data.findCityById.government} description={data.findCityById.description} />}}
    </Query>
  )
}

export default EditCity;