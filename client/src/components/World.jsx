import React from "react";
import { Link } from "react-router-dom";

function World({world_id, name, description, creator_id, world_map}) {
  if (world_map) {
    const imageStyle = {
      backgroundImage: `url('${world_map.url}')`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'relative',
      backgroundPosition: 'center',
      height: "200px",
      borderRadius: "10px",
      marginBottom: "1em"
    }
    return (
      <Link to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}>
      <div style={imageStyle}>
        <div className="world-content">
          <h3>{name}</h3>
          {description && <p>Description: {description}</p>}
        </div>
      </div>
    </Link>
    )
  } else {
    const imageStyle = {
      backgroundColor: "grey",
      height: "200px",
      borderRadius: "10px",
      marginBottom: "1em"
    }
    return (
      <Link to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}>
        <div style={imageStyle}>
          <div className="world-content">
            <h3>{name}</h3>
            {description && <p>Description: {description}</p>}
          </div>
        </div>
      </Link>
    )
  }
}

export default World;
