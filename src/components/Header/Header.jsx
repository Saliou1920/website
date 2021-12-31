import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./header.css";

export default function Menu() {
  return (
    <div className="header">
      <Container>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <h2 className="gradient-text">Saliou</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ flexGrow: "0" }}
            >
              <Nav className="" style={{ gap: "2em" }}>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#education">Education</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="header-content" id="about">
          <div
            className="header-content-inner"
            // data-aos="fade-right"
            // data-aos-offset="300"
            // data-aos-easing="ease-in-sine"
          >
            <h1 className="gradient-text">Hi I'm Saliou</h1>
            <p>I am a Software Developer located in New Brunswick.</p>
            <p>
              I have a passion for creating beautiful and intuitive user
              interfaces.
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
      </Container>
    </div>
  );
}
