import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

// this function closes the Navbar when a Nav.Link is clicked.
function NavHeader() {
  const [expanded, setExpanded] = useState(false);

  const navToggle = () => {
    setExpanded(expanded ? false : true);
  };

  const closeNav = () => {
    setExpanded(false);
  };

  // Navbar that links to each page section in App.
  return (
    <Navbar className="navbar" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand id="title" href="#top" to="/" onClick={closeNav}>
          Welcome!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={navToggle} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="navLinks" href="#AboutMe" onClick={closeNav}>
              About Me
            </Nav.Link>
            <Nav.Link className="navLinks" href="#Projects" onClick={closeNav}>
              UW Projects
            </Nav.Link>
            <Nav.Link
              className="navLinks"
              href="#GISProjects"
              onClick={closeNav}
            >
              ArcGIS Storymaps
            </Nav.Link>
            <Nav.Link className="navLinks" href="#Resume" onClick={closeNav}>
              Resume
            </Nav.Link>
            <Nav.Link className="navLinks" href="#Contact" onClick={closeNav}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
