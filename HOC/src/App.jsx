import "./App.css";
import SearchTodos from "./Todos";
import Todos from "./Todos";
import SearchUsers from "./UsersList";
// import UsersList from "./UsersList";
function App() {
  return (
    <div className="App">
      <h1>Higher Order Component</h1>
      <div>
        <SearchUsers />
      </div>
      <div>
        <SearchTodos />
      </div>
    </div>
  );
}

export default App;
