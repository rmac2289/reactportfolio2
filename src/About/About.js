import React from "react";
import "./About.css";
import Nav from "../Nav/Nav";
import Burger from "../Burger/Burger";
import me from "../images/aboutme.jpg";

export default function About() {
  return (
    <div className="App about-page">
      <div id="body">
        <main>
          <Burger id="burger" />
          <Nav id="nav" />
          <div className="about-box">
            <div className="portrait-box">
              <img id="portrait" src={me} alt="portrait" />
            </div>

            <div className="beforesection1">
              <section className="section1">
                <h4 style={{ paddingLeft: 20 }}>about me</h4>
                <p>
                  I'm a native East Coaster, ex-Midwesterner, and current West
                  Coaster residing in the SF Bay Area. I've recently finished an
                  apprenticeship with Bloc.io/Thinkful and I'm taking the next
                  steps towards a long term career in software development. For
                  the last three years or so, I’ve worked as a 9-1-1 dispatcher
                  - an extremely rewarding career path, but also hectic at
                  times. I felt that career-wise something was missing, and I
                  began to search for ways to learn how to code. I taught myself
                  as much as I could on my own before getting into a structured
                  program. The opportunity to constantly learn new technologies
                  for the rest of my career is exciting - the field seems to
                  contain limitless opportunities to grow and gain new skills.
                  Although perfectly content to work independently, I tend to
                  thrive in team atmospheres. Working with other developers is
                  something I’m very much looking forward to.
                  <br />
                  <br />
                  Outside of web development, I enjoy spending my time helping
                  others and spending as much time as possible outside**.
                  Staying healthy is important to me, so I try to make sure
                  exercise is always a part of my life. I strongly believe a
                  rewarding life is built on experiences - I love visiting new
                  places and discovering the unfamiliar things that life has to
                  offer.
                  <br />
                  <br />
                  <span id="corona">
                    **Before Corona. I now enjoy spending lots and lots of time
                    at home with my fiancé Nicole and our cat Holly.
                  </span>
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
