import React from "react";
import { Card, CardGroup } from "react-bootstrap";

export default function Porjects() {
  const projects = [
    {
      name: "Images Gallery",
      description:
        "A web app that uses the Unplash API to display beautiful images. The user can search for images by keyword, and can also save the images to their own collection. ",
      languages: "React, React-Router, Unplash API, firebase auth",
      link: "https://github.com/Saliou1920/Images-Gallery",
      image: "gallery.png",
    },
    {
      name: "Word Scrambler",
      description:
        "A word scrambler and typing game. The user has to type the unscrambled word. If the whole sentence is correctly guessed, there should be a next button that shows at the bottom. If you click it would try to fetch the next sentence from the API, increasing the counter",
      languages: "React, HTML, CSS, Javascript",
      link: "https://github.com/Saliou1920/word_scrambler",
      image: "word.png",
    },
    {
      name: "BLOG",
      description:
        " A blog website that uses MYSQL to store and retrieve data. The admin can create a new post, edit an existing post, and delete a post. He can also create a new user, edit an existing user, and delete a user.",
      link: "https://github.com/Saliou1920/Blog",
      image: "blog.png",
    },
  ];

  return (
    <CardGroup>
      {projects.map((project) => (
        <Card>
          <Card.Img variant="top" src={project.image} />
          <Card.Body>
            <Card.Title>{project.name}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>{project.languages}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Card.Link href={project.link}>Github</Card.Link>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
}
