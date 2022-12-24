import React from "react";
import { Button } from "react-bootstrap";
import "./about.css";

function About() {
  return (
    <div className="header-content" id="about">
      <div className="header-content-inner">
        <h1 className="gradient-text">Hi I'm Saliou</h1>
        <p>I am a Software Developer located in New Brunswick.</p>
        <p>
          I have a passion for creating beautiful and intuitive user interfaces.
        </p>
        <Button
          href="../../resume.pdf"
          download
          variant="danger"
          style={{ position: "relative" }}
        >
          Resume
        </Button>
      </div>
      <div className="header-content-image">
        <img src="../../saliou.png" alt="me" />
      </div>
    </div>
  );
}

export default About;
