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
                <h3 className="checkit__title--role">Role</h3>
                <p className="checkit__info">front-end position</p>
                <h3 className="checkit__title--role">Duration</h3>
                <p className="checkit__info">August 2022</p>
                <h3 className="checkit__title--role">Location</h3>
                <p className="checkit__info">Remote | Toronto, ON</p>
                <h3 className="checkit__title--role">Team</h3>
                <p className="checkit__info">Individual</p>
                <div className="checkit__container">
                    <h2 className="checkit__container--intro">introduction</h2>
                    <p className="checkit__container--intro--description"><span>Check-It</span> is a minimal organization application and chrome extension that allows users to easily track their day-to-day responsibilities with a to-do function, as well as a notes function for a place to quickly jot down their thoughts. All you have to do is open up a new tab, and watch your productivity grow.</p>
                </div>
                <div>
                    <img className="checkit__images" src={checkit} alt="checkit-picture"></img>
                    <img className="checkit__images" src={todo} alt="checkit-todo"></img>
                    <img className="checkit__images" src={notes} alt="checkit-notes"></img>
                </div>
            </div>
        );
    }

}

export default projectsCheckIt;
