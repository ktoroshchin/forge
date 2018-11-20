import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'
import EditLocationForm from './EditLocationForm'

function EditLocation() {
  const findLocation = gql`
  query {
    findLocationById(id: "53a990d0-5405-4886-9ff8-aa8ba8ce4522"){
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
      return <EditLocationForm id={data.findLocation.id} first_name={data.findUserById.first_name} last_name={data.findUserById.last_name} />}}
    </Query>
  )
}

export default EditLocation;