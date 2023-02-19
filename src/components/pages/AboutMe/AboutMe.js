import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./AboutMe.css";
import bioData from "./bioData.json";

const AboutMe = () => {
  return (
    // Need to style page and cards.

    <div>
      <h1>About Me</h1>
      {bioData.map(({ id, bioPhoto, bioTitle, bioText }) => (
        <Card key={id} className="contentCard" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={bioPhoto}
            id="bioPhoto"
            alt="Screenshot of website or application"
          />
          <Card.Body>
            <Card.Title>{bioTitle}</Card.Title>
            <Card.Text>{bioText}</Card.Text>
          </Card.Body>

          {/* buttons will render cards for bio, work, and education experience.  */}

          <div className="btnGroup">
            <Button id="bioBtn" variant="primary">
              1
            </Button>
            <Button id="workBtn" variant="primary">
              2
            </Button>
            <Button id="eduBtn" variant="primary">
              3
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default AboutMe;
