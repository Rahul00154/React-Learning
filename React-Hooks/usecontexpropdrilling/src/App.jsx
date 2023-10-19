import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Rahul Anand");
  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={
                <Profile /* username={username} setUsername={setUsername} */ />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;

//StateManagement

//PropDrilling :- it is basically the idea of passing prop to a component and that prop won't used in that component its main purpose would be just to be passed down to another component

// const TopComponent = () => {
//   const [state, setState] = useState();
//   return (
//     <div>
//       <MiddleComponent state={state} />
//     </div>
//   );
// };

// const MiddleComponent = (state) => {
//   return (
//     <div>
//       <BottomComponent state={state} />
//     </div>
//   );
// };

// const BottomComponent = (state) => {
//   return (
//     <div>
//       <BottomComponent state={state} />
//     </div>
//   );
// };
