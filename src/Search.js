import React from "react";
import "./Search.js";

export default function Search() {
  return (
    <div className="search">
      <form>
        <div className="row">
          <div className="col-6">
        <input type="search" placeholder="Enter a city" className="form-control"/>
        </div>
        <div className="col-3">
        <input type="submit" value="search" className="btn btn-primary"/>
        </div>
        </div>
      </form>


    </div>
  );
}
