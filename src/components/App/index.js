import React, { useState } from "react";
import Input from "../Input/index.js";
import Button from "../Button/index.js";
import List from "../List/index.js";
import Select from "../Select/index.js";
import "./index.css";

function App() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function handleChange(event) {
    setInput(event.target.value);
  }

  function handleClick() {
    if (list.includes(capitaliseFirstLetter(input))) {
      alert(`${input} is already on your list!`);
    } else {
      setList([capitaliseFirstLetter(input), ...list]);
    }
    setInput("");
  }

  function handleDelete(index) {
    setList([...list.slice(0, index), ...list.slice(index + 1)]);
  }

  function handleEnterKeyPress(event) {
    if (event.key === "Enter") {
      if (list.includes(capitaliseFirstLetter(input))) {
        alert(`${input} is already on your list!`);
      } else {
        setList([capitaliseFirstLetter(input), ...list]);
      }
      setInput("");
    }
  }
  function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div>
      <h1>The Three Amigos To Do List App!!!</h1>
      <Input
        value={input}
        onChange={handleChange}
        onKeyPress={handleEnterKeyPress}
        type="text"
        label="To Do: "
      />
      <Select label="Priority: " options={[1, 2, 3, 4, 5]} />
      <Button onClick={handleClick} />
      <List toDoList={list} handleDelete={handleDelete} />
    </div>
  );
}

//onclick, changeState

export default App;
