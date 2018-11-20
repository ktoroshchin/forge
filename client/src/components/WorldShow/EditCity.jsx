import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'
import EditCityForm from './EditCityForm'

function EditCity({getUserID}) {
  const id = getUserID();
  const findUser = gql`
  query {
    findUserById(id: "${id}"){
      id
      first_name
      last_name
    }
  }`
  return (
    <Query query={findUser}>
    {({ loading, error, data }) => {
      if (loading) return <div>Fetching</div>
      if (error) return <div>Error</div>
      return <EditCityForm id={data.findUserById.id} first_name={data.findUserById.first_name} last_name={data.findUserById.last_name} />}}
    </Query>
  )
}

export default EditCity;