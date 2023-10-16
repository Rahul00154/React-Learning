import { useState } from "react";

import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]); //it is to keep track of all the task in list
  const [newTask, setNewTask] = useState(""); //it is use to keep the track what task you add in list

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button>Add Task</button>
      </div>
      <div className="list"></div>
    </div>
  );
}

export default App;
