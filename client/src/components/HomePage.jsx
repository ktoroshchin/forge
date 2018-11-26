import React from "react";
import { Container } from "reactstrap";

import SearchBar from "./NavBar/SearchBar"

export default function Homepage() {
  return (
    <Container className="custom-container">
      <h1 className="border-bottom text-center mt-3">Welcome to the Forge</h1>
      <h2 className="text-center mb-3">
        <small>Organizing your world, so you don't have to!</small>
      </h2>
      <h3 className="header">Getting Started</h3>
      <SearchBar page="all-worlds"/>
    </Container>
  );
}
