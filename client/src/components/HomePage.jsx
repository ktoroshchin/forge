import React from "react";

import WorldList from "./WorldList"

export default function Homepage() {
  return (
    <div className="container page">
      <h2 className="header default">All Worlds</h2>
      <div className="info">
          <WorldList />
      </div>
    </div>
  );
}
