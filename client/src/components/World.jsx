import React from "react";
import { Link } from "react-router-dom";
import { Card, CardText, CardBody, CardHeader, CardTitle } from "reactstrap";

export default function World({ world_id, name, description, creator_id, world_map }) {
  if (world_map) {
    const imageStyle = {
      backgroundImage: `url('${world_map.url}')`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'relative',
      backgroundPosition: 'center',
      borderRadius: "10px",
    }
    return (
      <Card className="world-list" style={imageStyle}>
        <Link
          to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}
          style={{
            textDecoration: "none",
            height: "100%",
          }}
        >
          <CardBody className="world-content">
            <CardHeader className="border mb-3">
              <h3>{name}</h3>
            </CardHeader>
            <CardText>{description}</CardText>
          </CardBody>
        </Link>
      </Card>
    )
  } else {
    const imageStyle = {
      backgroundColor: "grey",
      borderRadius: "10px",
      marginBottom: "1em"
    }
    return (
      <Card className="world-list" style={imageStyle}>
        <Link
          to={{pathname: "/world-show", state: {worldID: world_id, creatorID: creator_id}}}
          style={{
            textDecoration: "none",
            height: "100%",
          }}
        >
          <CardBody className="world-content">
            <CardHeader className="border mb-3">
              <h3>{name}</h3>
            </CardHeader>
            <CardText>{description}</CardText>
          </CardBody>
        </Link>
      </Card>
    )
  }
}
