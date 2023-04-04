import React, { Component } from 'react';
import './connector.scss';
import connector from '../../../assets/images/connector.png';
import connectorProfile from '../../../assets/images/connector-profile.png';
import connectorHome from '../../../assets/images/connector-home.png';
import connectorJob from '../../../assets/images/connector-job.png';
import { Link } from 'react-router-dom';



class Connector extends Component {
    render() {
        return (
            <div className="connector" >
                <h1 className="connector__title">connêctor</h1>
                <h2 className="connector__title--project">Personal Project</h2>
                <div className="connector__section">
                    <div>
                        <h3 className="connector__title--role">Role</h3>
                        <p className="connector__info">UI/ UX Designer</p>
                        <h3 className="connector__title--role">Duration</h3>
                        <p className="connector__info">Winter 2023</p>
                    </div>
                    <div>
                        <h3 className="connector__title--role">Location</h3>
                        <p className="connector__info">Remote | Toronto, ON</p>
                        <h3 className="connector__title--role">Team</h3>
                        <p className="connector__info">Individual</p>
                    </div>
                </div>
                <div className="connector__container">
                    <h2 className="connector__container--intro">summary</h2>
                    <p className="connector__container--intro--description"><span>ConnêctOR</span> is a personal project I've created in my sparetime as my very first UI/ UX project focused on job finding applications. As someone who is on the hunt for their first time job in tech after going through a major career transition, I wanted to redesign an easy application and selection process for job hunters and recruiters based on their interest and needs. Speaking from my own experiences during job hunting at the peak of recession, my goal was to create a minimal app, eliminating issues such as difficult navigation and unecessary information forms.</p>
                    <a href='https://www.figma.com/proto/D0Sab4scG2AxmyksPuX3Eu/connectOR-App?node-id=8-138&scaling=min-zoom&page-id=8%3A133&starting-point-node-id=65%3A78' alt='connector figma share link'>
                        <button className="connector__container--button" >click here!</button>
                    </a>
                </div>
                <div className="connector__images">
                    <img className="connector__images--showcase" src={connector} alt="connector app page"></img>
                    <img className="connector__images--showcase" src={connectorProfile} alt="connector profile page"></img>
                    <img className="connector__images--showcase" src={connectorHome} alt="connector home page"></img>
                    <img className="connector__images--showcase" src={connectorJob} alt="connector job page"></img>
                </div>
                <div className="connector__features">
                    <h2 className="connector__features--title">special features</h2>
                    <ul className="connector__features--list">
                        <li>&#x2713; Figma Design Tool for high-fidelity designs/ prototypes</li>
                        <li>&#x2713; Created wireframes, mockups and visual designs from scratch</li>
                        <li>&#x2713; UI Design and User Research</li>
                    </ul>
                </div>
                <Link to="/projects">
                    <button className="connector__back">&#x276E; return to designs</button>
                </Link>
            </div>);
    }
}

export default Connector;