import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(1);

  const increaseCounter = () => {
    setCount(count + 1);
  };

  const addRandom = () => {
    let randNum = parseInt(Math.random() * 1000, 10);
    setNums([...nums, randNum]);
  };

  //Now here we use useMemo to memoize our result by using useMemo

  // const magicNum = calculateMagicNumber(count);

  const magicNum = useMemo(() => calculateMagicNumber(count), [count]);
  //useMemo takes two parameter 1st one is function and second one is function and scnd one is dependency array;

  console.log("rendering....");

  return (
    <div className="App">
      <h1>UseMemo</h1>
      <div>
        Counter: {count}|Magic number:{magicNum}
        <button onClick={increaseCounter}>+</button>
      </div>
      <hr />
      <div>
        <ul>
          {nums.map((num, i) => (
            <li key={i}>{num}</li>
          ))}
        </ul>
        <button onClick={addRandom}>Add Random</button>
      </div>
    </div>
  );
  function calculateMagicNumber(n) {
    console.log("Costly calculation triggered.");
    let num = 1;
    for (let i = 0; i < n + 1000000000; i++) {
      num += 123000;
    }
    return parseInt(num - num * 0.22, 10);
  }
}

export default App;
