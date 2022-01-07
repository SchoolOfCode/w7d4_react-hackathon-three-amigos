import React from "react";
import ListItem from "../ListItem/index.js";

function List({ toDoList, handleDelete }) {
  return (
    <ul>
      {toDoList.map(function (item, index) {
        return (
          <ListItem
            key={item.text}
            index={index}
            text={item.text}
            priority={item.priority}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}

export default List;
