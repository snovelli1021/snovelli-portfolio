import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Stephen Novelli Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#AboutMe">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#Projects">Projects</NavDropdown.Item>
              {/*           Add ArcGIS Storymap examples to this page?
              <NavDropdown.Item href="#WorkExamples">Work Examples</NavDropdown.Item> */}
              <NavDropdown.Item href="#Resume">Resume</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Contact">Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
