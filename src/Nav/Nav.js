import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <nav>
      <ul className="links">
        <li>
          <Link onClick={scrollToTop} to="/">
            home
          </Link>
        </li>
        <li>
          <Link onClick={scrollToTop} to="/about">
            about
          </Link>
        </li>
        <li>
          <Link onClick={scrollToTop} to="/experience">
            experience
          </Link>
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
          <Link onClick={scrollToTop} id="resume" to="/resume">
            resume
          </Link>
        </li>
        <li>
          <Link onClick={scrollToTop} className="contact" to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
