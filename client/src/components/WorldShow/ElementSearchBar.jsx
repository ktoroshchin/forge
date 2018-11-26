import React, { Component } from "react";
import { Form, Input, Button } from 'reactstrap';

export default class ElementSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
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
      this.props.setValue("search");
      this.props.setSearch(this.state.search);
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
            placeholder="Search For Element"
          />
          <Button onClick={(event)=>this.handleSubmit(event)} color="primary">Search</Button>
        </div>
      </Form>
    )
  }
}