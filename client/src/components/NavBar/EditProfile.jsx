import React from "react";
import { Redirect } from 'react-router'
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import EditProfileForm from './EditProfileForm'

export default function EditProfile({ getUserID }) {
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
      {
        ({ loading, error, data }) => {
          if (loading) {
            return <div>Fetching</div>
          } else if (error) {
            return <div>Error</div>
          } else {
            const userID = data.findUsers[0].id
            const firstName = data.findUsers[0].first_name
            const lastName = data.findUsers[0].last_name

            return (
              <EditProfileForm
                id={userID}
                first_name={firstName}
                last_name={lastName}
              />
            }
          }
        }
      }
      </Query>
    )
  } else {
    return <Redirect to='/login' />
  }
}
