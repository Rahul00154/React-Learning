import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementbyValue } from "../features/showSlice";

function SubChild() {
  const dispatch = useDispatch(); // it is used to send data to store
  const data = useSelector((c) => c.show.value); //it is used to retrieve data from store

  return (
    <div>
      <h2>SubChild-1---{data}</h2>
      <button onClick={() => dispatch(increment())}>click me</button>
      <button onClick={() => dispatch(incrementbyValue(10))}>
        {/* Here 10 is action that we send to slice or store */}
        click by value
      </button>
    </div>
  );
}

export default SubChild;
