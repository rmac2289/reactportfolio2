import React from "react";
import "../About/About.css";
import "./Experience.css";
import Nav from "../Nav/Nav";
import Burger from "../Burger/Burger";
import { img } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import reactIcon from "../images/react100px.png";
import nodeIcon from "../images/node96px.png";
import jsIcon from "../images/js96px.png";
import htmlIcon from "../images/html96px.png";
import cssIcon from "../images/css96px.png";
import gitIcon from "../images/git96px.png";
import githubIcon from "../images/github96px.png";
import jqueryIcon from "../images/jquery100px.png";
import postgresIcon from "../images/postgres96px.png";
import terminalIcon from "../images/terminal96px.png";
import wordpressIcon from "../images/wordpress96px.png";
import appStoreIcon from "../images/appstore96px.png";
import angularIcon from "../images/angular96px.png";
import pythonIcon from "../images/python96px.png";
import cpanelIcon from "../images/cpanel96px.png";
import graphql from "../images/graphql.svg";

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    border: "1px solid black",
    backgroundColor: theme.palette.common.white,
    color: "black",
    boxShadow: theme.shadows[1],
    fontFamily: "Quattrocento",
    fontSize: 14,
    margin: 0,
    fontWeight: 900,
  },
}))(Tooltip);

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
              <h4>experience</h4>
              <p>
                My most significant experience in web development is through my
                apprenticeship with Bloc/Thinkful. Through a mix of learning
                modules, building and deploying apps, one-on-one sessions with
                an experienced mentor, and mock technical interviews, I've
                learned an incredible amount. I have several applications that
                I've built from start to finish currently deployed to production
                - they can be viewed on my home page. Creating a functioning
                application from scratch is extremely rewarding - I look forward
                to creating apps independently as well as contributing towards
                my future development team's success.
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
              <h4>tech I've worked with</h4>
              <ul className="techlist">
                <LightTooltip
                  title="React / React Native"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={reactIcon}
                      alt="react"
                    />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="Node.js"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img className="tech-list-icon" src={nodeIcon} alt="node" />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="JavaScript"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img className="tech-list-icon" src={jsIcon} alt="js" />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="HTML5"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img className="tech-list-icon" src={htmlIcon} alt="html" />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="CSS3"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img className="tech-list-icon" src={cssIcon} alt="css" />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="Git"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img className="tech-list-icon" src={gitIcon} alt="git" />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="GitHub"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={githubIcon}
                      alt="github"
                    />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="Express.js"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech" id="express">
                    Express.js
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="jQuery"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={jqueryIcon}
                      alt="jquery"
                    ></img>
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="PostgreSQL"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={postgresIcon}
                      alt="postgres"
                    />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="Terminal"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={terminalIcon}
                      alt="terminal"
                    />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="iTunes App Store"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={appStoreIcon}
                      alt="app store"
                    />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="Cpanel"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={cpanelIcon}
                      alt="cpanel"
                    />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="Wordpress"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={wordpressIcon}
                      alt="wordpress"
                    />
                  </li>
                </LightTooltip>
              </ul>
              <h4>tech I'm learning</h4>
              <ul className="techlist">
                <LightTooltip
                  title="Python"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={pythonIcon}
                      alt="python"
                    />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="Angular"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={angularIcon}
                      alt="angular"
                    />
                  </li>
                </LightTooltip>
                <LightTooltip
                  title="GraphQL"
                  TransitionProps={{ timeout: 650 }}
                  placement="top"
                  arrow
                >
                  <li className="tech">
                    <img
                      className="tech-list-icon"
                      src={graphql}
                      alt="angular"
                    />
                  </li>
                </LightTooltip>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
