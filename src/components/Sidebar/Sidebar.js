import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

//  Need to style and position the button (Upper Left) for the sidebar. Thinking about using the information icon.
function Sidebar({ name }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>About</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Add detailed text about each page and maybe online profiles?
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
