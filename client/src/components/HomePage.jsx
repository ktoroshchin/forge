import React from "react";

import WorldList from "./WorldList"
import SearchBar from "./NavBar/SearchBar"

export default function Homepage() {
  return (
    <div className="container page">
      <h2 className="header default">All Worlds</h2>
      <div className="info">
        <div className="search">
          <SearchBar />
        </div>
        <WorldList />
      </div>
    </div>
  );
}
