import React from "react";
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";

function World({id, name, description}) {
  return (
    <Link to={{pathname: "/world-show", state: {id: id}}}>
      <Jumbotron>
        <p>World Name: {name}</p>
        {description && <p>Description: {description}</p>}
      </Jumbotron>
    </Link>
  );
}

export default World;
