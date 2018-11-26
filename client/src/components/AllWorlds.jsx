import React from "react";
import { Container } from "reactstrap";

import WorldList from "./WorldList"
import SearchBar from "./NavBar/SearchBar"

export default function AllWorlds() {
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
