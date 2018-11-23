import React from "react";
import WorldList from "./WorldList"

function Homepage() {
  return (
    <div>
      <header>
        <h2 >All Worlds</h2>
      </header>
      <div className="container">
        <WorldList />
      </div>
    </div>
  );
}

export default Homepage;
