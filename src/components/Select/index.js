import React from "react";
import "./index.css";

function Select({ label, options }) {
  return (
    <>
      <label>{label}</label>
      <select>
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
