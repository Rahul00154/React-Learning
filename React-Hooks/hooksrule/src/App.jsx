import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const [randomNo, setRandomNo] = useState(Math.floor(Math.random() * 101)); //<--- random Number between 0 and 100

  //RULES OF HOOKS
  //1.Only call hooks (usestate and useeffect) at the TOP level
  // Hoops don't call inside loops,consition or nested function
  //Always use hook at the top level of react function
  //By following this rule ,we ensure hooks are called in the same oreder each time a component render
  //this allows react to correctly preserve the state of hooks between useState/useeffect calls

  //2.DON'T CALL HOOKS FROM REGULAR JS FUNCTION
  //-call hooks from react function
  //-call hooks from custom hooks

  // if(randomNo>50){
  //   const [test,setTest] = useState("whoops"); //it is bad practise it breaks the call order
  // }

  const [test, setTest] = useState("whoops");

  return (
    <div className="App">
      <h1>Welcome</h1>
      <form action="">
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button>Click</button>
      </form>
      <p>{input}</p>
    </div>
  );
}

export default App;
