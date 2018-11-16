import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function CreateNewTown() {
  return (
    <div>
      <Form>
        <Label for="form">Create a new Town</Label>
        <FormGroup>
          <Label for="town">Name</Label>
          <Input type="text" name="name" placeholder="city"/>
        </FormGroup>
        <FormGroup>
          <Label for="population">Population</Label>
          <Input type="text" name="population" placeholder="population" />
        </FormGroup>
        <FormGroup>
          <Label for="government">Government</Label>
          <Input type="text" name="government" placeholder="government" />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input type="textarea" name="description" placeholder="description" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
    )
}

export default CreateNewTown;
