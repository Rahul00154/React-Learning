import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { Provider } from "react-redux";
import { store } from "./App/store";
function App() {
  return (
    <>
      <h2>Learning Redux-toolkit Basic</h2>
      <Provider store={store}>
        <AddTodo />
        <Todo />
      </Provider>
    </>
  );
}

export default App;
