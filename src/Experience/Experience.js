import React from 'react';
import '../About/About.css';
import Nav from '../Nav/Nav';
import Burger from '../Burger/Burger';
import jquery from '../images/jquery.png';
import knex from '../images/knex.png';
import postgres from '../images/postgres.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faJsSquare, faHtml5, faCss3Alt, faGitSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';


const LightTooltip = withStyles((theme) => ({
    tooltip: {
        border: '1px solid black',
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
      margin: 0,
      fontWeight: 900,
    },
  }))(Tooltip);

export default function Experience(){
    return (
        <div className="App">
        <div id="body">
        <main>
        <Burger id="burger"/>
        <Nav id="nav"/>
        <div className="beforesection1">
            <section className="section2">
                <h4>experience</h4>
                <p>
                My most significant experience in web development is through my apprenticeship 
                with Bloc/Thinkful. Through a mix of learning modules, building and deploying apps, 
                one-on-one sessions with an experienced mentor, and mock technical interviews, I've 
                learned an incredible amount. I have several applications that I've built from start 
                to finish currently deployed to production - they can be viewed on my home page. Creating
                a functioning application from scratch is extremely rewarding - I look forward to 
                creating apps independently as well as contributing towards my future development team's success.
                <br/><br/>
                Through my previous career, I've learned to quickly make decisions, take control of situations, 
                lead effectively, communicate with team members, and deal with a highly stressful work environment.
                I’ve gone from being brand new to becoming a trainer within a year and a supervisor within three years.  
                I’m ready to put the same efforts that led to those achievements into a career in web development. 
                </p>
                <h4>tech I've worked with</h4>
                <ul className="techlist">
                    <LightTooltip title="React" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="tech"><FontAwesomeIcon icon={faReact} size="2x"/></li>
                    </LightTooltip>
                    <LightTooltip title="Node.js" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="tech"><FontAwesomeIcon icon={faNode} size="2x"/></li>
                    </LightTooltip>
                    <LightTooltip title="JavaScript" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="tech"><FontAwesomeIcon icon={faJsSquare} size="2x"/></li>
                    </LightTooltip>
                    <LightTooltip title="HTML5" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="tech"><FontAwesomeIcon icon={faHtml5} size="2x"/></li>
                    </LightTooltip>
                    <LightTooltip title="CSS3" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="tech"><FontAwesomeIcon icon={faCss3Alt} size="2x"/></li>
                    </LightTooltip>
                    <LightTooltip title="Git" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="tech"><FontAwesomeIcon icon={faGitSquare} size="2x"/></li>
                    </LightTooltip>
                    <LightTooltip title="GitHub" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="tech"><FontAwesomeIcon icon={faGithubSquare} size="2x"/></li>
                    </LightTooltip>
                    <LightTooltip title="Express.js" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="tech" id="express">Express.js</li>
                    </LightTooltip>
                    <LightTooltip title="jQuery" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li id="jquery" className="tech"><img src={jquery} alt="jquery"></img></li>
                    </LightTooltip>
                    <LightTooltip title="Knex.js" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li id="knex" className="tech"><img src={knex} alt="knex" /></li>
                    </LightTooltip>
                    <LightTooltip title="PostgreSQL" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li id="postgres" className="tech"><img src={postgres} alt="postgres" /></li>
                    </LightTooltip>
                    <LightTooltip title="Terminal" TransitionProps={{ timeout: 650 }} placement="top" arrow>
                    <li className="tech"><FontAwesomeIcon icon={faTerminal} size="2x"/></li>
                    </LightTooltip>
                </ul>
            </section>
        </div>
        </main>
        </div>
        </div>
    )
}