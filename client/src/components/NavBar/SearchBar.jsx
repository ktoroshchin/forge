import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      redirect: false
    }
  }

  handleSearchChange = (event) => {
    if (event.target.value.trim() === "") {
      this.setState({search: null});
    } else {
      this.setState({search: event.target.value.trim()});
    }
  }

  onSubmit = (event) => {
    if (this.state.search === null) {
      event.preventDefault();
    } else {
      this.setState({redirect: true})
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to=  {{
        pathname: "/search",
        state: { search: this.state.search }
      }} />
    }
  }

  render() {
    return (
      <div className="container page">
        <h2 className="header default">Create A New World</h2>
        <div className="info">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label>Search</Label>
              <Input
                onChange={this.handleNameChange}
                type="text"
                name="search"
              />
            </FormGroup>
          </Form>
          {this.renderRedirect()}
        </div>
      </div>
    )
  }
}