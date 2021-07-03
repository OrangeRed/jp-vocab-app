import React from "react";
import "./Buttons.css";

function Buttons({ dimensions }) {
  return (
    <div className="btn-container">
      <button className="btn btn-again" onClick={() => {}}>
        Again
      </button>
      <button className="btn btn-good">Good</button>
    </div>
  );
}

export default Buttons;
