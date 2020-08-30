import React from "react";
import home from "../ParkScreenshots/homeMobile.png";
import signup from "../ParkScreenshots/signupMobile.jpg";
import login from "../ParkScreenshots/loginMobile.jpg";
import park from "../ParkScreenshots/parkMobile.jpg";
import map from "../ParkScreenshots/mapMobile.jpg";
import comments from "../ParkScreenshots/commentsMobile.jpg";
import "./projects.css";
import "./ParkfinderMobile.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import picnic from "../images/parkiconwhite.png";

export default function ParkfinderMobile() {
  return (
    <section className="section3">
      <div className="public">
        <h3>find your park mobile</h3>
        <div id="publicsafety">
          <p id="project-p">
            Find Your Park mobile is a full-stack application using the same
            Node.js/Express APIs as the original application in combination with
            React Native. It contains all of the functionality of the original
            Find Your Park refactored into React Native code. I felt a mobile
            app would be useful due to the simplicity and ease of use of the
            app.
            <br />
          </p>
          <div className="githublist">
            <div>
              <a
                id="githubLink"
                className="repoLinks"
                href="https://github.com/rmac2289/findyourpark-mobile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="project-link-icon"
                  icon={faGithub}
                />
                client side repo
              </a>
            </div>
            <div>
              <a
                id="githubLink"
                className="repoLinks"
                href="https://github.com/rmac2289/parkfinder-api"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="project-link-icon"
                  icon={faGithub}
                />
                server side repo
              </a>
            </div>
            <div>
              <a
                className="repoLinks"
                href="https://apps.apple.com/us/app/find-your-park-ca/id1526502964"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project-link-icon"
                  id="picnic-white"
                  src={picnic}
                  alt="picnic table"
                />
                app store
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mealGenerator">
        <Carousel
          transitionTime={600}
          dynamicHeight={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          className="mealScreenshot"
        >
          <div>
            <img className="mobile-image" src={home} alt="app landing page" />
            <img className="mobile-image" src={park} alt="park page" />
          </div>
          <div>
            <img className="mobile-image" src={map} alt="map" />
            <img className="mobile-image" src={login} alt="login page" />
          </div>
          <div>
            <img className="mobile-image" src={signup} alt="signup page" />
            <img className="mobile-image" src={comments} alt="comments page" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
