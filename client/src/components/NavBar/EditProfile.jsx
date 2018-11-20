import React, {Component} from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {Redirect} from 'react-router'

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
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
    const id = this.props.getUserID();
    const findUser = gql`
    query {
      findUserById(id: "7597283c-0a43-4be5-bc73-95280f3c0c5f"){
        id
        first_name
        last_name
      }
    }`
    const POST_MUTATION = gql`
      mutation ($id: ID!, $password: String!, $first_name: String, $last_name: String){
        bulkEditUser(id: $id, password: $password, first_name: $first_name, last_name: $last_name) {
         id
        }
      }`
    return (
      <div>
        <h2>Edit Profile</h2>
        <Form>
          <FormGroup>
          <Query query={findUser}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>
            return (
              <div>
                <Label>First Name (optional)</Label>
                <Input value={data.findUserById.first_name} onChange={this.handleFirstNameChange} type="text" name="first_name" />
                <Label>Last Name (optional)</Label>
                <Input value={data.findUserById.last_name} onChange={this.handleLastNameChange} type="text" name="last_name" />
                <Label>Password</Label>
                <Input onChange={this.handlePasswordChange} type="password" name="password" />
                <br />
                <Mutation mutation={POST_MUTATION} variables={{ id, first_name, last_name, password }}>
                  {(postMutation, data) =>
                    <Button color="success" onClick={(event)=>{postMutation(event); this.setRedirect()}}>Submit</Button>}
                </Mutation>
              </div>
            );
          }}
        </Query>

            {this.renderRedirect()}
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default EditProfile;