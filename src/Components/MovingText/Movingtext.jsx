import React from "react";
import "./MovingText.css";

export default function Movingtext({ state }) {
  return (
    <div className="moving-text-container">
      <span className="moving-text-span">{state}</span>
      <span className="moving-text-span">{state} </span>
    </div>
  );
}
