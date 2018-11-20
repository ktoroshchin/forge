import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'
import EditLocationForm from './EditLocationForm'

function EditLocation({location}) {
  const locationID = location.state.locationID;
  const findLocation = gql`
  query {
    findLocationById(id: "${locationID}"){
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
      return <EditLocationForm id={data.findLocationById.id} name={data.findLocationById.name} description={data.findLocationById.description} />}}
    </Query>
  )
}

export default EditLocation;