import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home.js";
import AboutMe from "./components/pages/AboutMe/AboutMe.js";
import Projects from "./components/pages/Projects/Projects.js";
import Resume from "./components/pages/Resume/Resume.js";
import Contact from "./components/pages/Contact/Contact.js";
// import Footer from "./components/Footer/Footer.js";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div className="App">
      {<Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />}

      {currentPage === "Home" && <Home />}
      {currentPage === "AboutMe" && <AboutMe />}
      {currentPage === "Projects" && <Projects />}
      {currentPage === "Resume" && <Resume />}
      {currentPage === "Contact" && <Contact />}

      {/* <Footer /> */}
    </div>
  );
}

export default App;
