import { useState } from "react";
import {Task} from "./Task"
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]); //it is to keep track of all the task in list
  const [newTask, setNewTask] = useState(""); //it is use to keep the track what task you add in list

  let handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList === 0 ? 1 : todoList[todoList.length - 1] + 1,
      taskame: newTask,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
           <Task/>
        })}
      </div>
    </div>
  );
}

export default App;
