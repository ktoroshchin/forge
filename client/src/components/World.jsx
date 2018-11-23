import React from "react";
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";

function World({world_id, name, description, creator_id, maps}) {
  if (maps.length === 0) {
    return (
      <Link to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}>
        <Jumbotron>
          <p>World Name: {name}</p>
          {description && <p>Description: {description}</p>}
        </Jumbotron>
      </Link>
    );
  } else {
    const backgroundImage = {
      backgroundImage: `url('${maps[0].url}')`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'relative',
      backgroundPosition: 'center',
    }
    return (
      <Link to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}>
      <Jumbotron style={backgroundImage}>
        <p>World Name: {name}</p>
        {description && <p>Description: {description}</p>}
      </Jumbotron>
    </Link>
    )
  }
}

export default World;
