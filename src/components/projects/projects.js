
import './projects.scss';
import Arrow from '../../assets/images/arrow.png';
import Checkit from '../../assets/images/checkit.jpeg';
import Moods from '../../assets/images/googlemoods.jpeg';
import Instagram from '../../assets/images/instagram.jpeg';
import Office from '../../assets/images/office.jpeg';
import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <section className="projects" >
                <img className="projects__head--arrow" src={Arrow} alt="arrow"></img>
                <div className="projects__all" >
                    <div className="projects__all--container" id="check">
                        <h2>check-it</h2>
                        <img className="projects__all--container__checkit" src={Checkit} alt="check-it"></img>
                        <a href="https://check-it-app-ext.netlify.app/"><button>view</button></a>
                    </div>
                    <div className="projects__all--container" id="google">
                        <h2>google moods</h2>
                        <img className="projects__all--container__googlemoods" src={Moods} alt="google-moods"></img>
                        <a href="https://google-moods.netlify.app/"><button>view</button></a>
                    </div>
                    <div className="projects__all--container" id="clone" >
                        <h2>instagram clone</h2>
                        <img className="projects__all--container__instagram" src={Instagram} alt="instagram-clone"></img>
                        <a href="https://blooming-woodland-37579.herokuapp.com/"><button>view</button></a>
                    </div>
                    <div className="projects__all--container" id="office">
                        <h2>he said, she said</h2>
                        <img className="projects__all--container__office" src={Office} alt="the-office"></img>
                        <a href="https://theoffice-he-said-she-said.netlify.app/"><button>view</button></a>
                    </div>
                </div>
            </section>

        );
    }
}

export default Projects;