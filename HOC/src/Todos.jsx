import { useEffect, useState } from "react";
import HOC from "./HOC";

const Todos = ({ data }) => {
  const renderTodo = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderTodo}</div>
    </div>
  );
};
const SearchTodos = HOC(Todos, "todos");
export default SearchTodos;
