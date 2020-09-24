import React from "react";
import "./projects.css";
import Accordion from "../Accordion/Accordion";

export default function Projects() {
  return (
    <div className="projects App">
      <div className="body">
        <main className="main-border">
          <div id="line"></div>
          <section className="projectsHeader">
            <h4 className="projects-header">projects</h4>
          </section>
          <Accordion />
        </main>
      </div>
    </div>
  );
}
