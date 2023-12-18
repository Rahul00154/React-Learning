import { useState } from "react";
import "./App.css";

function App() {
  const [selectedNums, setSelectedNums] = useState(100);

  //code for calculates whether a given number is prime or not
  function isPrime(n) {
    const max = Math.ceil(Math.sqrt(n));

    if (n === 2) {
      return true;
    }

    for (let counter = 2; counter <= max; counter++) {
      if (n % counter === 0) {
        return false;
      }
    }

    return true;
  }

  //we Calculate all of the prime numbers between 0 and user's chosen number.

  const allPrimes = [];

  for (let i = 2; i < selectedNums; i++) {
    if (isPrime(i)) {
      allPrimes.push[i];
    }
  }

  return (
    <div className="App">
      <h1>UseMemo</h1>
      <form>
        <label htmlFor="num">Your number:</label>
        <input
          type="number"
          value={selectedNums}
          onChange={(event) => {
            // To prevent computers from exploding,
            // we'll max out at 100k
            let num = Math.min(100_000, Number(event.target.value));

            setSelectedNums(num);
          }}
        />
      </form>
      <p>
        There are {allPrimes.length} prime(s) between 1 and {selectedNums}:{" "}
        <span className="prime-list">{allPrimes.join(", ")}</span>
      </p>
    </div>
  );
}

export default App;
