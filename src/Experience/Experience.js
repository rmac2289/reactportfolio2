import React from "react";
import "../About/About.css";
import "./Experience.css";
import Nav from "../Nav/Nav";
import Burger from "../Burger/Burger";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import { tooltipData, tooltipLearningData } from "./tooltipData";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    border: "1px solid black",
    backgroundColor: theme.palette.common.white,
    color: "black",
    boxShadow: theme.shadows[1],
    fontFamily: "Karla, sans-serif",
    fontSize: 14,
    margin: 0,
    fontWeight: 900,
  },
}))(Tooltip);

const tooltipMap = (list) => {
  return list.map((v) => {
    return (
      <LightTooltip
        key={v.title}
        title={v.title}
        TransitionProps={{ timeout: 650 }}
        placement="top"
        arrow
      >
        {v.title !== "Express.js" ? (
          <li className="tech">
            <img className="tech-list-icon" src={v.src} alt={v.alt} />
          </li>
        ) : (
          <li className="tech" id="express">
            Express.js
          </li>
        )}
      </LightTooltip>
    );
  });
};
const techList = tooltipMap(tooltipData);
const techLearningList = tooltipMap(tooltipLearningData);

export default function Experience() {
  return (
    <div className="App experience-page">
      <div id="body">
        <main>
          <Burger id="burger" />
          <Nav id="nav" />
          <div
            style={{ width: "100%", paddingLeft: "initial" }}
            className="beforesection1"
          >
            <section className="section2">
              <h4 style={{ paddingLeft: 20 }}>experience</h4>
              <p>
                My most significant experience has come through my time with
                Bloc/Thinkful. Through a mix of learning modules, building and
                deploying apps, one-on-one sessions with an experienced mentor,
                and mock technical interviews, I've learned an incredible
                amount. I have several applications that I've built from start
                to finish currently deployed to production - they can be viewed
                on my home page. Creating a functioning application from scratch
                is extremely rewarding - I look forward to creating apps
                independently as well as contributing towards my future
                development team's success.
                <br />
                <br />
                Through my previous career, I've learned to quickly make
                decisions, take control of situations, lead effectively,
                communicate with team members, and deal with a highly stressful
                work environment. I’ve gone from being brand new to becoming a
                trainer within a year and a supervisor within three years. I’m
                ready to put the same efforts that led to those achievements
                into a career in web development.
              </p>
              <h4 style={{ paddingLeft: 20 }}>tech I've worked with</h4>
              <ul className="techlist">{techList}</ul>
              <h4 style={{ paddingLeft: 20 }}>tech I'm learning</h4>
              <ul className="techlist">{techLearningList}</ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
