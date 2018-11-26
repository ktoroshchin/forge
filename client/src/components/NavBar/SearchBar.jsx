import React, { Component } from "react";
import { Form, Input, Button } from 'reactstrap';
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
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.search) {
      this.setState({redirect: true})
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to=  {{
        pathname: "/world-search",
        state: { search: this.state.search }
      }} />
    }
  }

  render() {
    return (
      <Form className="search" onSubmit={this.handleSubmit}>
        <div className="d-flex justify-content-between">
          <Input
            onChange={this.handleSearchChange}
            type="text"
            name="search"
            placeholder="Search For World"
          />
          <Button onClick={(event)=>this.handleSubmit(event)} color="success">Search</Button>
        </div>
        {this.renderRedirect()}
      </Form>
    )
  }
}