import React from "react";
import { Jumbotron } from 'reactstrap';
import { Link } from "react-router-dom";

function World({world_id, name, description, creator_id, maps}) {
  if (maps.length === 0) {
    const style = {
      image: {
        backgroundColor: "grey",
        height: "200px",
        borderRadius: "10px",
        marginBottom: "1em"
      },
      content: {
        height: '100%',
        width: '100%',
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '3em',
        textAlign: "center",
      }
    }
    return (
      <Link to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}>
        <div style={style.image}>
          <div style={style.content}>
            <h3>{name}</h3>
            {description && <p>Description: {description}</p>}
          </div>
        </div>
      </Link>
    );
  } else {
    const style = {
      image: {
        backgroundImage: `url('${maps[0].url}')`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'relative',
        backgroundPosition: 'center',
        height: "200px",
        borderRadius: "10px",
        marginBottom: "1em"
      },
      content: {
        height: '100%',
        width: '100%',
        color: 'black',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '3em',
        textAlign: "center",
      }
    }
    return (
      <Link to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}>
      <div style={style.image}>
        <div style={style.content}>
          <h3>{name}</h3>
          {description && <p>Description: {description}</p>}
        </div>
      </div>
    </Link>
    )
  }
}

export default World;
