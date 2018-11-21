import React from "react";
import {Redirect} from 'react-router'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import EditProfileForm from './EditProfileForm'

function EditProfile({getUserID}) {
  const id = getUserID();
  const findUser = gql`
  query {
    findUsers(id: "${id}"){
      id
      first_name
      last_name
    }
  }`
  if (id) {
    return (
      <Query query={findUser}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>
        return <EditProfileForm id={data.findUsers[0].id} first_name={data.findUsers[0].first_name} last_name={data.findUsers[0].last_name} />}}
      </Query>
    )
  } else {
    return <Redirect to='/login' />
  }
}

export default EditProfile;