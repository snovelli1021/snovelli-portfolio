import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";

function NavHeader() {
  // Navbar that links to each page section in App.

  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand id="title" href="#top">
          Welcome!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className="navLinks" href="#AboutMe">
              About Me
            </Nav.Link>
            <Nav.Link className="navLinks" href="#Projects">
              UW Projects
            </Nav.Link>
            <Nav.Link className="navLinks" href="#GISProjects">
              ArcGIS Storymaps
            </Nav.Link>
            <Nav.Link className="navLinks" href="#Resume">
              Resume
            </Nav.Link>
            <Nav.Link className="navLinks" href="#Contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
