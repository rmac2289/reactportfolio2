import React, { useState, useRef } from "react";
import Meal from "../Projects/Meal";
import Hearsay from "../Projects/Hearsay";
import picnic from "../images/picnic.png";
import bullhorn from "../images/bullhorn.png";
import food from "../images/vegetable.png";
import Parkfinder from "../Projects/Parkfinder";
import ParkfinderMobile from "../Projects/ParkfinderMobile";
import "./Accordion.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faNodeJs,
  faJs,
  faHtml5,
  faCss3,
  faGitAlt,
  faAppStore,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core";
import badge from "../images/projectofmonth.png";
import whitePicnic from "../images/parkiconwhite.png";

const scrollToRef = (ref) =>
  window.scrollTo({
    left: 0,
    top: ref.current.offsetTop - 20,
    behavior: "smooth",
  });
const scrollToHearsay = (ref) =>
  window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: "smooth" });
const scrollToMobile = (ref) =>
  window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: "smooth" });
const scrollToMeal = (ref) =>
  window.scrollTo({ left: 0, top: ref.current.offsetTop, behavior: "smooth" });

export default function Accordion() {
  const parkRef = useRef(null);
  const hearsayRef = useRef(null);
  const mealRef = useRef(null);
  const mobileRef = useRef(null);

  const parkScroll = () => scrollToRef(parkRef);
  const hearsayScroll = () => scrollToHearsay(hearsayRef);
  const mealScroll = () => scrollToMeal(mealRef);
  const mobileScroll = () => scrollToMobile(mobileRef);

  const [oneIsOpen, setOneIsOpen] = useState(false);
  const [twoIsOpen, setTwoIsOpen] = useState(false);
  const [threeIsOpen, setThreeIsOpen] = useState(false);
  const [fourIsOpen, setFourIsOpen] = useState(false);

  const toggleOne = () => {
    setOneIsOpen(!oneIsOpen);
    !oneIsOpen && parkScroll();
  };
  const toggleTwo = () => {
    setTwoIsOpen(!twoIsOpen);
    !twoIsOpen && mobileScroll();
  };
  const toggleThree = () => {
    setThreeIsOpen(!threeIsOpen);
    !threeIsOpen && hearsayScroll();
  };
  const toggleFour = () => {
    setFourIsOpen(!fourIsOpen);
    !fourIsOpen && mealScroll();
  };

  return (
    <div className="accordion-container">
      <div className="accordion-button" onClick={toggleOne}>
        <div className="accordion-title">
          <img id="picnic" src={picnic} alt="picnic table" />
          find your park
        </div>
        <div className="icon-container">
          <FontAwesomeIcon className="tech-icon" icon={faReact} />
          <FontAwesomeIcon className="tech-icon" icon={faNodeJs} />
          <FontAwesomeIcon className="tech-icon" icon={faJs} />
          <FontAwesomeIcon className="tech-icon" icon={faNpm} />
          <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
          <FontAwesomeIcon className="tech-icon" icon={faCss3} />
          <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
        </div>
      </div>
      <div className="accordion-sub-title" onClick={toggleOne}>
        <div className="subtitle-box">
          <p className="project-description">
            A full-stack application for Californians looking to head outdoors.
            The app allows a user to find parks in their area via several
            different search methods. I built this because of what I saw as a
            shortage of aggregated data on parks run by different agencies
            (state, national, county, etc.). Through further data aggregation,
            the app will soon be available for other states.
          </p>
          <p id="featured-span">
            <img id="badge" src={badge} alt="badge" />
            <a
              id="badge-link"
              href="https://careerkarma.com/blog/projects-spotlight-7-24-2020/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Featured as a project of the month on careerkarma.com.
            </a>
          </p>
        </div>
        <FontAwesomeIcon
          className="accordion-icon"
          icon={!oneIsOpen ? faChevronDown : faChevronUp}
        />
      </div>
      <AnimatePresence>
        {oneIsOpen && (
          <motion.div
            className="accordion-1"
            key="one"
            exit={{ y: -100, opacity: 0 }}
          >
            <Parkfinder />
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={parkRef}></div>

      <div className="accordion-button" onClick={toggleTwo}>
        <div className="accordion-title">
          <img
            id="picnic"
            className="picnic-white"
            src={whitePicnic}
            alt="picnic table"
          />
          find your park mobile
        </div>
        <div className="icon-container">
          <FontAwesomeIcon className="tech-icon" icon={faAppStore} />
          <FontAwesomeIcon className="tech-icon" icon={faReact} />
          <FontAwesomeIcon className="tech-icon" icon={faNodeJs} />
          <FontAwesomeIcon className="tech-icon" icon={faJs} />
          <FontAwesomeIcon className="tech-icon" icon={faNpm} />
          <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
        </div>
      </div>
      <div className="accordion-sub-title" onClick={toggleTwo}>
        <div className="subtitle-box">
          <p className="project-description">
            The Find Your Park iOS mobile app. Built with React Native, the app
            uses similar logic to the original app but refactored to native
            standards. Mobile version contains all functionality of the web app,
            with slightly different formatting. Available now on the Apple App
            Store.
          </p>
        </div>
        <FontAwesomeIcon
          className="accordion-icon"
          icon={!twoIsOpen ? faChevronDown : faChevronUp}
        />
      </div>
      <AnimatePresence>
        {twoIsOpen && (
          <motion.div
            key="two"
            exit={{ y: -100, opacity: 0 }}
            className="accordion-1"
          >
            <ParkfinderMobile />
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={mobileRef}></div>

      <div className="accordion-button" onClick={toggleThree}>
        <div className="accordion-title">
          <img id="bullhorn" src={bullhorn} alt="bullhorn icon" />
          hearsay
        </div>
        <div className="icon-container">
          <FontAwesomeIcon className="tech-icon" icon={faReact} />
          <FontAwesomeIcon className="tech-icon" icon={faNodeJs} />
          <FontAwesomeIcon className="tech-icon" icon={faJs} />
          <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
          <FontAwesomeIcon className="tech-icon" icon={faCss3} />
          <FontAwesomeIcon className="tech-icon" icon={faNpm} />
          <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
        </div>
      </div>
      <div className="accordion-sub-title" onClick={toggleThree}>
        <p className="project-description">
          Hearsay is a full-stack application built with social justice in mind.
          Users can log encounters with law enforcement and speak on discussion
          boards about criminal justice issues. This app was built with current
          events in mind - with so much turmoil and change, I feel we need more
          venues for people to make their voices heard.
        </p>
        <FontAwesomeIcon
          className="accordion-icon"
          icon={!threeIsOpen ? faChevronDown : faChevronUp}
        />
      </div>
      <AnimatePresence>
        {threeIsOpen && (
          <motion.div
            key="three"
            exit={{ y: -100, opacity: 0 }}
            className="accordion-2"
          >
            <Hearsay />
          </motion.div>
        )}
      </AnimatePresence>
      <div ref={hearsayRef}></div>

      <div className="accordion-button" onClick={toggleFour}>
        <div className="accordion-title">
          <img id="food" src={food} alt="food icon" />
          meal generator
        </div>
        <div className="icon-container">
          <FontAwesomeIcon className="tech-icon" icon={faJs} />
          <FontAwesomeIcon className="tech-icon" icon={faHtml5} />
          <FontAwesomeIcon className="tech-icon" icon={faCss3} />
          <FontAwesomeIcon className="tech-icon" icon={faGitAlt} />
        </div>
      </div>
      <div className="accordion-sub-title" onClick={toggleFour}>
        <p className="project-description">
          The meal generator is a single-page app that allows the user to create
          a meal plan for the week. I built this out of necessity - working full
          time while learning to code has been tough at times; the meal
          generator maps out every meal and provides links to recipes,
          automating a time-consuming task for your week.
        </p>
        <FontAwesomeIcon
          className="accordion-icon"
          icon={!fourIsOpen ? faChevronDown : faChevronUp}
        />
      </div>
      <AnimatePresence>
        {fourIsOpen && (
          <motion.div
            key="four"
            exit={{ y: -100, opacity: 0 }}
            className="accordion-3"
          >
            <Meal />
          </motion.div>
        )}
      </AnimatePresence>
      <div style={{ visibility: "hidden", marginTop: 150 }} ref={mealRef}>
        hidden
      </div>
    </div>
  );
}
