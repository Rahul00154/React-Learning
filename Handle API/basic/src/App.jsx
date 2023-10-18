import { useEffect, useState } from "react";

import "./App.css";
import Axios from "axios";

function App() {
  // const [catFact, setCatfact] = useState("");

  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     setCatfact(res.data.fact);
  //   });
  // };

  // useEffect(() => {
  //   fetchCatFact();
  // }, []);
  // //here we can put empty array as dependency to stop re render
  // const [name, setName] = useState("");
  // const [age, setAge] = useState(null);

  // const fetchAgeDate = () => {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     setAge(res.data);
  //   });
  // };

  const [execuse, setExecuse] = useState("");

  const fetchExecuse = (event) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${event}`).then(
      (res) => {
        setExecuse(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      <h1>Generate An execuse</h1>
      <button onClick={() => fetchExecuse("party")}>Party</button>
      <button onClick={() => fetchExecuse("family")}>Family</button>
      <button onClick={() => fetchExecuse("office")}>Office</button>

      <p>{execuse}</p>
    </div>
  );
}

export default App;
