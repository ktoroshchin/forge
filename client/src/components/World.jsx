import React from "react";
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";

function World({name, description}) {
  return (
    <div>
    <Jumbotron>
      <p>World Name:
        <Link to='/world-show'> {name}</Link>
      </p>
      <p>Description: {description} </p>
      </Jumbotron>
    </div>
  );
}

export default World;
