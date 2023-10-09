import React from "react";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); //if we reload the page it resets the state and initial state has olive color so it gets to olive color
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-20 inset-x-0 px-1">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-slate-200 px-3 py-2 rounded-xl ">
          <button
            className=" outline-none p rounded-full px-3 shadow-lg text-white "
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("Green")}
          >
            Green
          </button>
          <button
            className=" outline-none p rounded-full px-3 shadow-lg text-white "
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className=" outline-none p rounded-full px-3 shadow-lg text-white "
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className=" outline-none p rounded-full px-3 shadow-lg text-white "
            style={{ backgroundColor: "Purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            className=" outline-none p rounded-full px-3 shadow-lg text-white "
            style={{ backgroundColor: "Blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className=" outline-none p rounded-full px-3 shadow-lg text-white "
            style={{ backgroundColor: "Orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className=" outline-none p rounded-full px-3 shadow-lg text-white "
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className=" outline-none p rounded-full px-3 shadow-lg text-white "
            style={{ backgroundColor: "violet" }}
            onClick={() => setColor("violet")}
          >
            violet
          </button>
          <button
            className=" outline-none p rounded-full px-3 shadow-lg text-white "
            style={{ backgroundColor: "lavender" }}
            onClick={() => setColor("lavender")}
          >
            lavender
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
