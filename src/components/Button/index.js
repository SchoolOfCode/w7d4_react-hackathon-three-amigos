import React from "react";
import "./index.css";

function Button({ onClick }) {
  return (
    <button className="addButton" onClick={onClick}>
      Add to the List!
    </button>
  );
}

export default Button;
