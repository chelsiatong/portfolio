import './projects.scss';
import Forest from '../../assets/images/forest-mountain.jpeg';
import Arrow from '../../assets/images/arrow.png';
import Checkit from '../../assets/images/checkit.jpeg';

function Projects() {
    return (
        <section className="projects" >
            <div className="projects__head" >
                <h1 className="projects__head--title" >projects</h1>
                <p className="projects__head--description" >add description</p>
            </div>
            <img className="projects__head--picture" src={Forest} alt="forest"></img>
            <img className="projects__head--arrow" src={Arrow} alt="arrow"></img>
            <div className="projects__all" >
                <div className="projects__all--checkit">
                    <h2>check-it</h2>
                    <img className="projects__all--checkit__image" src={Checkit} alt="check-it"></img>
                    <a href="https://check-it-app-ext.netlify.app/"><button>view</button></a>
                </div>

            </div>


        </section>

    );
}

export default Projects;