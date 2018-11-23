import React from "react";
import WorldList from "./WorldList"

function Homepage() {
  return (
    <div className="container page">
      <h2 className="header">All Worlds</h2>
      <div className="info">
        <WorldList />
      </div>
    </div>
  );
}

export default Homepage;
