import React from "react";
import { Link } from "react-router-dom"
import { Container, Col, Button } from "reactstrap";

export default function Homepage() {
  return (
    <Container className="custom-container p-0">
      <header className="homepageHeader">
        <Container className="homepageBanner">
          <h1>Welcome to the Forge!</h1>
          <p className="lead">Helping you organize your world!</p>
        </Container>
      </header>
      <section id="about">
        <Container>
          <div className="custom-row">
            <div className="col-lg-8 mx-auto">
              <h2 className="header">What we're about!</h2>
              <p className="lead">This is an aide to all those DMs, GMs, Authors or anyone who's into creating their own world. But is fed up with having to keep track of all their miscellaneous papers, documents, maps, etc.</p>
              <ul>
                <li>Create a world and start building it up with our easy to use templates.</li>
                <li>Keeps all your information under an easy to use table of contents</li>
                <li>Search bars to look up any aspects quickly</li>
                <li>Add a world map with interactive markers linked to any of the aspects you've created</li>
              </ul>
              <div className="custom-row justified">
                <Col sm="12" md="4" lg="3">
                  <Link to="/login">
                    <Button color="primary" size="sm" className="w-100 mb-3">Login</Button>
                  </Link>
                </Col>
                <Col sm="12" md="4" lg="3">
                  <Link to="/register">
                    <Button color="primary" size="sm" className="w-100 mb-3">Register</Button>
                  </Link>
                </Col>
                <Col sm="12" md="4" lg="3">
                  <Link to="/all-worlds">
                    <Button color="primary" size="sm" className="w-100">View Worlds</Button>
                  </Link>
                </Col>
              </div>
            </div>
          </div>
        </Container>
    </section>
    </Container>
  );
}
