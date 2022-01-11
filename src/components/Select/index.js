import React from "react";
import "./index.css";

function Select({ onKeyPress, label, options, onChange }) {
  return (
    <>
      <label>{label}</label>
      <select onChange={onChange} onKeyPress={onKeyPress}>
        {options.map(function (option) {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default Select;
