import React, { useState } from 'react';

export default function About() {
  const [todosList, setTodosList] = useState([]);
  return (
    <>
      <h1 className="text-xl">We are Programmer</h1>

      {/* Here we importing data lazily so it get splitted in different module */}
      <button
        onClick={() => {
          import('../data').then((module) => setTodosList(module.todos));
        }}
      >
        Load Data
      </button>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
