import React, { useState } from "react";
import "./index.css";

function ListItem({ index, text, handleDelete }) {
  const [isComplete, setIsComplete] = useState(false);

  function handleClick() {
    setIsComplete(!isComplete);
  }

  return (
    <>
      <li className={isComplete ? "complete" : ""} onClick={handleClick}>
        {text}
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    </>
  );
}

export default ListItem;
