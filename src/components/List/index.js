import React from "react";
import ListItem from "../ListItem/index.js";

function List({ toDoList }) {
  return (
    <ul>
      {toDoList.map(function (item) {
        return <ListItem text={item} />;
      })}
    </ul>
  );
}

export default List;
