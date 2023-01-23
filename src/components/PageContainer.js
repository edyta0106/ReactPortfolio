import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

export default function PageContainer() {
  return (
    <div className="PageContainer bg">
      <Routes>
        <Route exact path="/ReactPortfolio" element={<About />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
