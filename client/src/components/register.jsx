import React from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

function Register() {
  const POST_MUTATION = gql`
    mutation {
      createNewUser(username: "username", email: "email", password: "password") {
        id
        username
        email
      }
    }`
  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          First Name:
          <input type="text" name="first_name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="last_name" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <Mutation mutation={POST_MUTATION} >
          {postMutation => <button onClick={postMutation}>Submit</button>}
        </Mutation>
      </form>
    </div>
  )
}

export default Register;