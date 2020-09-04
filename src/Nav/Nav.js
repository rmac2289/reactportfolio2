import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="links">
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/experience">experience</Link>
        </li>
        <li>
          <a
            id="blog"
            href="https://ross-scott-macdonald.com/blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog
          </a>
        </li>
        <li>
          <Link
            id="resume"
            to="/resume"
          >
            resume
          </Link>
        </li>
        <li>
          <Link className="contact" to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
