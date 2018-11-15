import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import CreateNewCity from './CreateNewCity'
import CreateNewTown from './CreateNewTown'

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
      <CreateNewCity />
      <CreateNewTown/>
    </div>
    )
}

export default CreateNewWorld;
