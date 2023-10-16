import { useState } from "react";

import "./App.css";

//state= data that changes with time, Data that can be different from one point in time to other
//Or in react that can be different from one render to another
//state is any piece of information that can change over time across in react

function App() {
  // let [age, setAge] = useState(0);

  // const [textColor, setTextColor] = useState("black");

  // const increaseAge = () => {
  //   setAge(++age);
  // };

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // return (
  //   <>
  //     <div className="App">
  //       {/* {age}
  //     <button onClick={increaseAge}>Increment</button> */}
  //       {/* <input type="text" onChange={handleInputChange} />
  //     {inputValue} */}
  //       <button
  //         onClick={() => {
  //           // setShowText(!showText);
  //           setTextColor(textColor === "black" ? "red" : "black");
  //         }}
  //       >
  //         Show/hide
  //       </button>
  //       <h1 style={{ color: textColor }}>My name is rahul</h1>
  //     </div>
  //   </>
  // );
  const [counter, setCounter] = useState(0);

  const increaseounter = () => {
    counter <= 19 ? setCounter(counter + 1) : setCounter(counter);
  };
  // if (counter <= 19) setCounter(counter + 1);

  const decreaseCounter = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const setToZero = () => {
    setCounter(0);
  };

  return (
    <div className="App">
      {counter}
      <button onClick={increaseounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
      <button onClick={setToZero}>setToZero</button>
    </div>
  );
}

export default App;
