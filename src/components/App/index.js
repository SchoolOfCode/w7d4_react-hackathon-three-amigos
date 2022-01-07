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
    if (list.includes(input.toLowerCase())) {
      alert(`${input} is already on your list!`);
    } else {
      setList([input.toLowerCase(), ...list]);
    }
    setInput("");
  }

  function handleDelete(index) {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
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
