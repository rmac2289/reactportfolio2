import React from "react";
import "./Resume.css";
import resume from "./resume92220.pdf";
import Nav from "../Nav/Nav";
import Burger from "../Burger/Burger";
export default function Resume() {
  return (
    <>
      <Burger />
      <Nav />
      <div className="resume-page">
        <iframe
          height="100%"
          width="100%"
          src={resume}
          title="Ross MacDonald Resume"
        ></iframe>
      </div>
    </>
  );
}
