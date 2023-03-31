import React, { Component } from 'react';
import ProjectsNav from './projectsNav';
import Projects from './projects';

class ProjectsSection extends Component {
    render() {
        return (
            <div>
                <ProjectsNav />
                {/* <Projects /> */}
            </div>
        )
    }
}

export default ProjectsSection;