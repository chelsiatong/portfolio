import './contacts.scss';
import ContactPic from '../../assets/images/contact-photo.jpeg';
import React from 'react';
import emailjs from 'emailjs-com';


function Contacts() {

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('gmail', 'template_utpulbp', event.target, 'c114L74LuzAi-JYT8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        event.target.reset()
    }

    return (
        <section className="contacts" >
            <div className="contacts__style">
                <img className="contacts__mountain-picture" src={ContactPic} alt="Contact-mountain-picture" ></img>
                <div className="contacts__words">
                    <h1 className="contacts__background" >contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me </h1>
                    <h1 className="contacts__background" >contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me </h1>
                    <h1 className="contacts__background--add" >contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me<br></br>contact me </h1>
                </div>
            </div>
            <div className="contacts__section" >
                <h2 className="contacts__title" >stay in touch.</h2>
                <form onSubmit={sendEmail}>
                    <div className="contacts__form" >
                        <div className="contacts__area contacts__area--subject">
                            <h3 className="contacts__subtitle">Subject</h3>
                            <input type="text" className="contacts__control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="contacts__area contacts__area--name">
                            <h3 className="contacts__subtitle">Full Name</h3>
                            <input type="text" className="contacts__control" placeholder="Full Name" name="name" />
                        </div>
                        <div className="contacts__area contacts__area--email" >
                            <h3 className="contacts__subtitle">Email</h3>
                            <input type="text" className="contacts__control" placeholder="Email" name="email" />
                        </div>
                        <div className="contacts__area contacts__area--message">
                            <h3>Message</h3>
                            <textarea rows="4" className="contacts__control" placeholder="Your Message" name="message" />
                        </div>
                        <div className="contacts__area--send" >
                            <input type="submit" className="contacts__area--send__button" value="Send" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contacts;