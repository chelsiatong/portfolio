import React, { Component } from 'react';
import './projects.scss';
import checkit from '../../assets/images/checkit-logo.png'
import moods from '../../assets/images/moodsTogether.png'
import etsy from '../../assets/images/etsy-logo.png'

class ProjectsDev extends Component {
    render() {

        return (
            <div className="projects" >
                <div className="projects__development" >
                    <h1 className="projects__development--title" >my projects</h1>
                    <p className="projects__development--description__dev" >let's start with <span>web development</span>...</p>
                    <a href="/checkit">
                        <button className="projects__container">
                            <div className="projects__container--card">
                                <img className="projects__container--card--checkitLogo" src={checkit} alt="checkit-logo"></img>
                                <div className="projects__container--card--checkit">
                                    <h3 className="projects__container--card--title">Check-It</h3>
                                    <p className="projects__container--card--description"><span>front-end web developer</span> | <br></br>capstone project</p>
                                </div>
                            </div>
                        </button>
                    </a>
                    <a href="/googlemoods">
                        <button className="projects__container">
                            <div className="projects__container--card">
                                <img className="projects__container--card--moodsLogo" src={moods} alt="google moodslogo"></img>
                                <div className="projects__container--card--moods">
                                    <h3 className="projects__container--card--title">Google Moods</h3>
                                    <p className="projects__container--card--description"><span>front-end lead</span> | <br></br>industry project</p>
                                </div>
                            </div>
                        </button>
                    </a>
                    <a href="/inStock">
                        <button className="projects__container">
                            <div className="projects__container--card">
                                <h2 className="projects__container--card--inStockLogo">InStock</h2>
                                <div className="projects__container--card--inStock">
                                    <h3 className="projects__container--card--title">InStock</h3>
                                    <p className="projects__container--card--description"><span>full-stack web developer</span> | <br></br> web development collaboration</p>
                                </div>
                            </div>
                        </button>
                    </a>
                </div>

                <div className="projects__design">
                    <h1 className="projects__design--title" >my designs</h1>
                    <p className="projects__design--description__design" >now onto my <span>designs</span>...</p>
                    <a href="/connêctor">
                        <button className="projects__container">
                            <div className="projects__container--card">
                                <h2 className="projects__container--card--connectorLogo">ConnêctOR</h2>
                                <div className="projects__container--card--connector">
                                    <h3 className="projects__container--card--title">ConnêctOR</h3>
                                    <p className="projects__container--card--description"><span>UI/ UX designer</span> | <br></br>personal project</p>
                                </div>
                            </div>
                        </button>
                    </a>
                    <a href="/etsy">
                        <button className="projects__container">
                            <div className="projects__container--card">
                                <img className="projects__container--card--etsyLogo" src={etsy} alt="etsy logo"></img>
                                <div className="projects__container--card--etsy">
                                    <h3 className="projects__container--card--title">Digital CJT</h3>
                                    <p className="projects__container--card--description"><span>graphic designer</span> | <br></br>personal project</p>
                                </div>
                            </div>
                        </button>
                    </a>

                </div>
            </div>
        )
    }
}

export default ProjectsDev;