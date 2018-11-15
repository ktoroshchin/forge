import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

function CreateNewCity() {
  return (
    <div>
      <h2>Create A New City</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Population:
          <input type="text" name="population" />
        </label>
        <label>
          Government:
          <input type="text" name="government" />
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

export default CreateNewCity;
