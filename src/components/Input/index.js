import React, { useState } from "react";
import "./index.css";

function Input({ value, onChange, onKeyPress }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    ></input>
  );
}

export default Input;
