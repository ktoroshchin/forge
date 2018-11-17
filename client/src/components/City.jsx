import React from "react";

function City({name, description}) {
  return (
    <div>
    <Jumbotron>
      <p>World Name: {name}</p>
      <p>Description: {description} </p>
      </Jumbotron>
    </div>
  );
}

export default City;
