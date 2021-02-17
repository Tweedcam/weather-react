import React from "react";
import "./City.js";
import "./City.css";

export default function City() {
  return (
    <div className="city">
      <h2 className="dateTime">15:14</h2>
      <h1 className="city"> London</h1>
      <span className="searchTemp">5°C</span>
    </div>
  );
}
