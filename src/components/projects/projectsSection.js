import React, { Component } from 'react';
import ProjectsDev from './projectsDev';
// import Projects from './projects';

class ProjectsSection extends Component {
    render() {
        return (
            <div>
                <ProjectsDev />
                {/* <Projects /> */}
            </div>
        )
    }
}

export default ProjectsSection;