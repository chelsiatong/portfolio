import React, { Component } from 'react';
import './googleMoods.scss';
import google from '../../../assets/images/Google-Logo.svg'
import googleMoods1 from '../../../assets/images/googlemoods-1.png'
import googleMoods2 from '../../../assets/images/googlemoods-2.png'


class projectsGoogleMoods extends Component {
    render() {
        return (
            <div className="googleMoods" >
                <div className="googleMoods__title">
                    <img className="googleMoods__title--image" src={google} alt="google"></img>
                    <h1 className="googleMoods__title--label">Moods</h1>
                </div>
                <h2 className="googleMoods__title--project">Industry Project</h2>
                <div className="googleMoods__section" >
                    <div>
                        <h3 className="googleMoods__title--role">Role</h3>
                        <p className="googleMoods__info">Front-End Lead</p>
                        <h3 className="googleMoods__title--role">Duration</h3>
                        <p className="googleMoods__info">July 2022</p>

                    </div>
                    <div>
                        <h3 className="googleMoods__title--role">Location</h3>
                        <p className="googleMoods__info">Remote | Toronto, ON</p>
                        <h3 className="googleMoods__title--role">Team</h3>
                        <p className="googleMoods__info--alter"><span>3</span> Web Developers</p>
                        <p className="googleMoods__info--alter"><span>2</span> UI/ UX Designers</p>
                        <p className="googleMoods__info--alter"><span>2</span> Data Scientists</p>
                    </div>
                </div>

                <div className="googleMoods__container">
                    <h2 className="googleMoods__container--intro">summary</h2>
                    <p className="googleMoods__container--intro--description"><span>Google Moods</span> is a front-end application inspired by the, "How might we" increase access to mental health resources so that people can feel supported and improve their wellbeing. <br></br><br></br> BrainStation X Google.  </p>
                </div>
                <div className="googleMoods__images">
                    <img className="googleMoods__images--showcase1" src={googleMoods1} alt="googleMoods1"></img>
                    <img className="googleMoods__images--showcase2" src={googleMoods2} alt="googleMoods2"></img>
                </div>
                <div className="googleMoods__features">
                    <h2 className="googleMoods__features--title">special features</h2>
                    <ul className="googleMoods__features--list">
                        <li>&#x2713; Google industry project lead</li>
                        <li>&#x2713; Chrome extension</li>
                        <li>&#x2713; ReactJS, JavaScript, and SASS</li>
                        <li>&#x2713; BrainStation X Google</li>
                    </ul>
                </div>
                <a href="/projects">
                    <button className="googleMoods__back">&#x276E; return to projects</button>
                </a>
            </div>
        );
    }
}

export default projectsGoogleMoods;