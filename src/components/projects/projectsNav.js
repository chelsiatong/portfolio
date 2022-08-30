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
                            <li><Link to="check" spy={true} smooth={true} offset={-20} >check-it</Link></li>
                            <li className="projects__nav--edit"><Link className="projects__nav--edit" to="google" spy={true} smooth={true} offset={-20}>google moods</Link></li>
                            <li className="projects__nav--edit"><Link to="clone" spy={true} smooth={true} offset={-20}>instagram clone</Link></li>
                            <li className="projects__nav--edit"><Link to="office" spy={true} smooth={true} offset={-20}>he said, she said</Link></li>
                        </ul>
                    </div>
                    <img className="projects__head--picture" src={Forest} alt="forest"></img>
                </div>
            </div>
        )
    }
}

export default ProjectsNav;