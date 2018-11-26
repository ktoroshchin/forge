import React from "react";
import { Container } from "reactstrap";

import WorldList from "./WorldList"
import SearchBar from "./NavBar/SearchBar"

export default function Homepage() {
  return (
    <Container>
      <h1 className="my-4 text-center">All Worlds</h1>
      <div className="custom-row">
        <div className="search">
          <SearchBar />
        </div>
        <WorldList />
      </div>
    </Container>
  );
}
