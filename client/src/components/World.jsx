import React from "react";
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";

function World({world_id, name, description, creator_id}) {
  return (
    <Link to={{pathname: "/world-show", state: {worldID: world_id, worldName: name, worldDescription: description, creatorID: creator_id}}}>
      <Jumbotron>
        <p>World Name: {name}</p>
        {description && <p>Description: {description}</p>}
      </Jumbotron>
    </Link>
  );
}

export default World;
