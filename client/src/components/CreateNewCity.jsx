import React, {Component} from "react";
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function CreateNewCity() {
  return (
    <div>
      <Form>
        <Label for="form">Create a new city</Label>
        <FormGroup>
          <Label for="city">City</Label>
          <Input type="text" name="city" placeholder="city"/>
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

export default CreateNewCity;
