import './about.scss';
import mountainTwo from '../../assets/images/about-mountain__2.jpeg';
import mountainOne from '../../assets/images/about-mountain__1.jpeg';

function About() {
    return (
        <section className="about" >
            <h1 className="about__title">about</h1>
            <h2 className="about__last" >tong</h2>
            <div className="about__section" >
                <p className="about__position" > front-end <br></br> developer</p>
                <img className="about__mountain--two" src={mountainTwo} alt="portrait-mountain"></img>
                <img className="about__mountain--one" src={mountainOne} alt="landscape-mountain"></img>
            </div>
            <div>
                <p className="about__history" >Since I was little, I've always needed a plan of which I could follow to have a successful career and lifestyle. Now, after 5 years of studying analytical chemistry, I’ve finally decided to make the tough decision and do what I truly enjoy - Web Development! </p>
                <p className="about__work"> Let's Talk! <br></br> I am available for both <span>full-time</span>, and <span>freelance</span> positions!</p>
            </div>
            <h2 className="about__first" >chelsia</h2>
        </section>

    );
}

export default About;