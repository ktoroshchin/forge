import React, { Component } from "react";
import { Container } from "reactstrap";

import WorldList from "./WorldList"
import SearchBar from "./NavBar/SearchBar"

export default class AllWorlds extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container className="custom-container">
        <h1 className="header">All Worlds</h1>
        <div className="custom-row">
          <SearchBar page="all-worlds"/>
          <WorldList />
        </div>
      </Container>
    );
  }
}
