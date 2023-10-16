import "./App.css";

function App() {
  const age = 19;
  const isGreen = true;
  return (
    <div className="App">
      {age >= 19 ? <h1>over age</h1> : <h1>Under age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>
        this is just practise test
      </h1>
      {isGreen && <button> this is a button</button>}
    </div>
  );
}

export default App;
