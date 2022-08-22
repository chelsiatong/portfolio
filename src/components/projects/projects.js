import './projects.scss';
import Forest from '../../assets/images/forest-mountain.jpeg';
import Arrow from '../../assets/images/arrow.png';
import Checkit from '../../assets/images/checkit.jpeg';
import Moods from '../../assets/images/googlemoods.jpeg';
import Instagram from '../../assets/images/instagram.jpeg';
import Office from '../../assets/images/office.jpeg';

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
                <div className="projects__all--container">
                    <h2>check-it</h2>
                    <img className="projects__all--container__checkit" src={Checkit} alt="check-it"></img>
                    <a href="https://check-it-app-ext.netlify.app/"><button>view</button></a>
                </div>
                <div className="projects__all--container" >
                    <h2>google moods</h2>
                    <img className="projects__all--container__googlemoods" src={Moods} alt="google-moods"></img>
                    <a href="https://google-moods.netlify.app/"><button>view</button></a>
                </div>
                <div className="projects__all--container" >
                    <h2>instagram clone</h2>
                    <img className="projects__all--container__instagram" src={Instagram} alt="instagram-clone"></img>
                    <a href="https://blooming-woodland-37579.herokuapp.com/"><button>view</button></a>
                </div>
                <div className="projects__all--container" >
                    <h2>he said, she said</h2>
                    <img className="projects__all--container__office" src={Office} alt="the-office"></img>
                    <a href="https://theoffice-he-said-she-said.netlify.app/"><button>view</button></a>
                </div>

            </div>


        </section>

    );
}

export default Projects;