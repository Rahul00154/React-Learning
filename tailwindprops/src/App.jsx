import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";
("./components/card");

function App() {
  return (
    <>
      <h1 className="bg-green-300 rounded-md mb-4">Tailwind Css</h1>
      <Card name="rahulAnand" btnText="ClickMe" />
      <Card name="NupurGoel" />
    </>
  );
}

export default App;
