import React from "react";
import { Container, Row } from "reactstrap";

import WorldList from "./WorldList"

export default function Homepage() {
  return (
    <Container>
      <h1 className="my-4 text-center">All Worlds</h1>
      <Row>
        <WorldList />
      </Row>
    </Container>
  );
}
