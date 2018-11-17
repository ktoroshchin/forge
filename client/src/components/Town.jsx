import React from "react";
import { Link } from "react-router-dom";

function City({marker_id, world_id, name, population, government, description}) {
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
