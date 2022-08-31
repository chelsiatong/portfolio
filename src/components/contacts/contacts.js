import './contacts.scss';
import ContactPic from '../../assets/images/contact-photo.jpeg';


function Contacts() {
    return (
        <section>
            <div className="contacts">
                <img className="contacts__mountain-picture" src={ContactPic} alt="Contact-mountain-picture" ></img>
                <div className="contacts__words">
                    <h1 className="contacts__background" >contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me </h1>
                    <h1 className="contacts__background" >contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me </h1>
                    <h1 className="contacts__background--add" >contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me </h1>
                    <h1 className="contacts__background--add__two" >contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me </h1>
                </div>
            </div>
            <h2>stay in touch.</h2>
        </section>

    );
}

export default Contacts;