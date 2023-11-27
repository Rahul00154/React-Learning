import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1 onClick={handleClick}>Learning UseMemo</h1>
      <h2>{count}</h2>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
