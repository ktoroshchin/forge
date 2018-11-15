import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

function CreateNewWorld() {
  return (
    <div>
      <h2>CreateNewWorld</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
    )
}

export default CreateNewWorld;
