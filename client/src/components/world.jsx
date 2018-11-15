import React from "react";

function World({name, description}) {
  return (
    <div>
      <p>World Name: {name}</p>
      <p>Description: {description} </p>
    </div>
  );
}

export default World;
