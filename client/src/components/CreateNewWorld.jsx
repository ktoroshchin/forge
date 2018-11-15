import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

function CreateNewWorld() {
  return (
    <div>
      <h2>Create A New World</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
}

export default CreateNewWorld;