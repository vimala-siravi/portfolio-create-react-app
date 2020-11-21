import React from "react";
import Avatar from "../components/Avatar";
import Title from "../components/Title";
import skills from "../constants/badges";
import { Nav } from "react-bootstrap";

export default function About() {
  return (
    <header className="pt-5 mt0" style={{ height: "90vh" }}>
      <div className="container">
        <div className="pt-5 m-auto row">
          <div className="col-lg">
            <Avatar avatarClass="leftAvatar" />
          </div>
          <div className="col-lg">
            <Title title="About Me" textAlignment="left" marginAlignment="0" />
            <div className="mt-2">
              <i> Always be curious about what and why.</i>
              <div className="mt-4">
                <strong>Vimala Sirvi,</strong> Software Developer from{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Pune"
                  rel="noreferrer"
                  target="_blank"
                  className="aboutStack"
                >
                  Pune
                </a>
                , India.
                <br></br>I am a passionate Web developer, with a 2+ years of
                industrial experience. I love coding, especially in{" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  rel="noreferrer"
                  target="_blank"
                  className="aboutStack"
                >
                  JS
                </a>
                . I even write blogs sometimes.
              </div>
              <div className="pt-4">
                {skills.map((skillBadge) => (
                  <span class="badge badgeSkills">{skillBadge.text}</span>
                ))}
              </div>
              <Nav className="mt-4">
                <Nav.Link
                  href="/experience/"
                  className="badge badgeSkills mt-4"
                  style={{
                    color: "#2caeba",
                    textAlign: "center"
                  }}
                >
                  MORE INFO
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
