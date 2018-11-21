import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

class EditProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      password: null,
      redirect: false
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }
  handleFirstNameChange(e) {
    this.setState({first_name: e.target.value});
  }
  handleLastNameChange(e) {
    this.setState({last_name: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
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
    const { first_name, last_name, password } = this.state;
    const {id} = this.props;
    const POST_MUTATION = gql`
      mutation ($id: ID!, $password: String!, $first_name: String, $last_name: String){
        editUserInfo(id: $id, password: $password, first_name: $first_name, last_name: $last_name) {
         id
        }
      }`
    return (
      <div>
        <div className="container">
          <h2>Edit Profile</h2>
          <Form>
            <FormGroup>
              <Label>First Name (optional)</Label>
              <Input value={this.state.first_name} onChange={this.handleFirstNameChange} type="text" name="first_name" />
              <Label>Last Name (optional)</Label>
              <Input value={this.state.last_name} onChange={this.handleLastNameChange} type="text" name="last_name" />
              <Label>Password (required)</Label>
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
      </div>
    )
  }
}

export default EditProfileForm;