import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Projects from "./components/Projects/Projects.js";
import Resume from "./components/Resume/Resume.js";
import Contact from "./components/Contact/Contact.js";
// import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      {<Navbar />}

      <div>
        <h2>Some Information About Me</h2>
        <div id="AboutMe">{<AboutMe />}</div>
        <h2>Projects I Created</h2>
        <div id="Projects">{<Projects />}</div>
        <h2>View My Qualifications</h2>
        <div id="Resume">{<Resume />}</div>
        <h2>Get In Touch</h2>
        <div id="Contact"> {<Contact />}</div>
      </div>
    </div>
  );
}

export default App;
