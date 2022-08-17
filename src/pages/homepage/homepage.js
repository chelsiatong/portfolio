import './homepage.scss';
import Mountain from '../../assets/images/home-mountain.jpeg';

function Homepage() {
    return (
        <section className="home">
            <img className="home__image" src={Mountain} alt="main-mountain"></img>
            <div className="home__info" >
                <h1 className="home__portfolio" >portfolio</h1>
                <h3 className="home__year">2022</h3>
                <h1 className="home__name">chelsia tong</h1>
                <h2 className="home__position">front-end <br></br> web developer</h2>
            </div>
        </section>
    );
}

export default Homepage;