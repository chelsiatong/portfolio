import React, { Component } from 'react';
import './projects.scss';
import checkit from '../../assets/images/checkit-logo.png'
import moods from '../../assets/images/moodsTogether.png'

class ProjectsNav extends Component {
    render() {

        return (
            <div className="projects" >
                <div className="projects__section" >
                    <div className="projects__head" >
                        <h1 className="projects__head--title" >my projects</h1>
                        <p className="projects__head--description__dev" >let's start with <span>web development</span>...</p>
                        <a href="/checkit">
                            <button className="projects__container" href="projects/checkit">
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
                                        <p className="projects__container--card--description"><span>full-stack web developer</span> | <br></br>industry project</p>
                                    </div>
                                </div>
                            </button>
                        </a>
                        <a href="inStock">
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


                        {/* 
                        <ul className="projects__nav">
                            <li><Link to="check" spy={true} smooth={true} offset={-20} >check-it</Link></li>
                            <li className="projects__nav--edit"><Link className="projects__nav--edit" to="google" spy={true} smooth={true} offset={-20}>google moods</Link></li>
                            <li className="projects__nav--edit"><Link to="clone" spy={true} smooth={true} offset={-20}>instagram clone</Link></li>
                            <li className="projects__nav--edit"><Link to="office" spy={true} smooth={true} offset={-20}>he said, she said</Link></li>
                        </ul> */}
                    </div>
                    {/* <img className="projects__head--picture" src={Forest} alt="forest"></img> */}
                </div>
            </div>
        )
    }
}

export default ProjectsNav;