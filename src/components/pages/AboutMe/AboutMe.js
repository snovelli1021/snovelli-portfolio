import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import "./AboutMe.css";
import bioData from "./bioData.json";
import workData from "./workData.json";
import eduData from "./eduData.json";

const AboutMe = () => {
  return (
    // Need to style page and cards.

    <div>
      <h1>About Me</h1>

      <Carousel interval={null}>
        <Carousel.Item interval={null} className="carouselItem">
          {bioData.map(({ id, bioPhoto, bioTitle, bioText }) => (
            <Card key={id} className="bioCard" style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={bioPhoto}
                id="bioPhoto"
                alt="Profile Picture of Stephen Novelli"
              />
              <Card.Body>
                <Card.Title>{bioTitle}</Card.Title>
                <Card.Text>{bioText}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Carousel.Item>

        {/* Need to edit card text. */}

        <Carousel.Item interval={null} className="carouselItem">
          {workData.map(
            ({ id, workPhoto, workTitle, workText, workFooter }) => (
              <Card key={id} className="workCard" style={{ width: "18rem" }}>
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
        </Carousel.Item>

        {/* Need to edit card text. */}

        <Carousel.Item interval={null} className="carouselItem">
          {eduData.map(({ id, eduPhoto, eduTitle, eduText, eduFooter }) => (
            <Card key={id} className="workCard" style={{ width: "18rem" }}>
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
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AboutMe;
