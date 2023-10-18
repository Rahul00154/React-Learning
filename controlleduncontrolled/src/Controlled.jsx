import React, { useState } from "react";

function Controlled() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <form action="">
      <input
        type="text"
        placeholder="controlled"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Controlled;

//Controlled component :- the form component is controlled by the component state that is usestate to control the input field and value of that input

//in this each keyword we type there is a callback function onchange get triggered and changing the state
