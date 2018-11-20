import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'
import EditWorldForm from './EditWorldForm'

function EditWorld() {
  const findWorld = gql`
  query {
    findWorldById(id: "2fd0df5b-5623-497a-bb21-3d5d9144f618"){
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