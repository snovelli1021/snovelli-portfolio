import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe.js";
import Projects from "./components/Projects/Projects.js";
import GISProjects from "./components/GISProjects/GISProjects.js";
import Resume from "./components/Resume/Resume.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import Divider from "./components/Divider/Divider.js";
import Sidebar from "./components/Sidebar/Sidebar.js";

function App() {
  return (
    <div className="App">
      {<Navbar />}
      <div className="sidebarInfo">{<Sidebar />}</div>
      <div>
        <h2>Background Information</h2>
        <br></br>
        <div id="AboutMe">{<AboutMe />}</div>
        {<Divider />}
        {/* Need to add section for personal projects using ArcGIS API
        and update with new class project data after refactoring.
        Should consider adjusting image sizes at large scale depending
        how many projects are rendered. */}
        <h2>UW Projects I Created</h2>
        <br></br>
        <div id="Projects">{<Projects />}</div>
        {<Divider />}
        <h2>ArcGIS StoryMaps</h2>
        <br></br>
        <div id="GISProjects">{<GISProjects />}</div>
        {<Divider />}
        <h2>View My Qualifications</h2>
        <br></br>
        <div id="Resume">{<Resume />}</div>
        {<Divider />}
        <h2>Get In Touch</h2>
        <br></br>
        <div id="Contact"> {<Contact />}</div>
        <div>{<Footer />}</div>
      </div>
    </div>
  );
}

export default App;
