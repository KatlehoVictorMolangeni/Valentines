import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import LoveLetter from "./Components/LoveLetter";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/love-letter" element={<LoveLetter />} />
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
    </Router>
  );
}

export default App;
