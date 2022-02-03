import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HeaderWithNavbar,
  Home,
  About,
  Contact,
  Footer,
  Causes,
  Gallery,
  News,
} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderWithNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Causes" element={<Causes />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/News" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
