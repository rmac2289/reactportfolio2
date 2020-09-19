import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header role="banner">
      <div className="header-box">
        <h1 className="header"></h1>
        <h2 className="header">
        </h2>
        <div className="arrow">
          <h4
            className="latest-work"
            onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
          >
            my latest work
          </h4>
          <FontAwesomeIcon size="2x" id="hand-down" icon={faHandPointDown} />
        </div>
      </div>
    </header>
  );
}
