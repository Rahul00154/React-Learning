import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  );
}
/*
const reactElem = {
  type: "a",
  props: {
    href: "https://google.com", 
    target: "_black",
  },
  children: "Click me to visit google",
};
*/

const anotherUser = "anotherUSER";

const reactElem = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google",
  anotherUser
);

//react.createElement inject by babbel by default it transform modern js code to run in all env and modern and old browser

//react.create element first expect the type of element then property(i.e attribute ) and after that chiildren and last came evaluated expression that is variable {variable}(it is notation of evaluated ezpression)

const anotherElm = <a href="https://google.com">Visit Google</a>;
ReactDOM.createRoot(document.getElementById("root")).render(reactElem);
