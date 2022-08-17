import './homepage.scss';
import Mountain from '../../assets/images/home-mountain.jpeg';

function Homepage() {
    return (
        <section className="home">
            <h1>hello</h1>
            <img className="home__image" src={Mountain} alt="main-mountain"></img>
        </section>
    );
}

export default Homepage;