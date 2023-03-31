import './about.scss';
import kayak from '../../assets/images/kayak.jpeg';
import me from '../../assets/images/me.png';
import kaws from '../../assets/images/kaws.png';
import salmon from '../../assets/images/salmon.png';

function About() {
    return (
        <section className="about" >
            <div className="about__introduction" >
                <h2 className="about__introduction--intro" > my story. </h2>
                <p className="about__introduction--description">I'm Chelsia! A <span>front-end web developer</span>, an aspiring <span>UI/UX designer</span>, and a chemistry graduate at the University of Waterloo.
                    <br></br><br></br>I am a curious individual, who <span>loves</span> smiling, creating, problem-solving, and is <span>extremely driven</span> to learn new skills.
                    <br></br><br></br>When I am not creating or developing, I love <span>spending time</span> with my friends and family, eating <span>salmon sashimi</span>, playing <span>sports</span>, <span>traveling</span>, and <span>DIY-ing</span> products!
                </p>
            </div>
            <div className="about__section">
                <div>
                    <img className="about__section--me" src={me} alt="me"></img>
                    <img className="about__section--salmon" src={salmon} alt="salmon"></img>
                </div>
                <div>
                    <img className="about__section--kaws" src={kaws} alt="kaws"></img>
                    <img className="about__section--kayak" src={kayak} alt="kayak"></img>
                </div>
            </div>
            <p className="about__work"> Let's Talk! <br></br> I am available for <span>full-time</span>, and <span>freelance</span> positions!</p>
        </section>
    );
}

export default About;