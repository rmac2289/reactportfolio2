import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWordpress,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <ul className="icons">
        <li>
          <a
            id="git"
            href="https://github.com/rmac2289"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faGithub}
              alt="github link"
              className="fontawesome"
            />
            <span className="hidden-text">GitHub</span>
          </a>
        </li>
        <li>
          <a
            id="wordpress"
            href="https://ross-scott-macdonald.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faWordpress}
              alt="wordpress blog link"
              className="fontawesome"
            />
            <span className="hidden-text">Blog</span>
          </a>
        </li>
        <li>
          <a
            id="linked"
            href="https://www.linkedin.com/in/ross-macdonald-0875501a3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              size="2x"
              icon={faLinkedin}
              alt="linkedIn link"
              className="fontawesome"
            />
            <span className="hidden-text">linked in</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}
