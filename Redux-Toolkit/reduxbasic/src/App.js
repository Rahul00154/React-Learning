import { useState } from "react";
import "./App.css";
import Child1 from "./components/Child1";
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((c) => c.show.value);
  return (
    <div className="App">
      <h3>App--{data}</h3>
      <Child1 />
    </div>
  );
}

export default App;
