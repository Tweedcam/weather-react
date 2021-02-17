import React from "react";
import "./Search.js";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form" className="searchForm" class="col-sm">
        <input
          type="text"
          id="city-input"
          placeholder="Enter City..."
          autofocus="on"
          autocomplete="off"
          aria-label="default input example"
        />
        <input
          type="submit"
          value="search"
          autofocus="on"
          class="btn btn-primary"
        />
        <input
          type="submit"
          value="Location"
          autofocus="on"
          id="current-location"
          className="pinpoint"
          class="btn btn-success"
        />
      </form>
    </div>
  );
}
