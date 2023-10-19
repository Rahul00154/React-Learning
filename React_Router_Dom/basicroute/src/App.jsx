import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <h1>
        <i>Learning React Router</i>
      </h1>
      <Router>
        <div>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//when we have multiple pages like we do in html that when we creare multiple file and link in html file that can be done through react router

//In routes component we can describe individual routes insid it

//And the router comonent is different this router component tell react router dom that whatever is inside of it can use react router dom functionalities

//Router is used to define where in your app you want to have access to react router dom stuff
