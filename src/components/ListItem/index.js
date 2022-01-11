import React, { useState } from "react";
import "./index.css";

function ListItem({ priority, index, text, handleDelete }) {
  const [isComplete, setIsComplete] = useState(false);

  function handleClick() {
    setIsComplete(!isComplete);
  }

  return (
    <>
      <li className={isComplete ? "complete" : ""} onClick={handleClick}>
        {text} -- Priority: {priority}
        <button onClick={() => handleDelete(index)}>Delete</button>
      </li>
    </>
  );
}

export default ListItem;
