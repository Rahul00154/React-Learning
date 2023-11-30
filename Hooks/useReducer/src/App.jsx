import "./App.css";
import { useReducer } from "react";

function App() {
  //Let convert this into useReducer code
  const reducerFunct = (count, action) => {
    switch (action.type) {
      case "Increment": {
        return count + 1;
      }
      case "Decrement": {
        return count - 1;
      }
      default:
        return count;
    }
  };

  const [count, dispatch] = useReducer(reducerFunct, 0); //and it take reducer function and initial value in parameter
  //usereducer return two vale that is state and dispatch to update the state

  // const [count, setCount] = useState(0);

  // const Increment = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const Decrement = () => {
  //   setCount((prev) => prev - 1);
  // };

  return (
    <>
      <div className="App">
        <h1>Learning UseReducer Hooks</h1>
        <button onClick={() => dispatch({ type: "Increment" })}>
          Increment
        </button>
        {count}
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
