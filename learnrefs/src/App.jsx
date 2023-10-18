import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  //when we want to see render count
  // const [renderCount, setRenderCount] = useState(0);
  //Here it goes in infinite loop of rendering the webpage

  //to overcome from this we use useref hook t

  // const renderCount = useRef(0);

  // const inputRef = useRef();

  const prevName = useRef("");

  //useref return object and its current value is 0 like this{current:0}

  // it is use to stop component from rerendering

  //it is also used for reference element inside our html

  //each element inside our document has ref attribute

  // useEffect(() => {
  //   // setRenderCount((prevRenderCount) => prevRenderCount + 1);
  //   renderCount.current = renderCount.current + 1;
  // });

  //it not update the state of component isiliye ye re render hone se bachata hai

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  // function focus() {
  //   inputRef.current.focus();
  //   inputRef.current.value = "Nupur";
  // }

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>
        My name is :{name} and it is used to be {prevName.current}
      </h3>
      <button onClick={focus}>Click</button>
    </>
  );
}

export default App;

//refs are used for accessing dom elements
//and it is also very useful for persisting values across render without causing re render
