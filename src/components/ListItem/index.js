import React from "react";

function ListItem({ text, handleDelete }) {
  return (
    <li>
      {text} <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ListItem;
