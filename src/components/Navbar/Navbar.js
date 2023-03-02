import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Sidebar from "../Sidebar/Sidebar";

function NavHeader() {
  return (
    <Navbar bg="light" expand="lg">
      {<Sidebar />}
      <Container>
        <Navbar.Brand href="#Home">Welcome</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#AboutMe"> About Me</Nav.Link>
            <Nav.Link href="#Projects">Projects</Nav.Link>
            <Nav.Link href="#Resume">Resume</Nav.Link>
            <NavDropdown.Divider />
            <Nav.Link href="#Contact">Contact</Nav.Link>
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
