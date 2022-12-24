import React from "react";
import { Button } from "react-bootstrap";
import "./about.css";

function About() {
  return (
    <div className="header-content" id="about">
      <div className="header-content-inner">
        <h1 className="gradient-text">Hi I'm Saliou</h1>
        <p>
          I'm Software Developer at National Bank of Canada with a passion for
          creating intuitive user interfaces. Thank you for visiting my website.
        </p>
        <Button
          href="../../resume.pdf"
          download
          variant="danger"
          style={{ position: "relative" }}
          size="lg"
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
