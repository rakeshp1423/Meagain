import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import DesignShowcase from "./pages/DesignShowcase";

export default function App() {
  return (
    <Router>
      <div className="bg-[#02020A] text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero id="home" />
                <About id="about-me" />
                <Skills id="skills" />
                <Experience id="experience" />
                <Projects id="projects" />
                <Contact id="contact" />
              </>
            }
          />
          <Route path="/designs" element={<DesignShowcase />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
