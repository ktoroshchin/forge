import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

class EditTownForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      description: this.props.description,
      population: this.props.population,
      government: this.props.government,
      redirect: false
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePopulationChange = this.handlePopulationChange.bind(this);
    this.handleGovernmentChange = this.handleGovernmentChange.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleNameChange(e) {
    this.setState({name: e.target.value});
  }
  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }
  handlePopulationChange(e) {
    this.setState({population: Number(e.target.value)});
  }
  handleGovernmentChange(e) {
    this.setState({government: e.target.value});
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
    const { name, description, population, government } = this.state;
    const {id} = this.props;
    const POST_MUTATION = gql`
      mutation ($id: ID!, $name: String!, $description: String, $population: Int, $government: String){
        bulkEditTown(id: $id, name: $name, description: $description, population: $population,
          government: $government) {
         id
        }
      }`
    return (
      <div>
        <h2>Edit Town</h2>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input value={this.state.name} onChange={this.handleNameChange} type="text" name="name" />
            <Label>Description</Label>
            <Input value={this.state.description} onChange={this.handleDescriptionChange} type="text" name="description" />
            <Label>Population</Label>
            <Input value={this.state.population} onChange={this.handlePopulationChange} type="text" name="population" />
            <Label>Government</Label>
            <Input value={this.state.government} onChange={this.handleGovernmentChange} type="text" name="government" />
            <br />
            <Mutation mutation={POST_MUTATION} variables={{ id, name, description, population, government }}>
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

export default EditTownForm;