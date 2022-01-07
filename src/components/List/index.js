import React from "react";
import ListItem from "../ListItem/index.js";

function List({ toDoList, handleDelete }) {
  return (
    <ul>
      {toDoList.map(function (item, index) {
        return (
          <ListItem
            key={item}
            index={index}
            text={item}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}

export default List;
