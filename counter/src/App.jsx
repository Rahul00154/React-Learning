import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0); //usestate give value in array first is variable and second is hardcoded function

  //Hooks:-we have button or some other companent on screen,when we click on that component or scroll on that component the way component behave on clicking or triggger something that is knows as hooks.

  //

  //useState Hooks :- it is used to change the state that it propagate inside dom/UI

  const addValue = () => {
    console.log("clicked", counter);

    counter <= 19 ? setCounter(counter + 1) : null;
  };

  const removeValue = () => {
    console.log(counter);
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      {/* here counter ui is not updated by addValue function because react controls the ui updation we can not control react give some method to control ui */}
      <br />
      <p>{counter}</p>
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
