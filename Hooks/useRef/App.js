import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";

//***this is the way to access dom element in js but in react we use useRef hooks for access dom element */

// function handleClick() {
//   const elem = document.getElementById("myApp");
//   elem.style.color = "red";
// }

function App() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);
  // const myApp = useRef();

  useEffect(() => {
    console.log("once");
    setInterval(() => {
      console.log("interval", countRef.current);
    }, 1000);
  }, []);

  function handleClick() {
    // const elem = document.getElementById("myApp");
    // const elem = myApp.current; // 1. this is the way to access dom element via useref
    // elem.style.color = "red";
    //if we want to check that element is present or not
    // if(myApp.current){
    //   //this is the way to check
    // }
    let value = count + 1;
    setCount(value);
    countRef.current = value;
  }

  return (
    <div className="App">
      <h1 onClick={handleClick}>Learning useRef Hook</h1>
      <p>{count}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
