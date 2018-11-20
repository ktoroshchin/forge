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
    this.setState({population: Number(e.target.value)});
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
      window.location.reload();
      return <Redirect to='/' />
    }
  }
  render() {
    const { name, population, government, description } = this.state;
    const {id} = this.props;
    const POST_MUTATION = gql`
    mutation($id: ID!, $name: String!, $population: Int, $government: String, $description: String){
      bulkEditCity(id: $id, name: $name, population: $population, government: $government, description: $description){
        id
      }
    }`
    return (
      <div>
        <h2>Edit City</h2>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" />
            <Label>Population</Label>
            <Input value={this.state.population} onChange={this.handlePopulationChange} type="text" name="population" />
            <Label>Government</Label>
            <Input value={this.state.government}onChange={this.handleGovernmentChange} type="text" name="government" />
            <Label>Description</Label>
            <Input value={this.state.description}onChange={this.handleDescriptionChange} type="text" name="description" />
            <br />
            <Mutation mutation={POST_MUTATION} variables={{ id, name, population, government, description }}>
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