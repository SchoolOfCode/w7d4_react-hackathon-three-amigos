import React from "react";
// import DeleteButton from "../DeleteButton/index.js";

function ListItem({ text, handleDelete }) {
  return (
    <li>
      {text} <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ListItem;
