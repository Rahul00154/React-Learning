import React, { useRef } from "react";

function UncontrolledComponent() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  return (
    <form action="">
      <input type="text" placeholder="uncontrolled" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default UncontrolledComponent;

//uncontrolled component :- component that is controlled by dom using ref
