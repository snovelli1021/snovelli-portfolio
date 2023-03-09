import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Sidebar.css";
import data from "./sidebarData.json";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // Include handleClose for Sidebar on button click.
    <>
      <svg
        onClick={handleShow}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-info-square-fill"
        viewBox="0 0 16 16"
      >
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
      </svg>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Additional Information</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body id="sidebarImg">
          <div>
            <p id="offcanvas-text">
              Couldn’t find what you’re looking for or want to learn more?
              Follow the links below to find additional information.
            </p>

            {data.map(({ id, url, profile }) => (
              <ul key={id} className="linkGroup">
                <li>
                  <a
                    className="profileLinks"
                    href={url}
                    alt="Link to online profile"
                    target="blank"
                  >
                    {profile}
                  </a>
                </li>
              </ul>
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
