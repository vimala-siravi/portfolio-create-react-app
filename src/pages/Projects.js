import React from "react";
import Title from "../components/Title";
import projects from "../constants/projects";
import Cards from "../components/Cards";

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
          <Cards cardItems={projects} />
        </div>
      </div>
    </header>
  );
}
