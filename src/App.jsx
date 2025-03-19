import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import { Nav } from "./components/nav";
import Show from "./components/xshow";
import About from "./components/about";
import Card from "./components/card";
import CardProvider from "./context/cardContext";

const App = () => {
  return (
    <CardProvider>
      <div className="bg-blue-100 w-screen min-h-screen">
        <Router >
          <Nav />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/show" element={<Show />} />
              <Route path="/about" element={<About />} />
              <Route path="/card" element={<Card />} />
            </Routes>
          </div>
        </Router>
      </div>
    </CardProvider>
  );
};

export default App;
