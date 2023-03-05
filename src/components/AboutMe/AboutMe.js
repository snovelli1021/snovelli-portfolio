import React from "react";
import Card from "react-bootstrap/Card";
import "./AboutMe.css";
import bioData from "./bioData.json";
import workData from "./workData.json";
import eduData from "./eduData.json";
import Col from "react-bootstrap/Row";

const AboutMe = () => {
  return (
    <div>
      {/* Personal Bio section that returns cards for my educational experience. Renders information from "./bioData.json."*/}
      <div id="bioDiv">
        {bioData.map(({ id, bioPhoto, bioTitle, bioText }) => (
          <Card key={id} className="bioCard">
            <Card.Img
              variant="top"
              src={bioPhoto}
              alt="Profile Picture of Stephen Novelli"
            />
            <Card.Body>
              <Card.Title>{bioTitle}</Card.Title>
              <Card.Text>{bioText}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Work section that returns cards for my work experience. Renders information from "./workData.json". */}
      <div id="workDiv">
        <Col xs={1}>
          {workData.map(
            ({ id, workPhoto, workTitle, workText, workFooter }) => (
              <Card key={id} className="workCard">
                <Card.Img
                  variant="top"
                  src={workPhoto}
                  className="workPhoto"
                  alt="Screenshots of company logos of previsous and current employers"
                />
                <Card.Body>
                  <Card.Title>{workTitle}</Card.Title>
                  <Card.Text>{workText}</Card.Text>
                  <p>{workFooter}</p>
                </Card.Body>
              </Card>
            )
          )}
        </Col>
      </div>

      {/* Eductaion section that returns cards for my educational experience. Renders information from "./eduData.json."*/}
      <div id="eduDiv">
        <Col xs={1}>
          {eduData.map(({ id, eduPhoto, eduTitle, eduText, eduFooter }) => (
            <Card key={id} className="workCard">
              <Card.Img
                variant="top"
                src={eduPhoto}
                className="eduPhoto"
                alt="Screenshots of company logos of previsous and educational institutions"
              />
              <Card.Body>
                <Card.Title>{eduTitle}</Card.Title>
                <Card.Text>{eduText}</Card.Text>
                <p>{eduFooter}</p>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </div>
    </div>
  );
};

export default AboutMe;
