import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavHeader({ setCurrentPage }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#Home">Stephen Novelli Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCurrentPage("Home")} href="#Home">
              Home
            </Nav.Link>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item
                onClick={() => setCurrentPage("AboutMe")}
                href="#AboutMe"
              >
                About Me
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => setCurrentPage("Projects")}
                href="#Projects"
              >
                Projects
              </NavDropdown.Item>
              {/*           Add ArcGIS Storymap examples to this page?
              <NavDropdown.Item href="#WorkExamples">Work Examples</NavDropdown.Item> */}
              <NavDropdown.Item
                onClick={() => setCurrentPage("Resume")}
                href="#Resume"
              >
                Resume
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => setCurrentPage("Contact")}
                href="#Contact"
              >
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavHeader;
