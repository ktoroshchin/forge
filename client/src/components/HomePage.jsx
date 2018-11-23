import React from "react";
import WorldList from "./WorldList"

function Homepage() {
  return (
    <div className="container page">
      <header>
        <h2>All Worlds</h2>
      </header>
      <div className="info">
      <WorldList />
      </div>
    </div>
  );
}

export default Homepage;
