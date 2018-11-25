import React from "react";
import { Link } from "react-router-dom";

export default function World({ world_id, name, description, creator_id, world_map }) {
  if (world_map) {
    const imageStyle = {
      backgroundImage: `url('${world_map.url}')`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'relative',
      backgroundPosition: 'center',
      borderRadius: "10px",
      marginBottom: "1em"
    }
    return (
      <Link to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}>
        <div className="world" style={imageStyle}>
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
      borderRadius: "10px",
      marginBottom: "1em"
    }
    return (
      <Link to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}>
        <div className="world" style={imageStyle}>
          <div className="world-content">
            <h3>{name}</h3>
            {description && <p>Description: {description}</p>}
          </div>
        </div>
      </Link>
    )
  }
}
