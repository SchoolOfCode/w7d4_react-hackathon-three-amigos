import React, { useState } from "react";

function Button({ onClick }) {
  return <button onClick={onClick}>Add to the List!</button>;
}

export default Button;
