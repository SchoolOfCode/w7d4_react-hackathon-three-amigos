import React from "react";
import "./index.css";

function Input({ label, type, value, onChange, onKeyPress }) {
  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
      ></input>
    </>
  );
}

export default Input;
