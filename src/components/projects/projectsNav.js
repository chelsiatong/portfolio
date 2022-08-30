import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './projects.scss';
import Forest from '../../assets/images/forest-mountain.jpeg';

class ProjectsNav extends Component {
    render() {
        return (
            <div className="projects" >
                <div className="projects__section" >
                    <div className="projects__head" >
                        <h1 className="projects__head--title" >projects</h1>
                        <p className="projects__head--description" >add description</p>
                        <ul className="projects__nav">
                            <li><Link to="check" spy={true} smooth={true}></Link>check-it</li>
                            <li className="projects__nav--edit"><Link to="google" spy={true} smooth={true}></Link>google moods</li>
                            <li className="projects__nav--edit"><Link to="clone" spy={true} smooth={true}></Link>instagram clone</li>
                            <li className="projects__nav--edit"><Link to="office" spy={true} smooth={true}></Link>he said, she said</li>
                        </ul>
                    </div>
                    <img className="projects__head--picture" src={Forest} alt="forest"></img>
                </div>
            </div>
        )
    }
}

export default ProjectsNav;