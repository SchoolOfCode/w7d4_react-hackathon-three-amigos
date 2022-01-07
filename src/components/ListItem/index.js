import React from "react";

function ListItem({ index, text, handleDelete }) {
  return (
    <li>
      {text} <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  );
}

export default ListItem;
