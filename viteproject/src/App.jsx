import Test from "./test";

function App() {
  const userName = "RAHUL";
  return (
    <>
      <Test />
      <p>
        {/* Here {userName} is evaluated expression  */}
        {userName} We can return more element under the empty opening an closing
        bracket
      </p>
      <h3>
        <i>That is called fragment </i>
      </h3>
    </>
  );
}

export default App;
