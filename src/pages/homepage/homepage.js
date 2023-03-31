import './homepage.scss';
import Mountain from '../../assets/images/home-mountain.jpeg';
import LinkedIn from '../../assets/logos/linkedin.png';
import Git from '../../assets/logos/github.png';

function Homepage() {
    return (
        <section>
            <div className="home">
                <div className="home__info" >
                    <h1 className="home__name">chelsia <span>j</span> tong.</h1>
                    <h2 className="home__position"><span>front-end</span> web developer & aspiring <span>UI/UX designer</span></h2>
                </div>
                <img className="home__image" src={Mountain} alt="main-mountain"></img>
            </div>
            <div className="home__footer">
                <a href="https://www.linkedin.com/in/chelsia-tong/">
                    <img className="home__footer--linkedin" src={LinkedIn} alt="LinkedIn-Logo" />
                </a>
                <a href="https://github.com/chelsiatong">
                    <img className="home__footer--git" src={Git} alt="Git-Logo" />
                </a>
            </div>
        </section>
    );
}

export default Homepage;