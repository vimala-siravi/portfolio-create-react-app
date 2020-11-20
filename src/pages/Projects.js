import React from "react";
import Title from "../components/Title";
import projects from "../constants/projects";
import { Card } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
      <div className="container">
        <div>
          <Title
            title="Projects"
            textAlignment="center"
            marginAlignment="auto"
          />
        </div>
        <div className="pt-5 ml-5 mr-4 row">
          {projects.map((project) => (
            <Card
              className="d-inline-flex shadow p-3 mb-5 bg-white rounded zoom"
              style={{
                width: "20rem",
                "margin-right": "25px"
              }}
            >
              <Card.Img variant="top" src={project.projectImage} />
              <Card.Body>
                <Card.Title>{project.projectTitle}</Card.Title>
                <Card.Text>{project.projectContent}</Card.Text>
                {project.buttons.map((button) => (
                  <span class="badge badgeSkills">{button}</span>
                ))}
              </Card.Body>
              <Card.Footer>
                <a
                  href={project.projectUrl}
                  rel="noreferrer"
                  target="_blank"
                  style={{
                    fontSize: "1.5rem",
                    color: "#102a42"
                  }}
                >
                  <FaGithub></FaGithub>
                </a>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </header>
  );
}
