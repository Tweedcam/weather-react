import React from "react";
import "./Weather.js";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <i class="fas fa-cloud fa-3x"></i>
      <span className="summary">Cloudy</span>
      <span className="feels">feels like 2°C</span>
      <span className="humidity">Humidity:40%</span>
    </div>
  );
}
