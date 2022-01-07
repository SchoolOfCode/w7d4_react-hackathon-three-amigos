import React from "react";

function ListItem({ text, handleDelete }) {
  return (
    <li>
      {text} <button onClick={() => handleDelete(text)}>Delete</button>
    </li>
  );
}

export default ListItem;
