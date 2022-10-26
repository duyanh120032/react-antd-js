import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes,Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* header */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
      <Routes>
        header here
        <Route path="" element={<div>Home</div>} />
        <Route path="/about" element={<div>about</div>} />
        footer here
      </Routes>
    </div>
  );
}

export default App;
