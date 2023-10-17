import { useState } from "react";

import "./App.css";
import Lifecycle from "./Lifecycle";

function App() {
  // const [count, setCount] = useState(0)

  const [showText, setShowText] = useState(true);

  return (
    <>
      <button onClick={() => setShowText(!showText)}>show</button>
      {showText && <Lifecycle />}
    </>
  );
}

export default App;
