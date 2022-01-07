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
    console.log(list);
  }
  return (
    <div>
      <Input value={input} onChange={handleChange} />
      <Button onClick={handleClick} />
      <Button />
      <List toDoList={list} />
    </div>
  );
}

//onclick, changeState

export default App;
