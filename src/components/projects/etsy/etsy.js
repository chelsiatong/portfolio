import React, { Component } from 'react';
import './etsy.scss'

class Etsy extends Component {
    render() {
        return (
            <div className="etsy" >
                <h1 className="etsy__title">Etsy - Digital CJT</h1>
                <h2 className="etsy__title--project">Personal Project</h2>
                <div className="etsy__section">
                    <div>
                        <h3 className="etsy__title--role">Role</h3>
                        <p className="etsy__info">Graphic Designer</p>
                        <h3 className="etsy__title--role">Duration</h3>
                        <p className="etsy__info">Fall 2022</p>
                    </div>
                    <div>
                        <h3 className="etsy__title--role">Location</h3>
                        <p className="etsy__info">Remote | Toronto, ON</p>
                        <h3 className="etsy__title--role">Team</h3>
                        <p className="etsy__info">Individual</p>
                    </div>
                </div>
                <div className="etsy__container">
                    <h2 className="etsy__container--intro">summary</h2>
                    <p className="etsy__container--intro--description"><span>Digital CJT</span> is an Etsy shop I've created, focused on digital downloads that includes planners, calendars, to-do lists, etc. With the help of Canva, I've designed and developed various templates to enhance organization and time-management skills.  </p>
                </div>
                <div className="etsy__images">
                    {/* <img className="etsy__images--showcase1" src={checkit} alt="checkit-home"></img>
                    <img className="etsy__images--showcase2" src={todo} alt="checkit-todo"></img>
                    <img className="etsy__images--showcase3" src={notes} alt="checkit-notes"></img> */}
                </div>
                <div className="etsy__features">
                    <h2 className="etsy__features--title">special features</h2>
                    <ul className="etsy__features--list">
                        <li>&#x2713; Online presence, and promoted products to attract new customers</li>
                        <li>&#x2713; Custom graphics and templates for digital organizers</li>
                        <li>&#x2713; UI Design and User Research</li>
                        <li>&#x2713; Canva</li>

                    </ul>
                </div>
                <a href="/projects">
                    <button className="etsy__back">&#x276E; return to designs</button>
                </a>
            </div>);
    }
}

export default Etsy;