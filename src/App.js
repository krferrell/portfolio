import "./App.css";
import { About, Contact, Home, Projects } from "./pages";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer, Logo, Navigation } from "./components";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  

  return (
    <div className="App">
      <Logo></Logo>
      <Navigation></Navigation>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<Projects />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
