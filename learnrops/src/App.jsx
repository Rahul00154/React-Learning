import { useState } from "react";
import Product from "./Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Product
        name="Google Pixel 8A"
        description="Best Camera Phone"
        price={799}
      />
      <Product
        name="iPhone"
        description="Best Phone in the market"
        price={1299}
      />
      <Product name="Samsung S23" description="Best Display" price={1199} />
    </div>
  );
}

export default App;

//props are a way to pass read only data from a parent component to child component ..
// it is like properties of object passing as an function arguement .
//when we pass props to child component it is passing in the form of attribute
