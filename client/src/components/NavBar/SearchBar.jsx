import React, { Component } from "react";
import { Container, Form, Input, Button } from 'reactstrap';
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
        pathname: "/search",
        state: { search: this.state.search }
      }} />
    }
  }

  render() {
    return (
      <Container className="bottom-spacing">
        <Form className="search" onSubmit={this.handleSubmit}>
          <div className="justified">
            <Input
              onChange={this.handleSearchChange}
              type="text"
              name="search"
              placeholder="Search For World"
            />
            <Button onClick={(event)=>this.handleSubmit(event)} color="primary">Search</Button>
          </div>
          {this.renderRedirect()}
        </Form>
      </Container>
    )
  }
}