import "./App.css";
import React, { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  //code for addTodo
  //In this code we check that there is some task in current state or not then we add our task

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  /*
   ***CODE FOR UPDATE TODO
   *in this we check that all element inside todos that have id can match to the original id that we provide then we update else we will assign prevTodo(that is single element)

  */
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => {
        prevTodo.id === id ? todo : prevTodo;
      })
    );
  };

  /* 
   *** CODE FOR DELETE TODO
   * here we use filter on every element of todo and check if id match then we delete that specific element
   
  */

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  /*
   *** CODE to check whether task is marked completed or not
   *
   */
  const toggleChecked = (id) => {
    setTodos((prev) =>
      prev.map((prevVal) =>
        prevVal.id === id ? { ...prevVal, checked: !prevVal.checked } : prevVal
      )
    );
  };

  //*** Code for getItems from localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //*** Code for setItem

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleChecked }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
