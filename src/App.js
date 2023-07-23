import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./components/AboutMe/AboutMe.js";
import MyApps from "./components/MyApps/MyApps.js";
import Projects from "./components/Projects/Projects.js";
import Figma from "./components/Figma/Figma.js";
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
        <div id="AboutMe">{<AboutMe />}</div>
        {<Divider />}
        {/* Need to add section for personal projects using ArcGIS API*/}
        <h2>My Apps</h2>
        <br></br>
        <div id="MyApps">{<MyApps />}</div>
        {<Divider />}
        <h2>UW Projects</h2>
        <br></br>
        <div id="Projects">{<Projects />}</div>
        {<Divider />}
        <h2>Figma Builds</h2>
        <br></br>
        <div id="FigmaBuilds">{<Figma />}</div>
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
