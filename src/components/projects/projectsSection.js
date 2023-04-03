import React, { Component } from 'react';
import ProjectsDev from './projectsDev';
// import ProjectsNav from './projectsNav';

class ProjectsSection extends Component {
    render() {
        return (
            <div>
                {/* <ProjectsNav /> */}
                <ProjectsDev />
            </div>
        )
    }
}

export default ProjectsSection;