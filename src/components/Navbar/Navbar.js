import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";

function NavHeader() {
  return (
    <Navbar className="navbar" expand="lg">
      {<Sidebar />}
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
              Projects
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
{
  /*           Add ArcGIS Storymap examples to this page?
              <Nav.Link href="#WorkExamples">Work Examples</Nav.Link> */
}
