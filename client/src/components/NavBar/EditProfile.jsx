import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'
import EditProfileForm from './EditProfileForm'

function EditProfile() {
  render() {
    const id = this.props.getUserID();
    const findUser = gql`
    query {
      findUserById(id: "7597283c-0a43-4be5-bc73-95280f3c0c5f"){
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
        return <EditProfileForm first_name={data.findUserById.first_name} last_name={data.findUserById.last_name} />}}
      </Query>
    )
  }
}

export default EditProfile;