import { useState, useEffect } from "react";
import React from "react";

function Lifecycle() {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("component is mounted");
    return () => {
      console.log("component unmounted");
    };
  }, [text]);

  //useffect trigger when something changes in component's lifecycle that is mounting or updating or removing from dom

  //we can pass array like dependencies in useffect check whether that dependency component change or update then it will trigger

  return (
    <div>
      <input onChange={(e) => setText(e.target.value)} />
      <h2>{text}</h2>
    </div>
  );
}

export default Lifecycle;

//component lifecycle consists of three phases
//1. Mounting Phase:- mounting phase begins when component is created and attached to dom.
//2.updating phase:- when change occurs in component's props or state,
//3.unmounting phase:- when component is removed from dom

//USEeffect :- it is used to basically control what happens depending on which stage of our component's life cycle is changing
