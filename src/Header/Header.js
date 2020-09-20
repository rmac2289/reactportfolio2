import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="banner" role="banner">
      <div className="header-box">
        <h1 className="header"><strong style={{color: "red"}}>Ross</strong><br/> MacDonald</h1>
        <h2 className="sub-header">full-stack web developer
        </h2>
        <div className="arrow">
          <h4
            className="latest-work"
            onClick={() => window.scrollTo({ top: 1100, behavior: "smooth" })}
          >
            my latest work
          </h4>
          <FontAwesomeIcon size="2x" id="hand-down" icon={faHandPointDown} />
        </div>
      </div>
    </header>
  );
}
