import React, { useState } from "react";
import Input from "../Input/index.js";
import Button from "../Button/index.js";
import List from "../List/index.js";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }
  function handleClick() {
    setList([input, ...list]);
  }

  function handleDelete(toBeDeleted) {
    console.log(toBeDeleted);
    setList(list.filter((item) => item !== toBeDeleted));
  }

  return (
    <div>
      <Input value={input} onChange={handleChange} />
      <Button onClick={handleClick} />
      <List toDoList={list} handleDelete={handleDelete} />
    </div>
  );
}

//onclick, changeState

export default App;
