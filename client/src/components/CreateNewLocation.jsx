import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function CreateNewLocation() {
  return (
    <div>
      <Form>
        <Label for="form">Create a new Town</Label>
        <FormGroup>
          <Label for="town">Name</Label>
          <Input type="text" name="name" placeholder="location"/>
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="text" name="description" placeholder="description" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
    )
}

export default CreateNewLocation;
