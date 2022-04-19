import "./App.css";
import { About, Home, Projects } from "./pages";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/projects" exact element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
