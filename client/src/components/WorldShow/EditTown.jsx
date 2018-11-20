import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'
import EditTownForm from './EditTownForm'

function EditTown() {
  const findTown = gql`
  query {
    findTownById(id: "73ca2e58-b730-401e-9016-fc6186550f80"){
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