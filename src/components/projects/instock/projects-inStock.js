import React, { Component } from 'react';
import './inStock.scss';

class projectsInStock extends Component {
    render() {
        return (
            <div className="inStock" >
                <h1 className="inStock__title">InStock</h1>
                <h2 className="inStock__title--project">Industry Project</h2>
                <div className="inStock__section" >
                    <div>
                        <h3 className="inStock__title--role">Role</h3>
                        <p className="inStock__info">Full-Stack Web Developer</p>
                        <h3 className="inStock__title--role">Duration</h3>
                        <p className="inStock__info">July 2022</p>
                    </div>
                    <div><
                        h3 className="inStock__title--role">Location</h3>
                        <p className="inStock__info">Remote | Toronto, ON</p>
                        <h3 className="inStock__title--role">Team</h3>
                        <p className="inStock__info"><span>4</span> Web Developers</p>
                    </div>
                </div>

                <div className="inStock__container">
                    <h2 className="inStock__container--intro">introduction</h2>
                    <p className="inStock__container--intro--description"><span>InStock</span> is a full-stack web application delivering an Inventory Management System for a Fortune 500 client. This application is new and improved, built from the ground up from a previous existing system that is not scalable and doesn't perform well under a heavy traffic load. My team and I created a time-sensitive, full-stack application with a modern front-end communicating with a robust Express back-end.</p>
                </div>
                <div className="inStock__images">
                    {/* <img className="inStock__images--showcase1" src={googleMoods1} alt="googleMoods1"></img>
                    <img className="inStock__images--showcase2" src={googleMoods2} alt="googleMoods2"></img> */}
                </div>
                <div className="inStock__features">
                    <h2 className="inStock__features--title">special features</h2>
                    <ul className="inStock__features--list">
                        <li>&#x2713; Full-Stack Application</li>
                        <li>&#x2713; Agile Team</li>
                        <li>&#x2713; Scrum Leader</li>
                        <li>&#x2713; Jira and Scrum Methodology</li>
                        <li>&#x2713; Node, Express, and Postman</li>
                    </ul>
                </div>
                <a href="/projects">
                    <button className="inStock__back">&#x276E; return to projects</button>
                </a>
            </div>
        );
    }
}

export default projectsInStock;