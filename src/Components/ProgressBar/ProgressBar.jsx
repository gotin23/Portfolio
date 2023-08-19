import React from "react";
import "./ProgressBar.css";

export default function Progressbar({ props }) {
  console.log(props);
  return (
    <div className="container-progress-bar fadeIn">
      <h2 className="progress-bar-title">Send your email in 3 steps</h2>
      <div className="progress-steps-container">
        <div
          className="step-progression"
          style={{
            width: (props === 2 && "50%") || (props === 3 && "100%"),
          }}
        ></div>
        <div className="step-number active">1</div>
        <div className={props >= 2 ? "step-number active" : "step-number"}>2</div>
        <div className={props >= 3 ? "step-number active" : "step-number"}>3</div>
      </div>
    </div>
  );
}
