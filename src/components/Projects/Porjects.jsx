import { Card, CardGroup, Container } from "react-bootstrap";
import "./projects.css";
import projects from "../../Config/projects";
export default function Porjects() {
  return (
    <div className="projects" id="projects">
      <Container>
        <CardGroup>
          {projects.map((project, index) => (
            <Card id="card" data-aos={project.animation} key={index}>
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title className="gradient-text">
                  {project.name}
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Card.Text>{project.languages}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <button className="btn btn-danger">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </button>
              </Card.Footer>
            </Card>
          ))}
        </CardGroup>
        <div data-aos="flip-up" className="more-projects">
          <a
            className="btn education-title"
            href="https://github.com/Saliou1920?tab=repositories"
          >
            More Projects
          </a>
        </div>
      </Container>
    </div>
  );
}
