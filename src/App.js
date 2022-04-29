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
          <Route path="/Life-Of-Giving/" element={<Home />} />
          <Route path="/Life-Of-Giving/about" element={<About />} />
          <Route path="/Life-Of-Giving/Causes" element={<Causes />} />
          <Route path="/Life-Of-Giving/Gallery" element={<Gallery />} />
          <Route path="/Life-Of-Giving/News" element={<News />} />
          <Route path="/Life-Of-Giving/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
