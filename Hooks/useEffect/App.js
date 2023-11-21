import react from "react";
import ReactDOM from "react-dom/client";

let index = -1; //to keep the track of how usestate call
const state = []; // to keep the reference of previous render

function MyUseState(initialValue) {
  const id = ++index;
  console.log(index);

  //if element in state[id] is present then we return that element
  if (state[id]) {
    return state[id];
  }

  function setUseState(value) {
    // initialValue = value;
    state[id][0] = value;
    renderFromMyHook();
  }

  //In this case we return a new array consiting initial value and func but we never use state[id] element
  const tuple = [initialValue, setUseState];
  state[id] = tuple; //to keep the track of previous data
  console.log(state);
  return tuple;
}

function myUseEffect(func, depArray) {
  let id = ++index;
  let hasChanged = false;
  const oldDepArray = state[id];

  if (oldDepArray) {
    hasChanged = depArray.some((dep, i) => {
      return !Object.is(dep, oldDepArray[i]); //object.is  is used to compare like negative zero and positive zero
    });
  }

  if (hasChanged) {
    func();
  }
  state[id] = depArray;
}

function App() {
  const [count, setCount] = MyUseState(0);
  // const [data, setData] = MyUseState("Hello");
  // const [isData, setIsData] = MyUseState(false);

  myUseEffect(() => {
    console.log("Hello");

    //jab jab component screen se hatega tab cleanup function call hoga
    return cleanUpFunction;
  }, [count]);

  function cleanUpFunctionn() {
    //1. remove event listener
    //2. clearTimeout/interval
    //3.Cancel any ongoing API is required
    //4. reset redux state
    //5. reset ref value
  }

  const handlePlus = () => {
    setCount(count + 1);
  };

  const handleMinus = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <button onClick={handlePlus}>Plus</button>
      {count}
      <button onClick={handleMinus}>Minus</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

function renderFromMyHook() {
  index = -1; //on chnanging state we also reset the indexes
  root.render(<App />);
}

renderFromMyHook();
