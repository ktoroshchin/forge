import React from "react";
import { Container } from "reactstrap";

import WorldList from "./WorldList"
import SearchBar from "./NavBar/SearchBar"

export default function Homepage() {
  return (
    <Container>
      <h1 className="my-3 text-center">All Worlds</h1>
      <div className="custom-row">
        <SearchBar page="all-worlds"/>
        <WorldList />
      </div>
    </Container>
  );
}
