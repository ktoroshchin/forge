import React from "react";
import { Jumbotron } from 'reactstrap';

function World({name, description}) {
  return (
    <div>
    <Jumbotron>
      <p>World Name: {name}</p>
      <p>Description: {description} </p>
      </Jumbotron>
    </div>
  );
}

export default World;
