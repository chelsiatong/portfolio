import React, { Component } from 'react';
import './checkit.scss';
import checkit from '../../../assets/images/checkit.jpeg'
import notes from '../../../assets/images/notes.png'
import todo from '../../../assets/images/todo.png'

class projectsCheckIt extends Component {
    render() {
        return (
            <div className="checkit" >
                <h1 className="checkit__title">Check-It</h1>
                <h2 className="checkit__title--project">Capstone Project</h2>
                <div className="checkit__section">
                    <div>
                        <h3 className="checkit__title--role">Role</h3>
                        <p className="checkit__info">Front-End Web Developer</p>
                        <h3 className="checkit__title--role">Duration</h3>
                        <p className="checkit__info">August 2022</p>
                    </div>
                    <div>
                        <h3 className="checkit__title--role">Location</h3>
                        <p className="checkit__info">Remote | Toronto, ON</p>
                        <h3 className="checkit__title--role">Team</h3>
                        <p className="checkit__info">Individual</p>
                    </div>
                </div>
                <div className="checkit__container">
                    <h2 className="checkit__container--intro">summary</h2>
                    <p className="checkit__container--intro--description"><span>Check-It</span> is a minimal organization application and chrome extension that allows users to easily track their day-to-day responsibilities with a to-do function, as well as a notes function for a place to quickly jot down their thoughts. All you have to do is open up a new tab, and watch your productivity grow.</p>
                    <a href='https://check-it-app-ext.netlify.app/' alt='check it link'>
                        <button className="checkit__container--button" >click here!</button>
                    </a>
                </div>
                <div className="checkit__images">
                    <img className="checkit__images--showcase" src={checkit} alt="checkit-home"></img>
                    <img className="checkit__images--showcase" src={todo} alt="checkit-todo"></img>
                    <img className="checkit__images--showcase" src={notes} alt="checkit-notes"></img>
                </div>
                <div className="checkit__features">
                    <h2 className="checkit__features--title">special features</h2>
                    <ul className="checkit__features--list">
                        <li>&#x2713; Chrome extension</li>
                        <li>&#x2713; Day/night mode</li>
                        <li>&#x2713; Unsplash API background</li>
                        <li>&#x2713; Fully Responsive Web Design</li>
                        <li>&#x2713; CRUD operations</li>
                        <li>&#x2713; UI Design</li>
                        <li>&#x2713; ReactJS, JavaScript, and SASS</li>
                    </ul>
                </div>
                <a href="/projects">
                    <button className="checkit__back">&#x276E; return to projects</button>
                </a>
            </div>
        );
    }
}

export default projectsCheckIt;
