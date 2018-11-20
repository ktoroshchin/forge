import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

class EditCityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      population: this.props.population,
      government: this.props.government,
      description: this.props.description,
      redirect: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePopulationChange = this.handlePopulationChange.bind(this);
    this.handleGovernmentChange = this.handleGovernmentChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handlePopulationChange(e) {
    this.setState({population: e.target.value});
  }
  handleGovernmentChange(e) {
    this.setState({government: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  setRedirect() {
    this.setState({redirect: true});
  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  render() {
    const { name, population, government, descripiton } = this.state;
    const {id} = this.props;
    const POST_MUTATION = gql`
    mutation($id: ID!, $name: String!, $population: Int, $government: String, $description: String){
      bulkEditCity(id: $id, name: $name, population: $population, government: $government, description: $description){
        id
      }
    }`
    return (
      <div>
        <h2>Edit Profile</h2>
        <Form>
          <FormGroup>
            <Label>First Name (optional)</Label>
            <Input value={this.state.first_name} onChange={this.handleFirstNameChange} type="text" name="first_name" />
            <Label>Last Name (optional)</Label>
            <Input value={this.state.last_name} onChange={this.handleLastNameChange} type="text" name="last_name" />
            <Label>Password</Label>
            <Input onChange={this.handlePasswordChange} type="password" name="password" />
            <br />
            <Mutation mutation={POST_MUTATION} variables={{ id, first_name, last_name, password }}>
              {(postMutation) =>
                <Button color="success" onClick={(event)=>{postMutation(event)
                  .then(()=>{this.setRedirect();})
                  .catch((error) => {alert("Please input required fields")})}}>Submit</Button>}
            </Mutation>
            {this.renderRedirect()}
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default EditCityForm;