import "./App.css";
import { About, Home, Projects } from "./Pages";
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
