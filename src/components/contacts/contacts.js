import './contacts.scss';
// import ContactPic from '../../assets/images/contact-photo.jpeg';
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
        <section className="contacts">
            <div className="contacts__style">
                <h2 className="contacts__mainTitle">wanna chat? &#x270C;</h2>
            </div>
            <div className="contacts__section" >
                <h2 className="contacts__title" >I'd love to hear from you! <span>Contact me</span> and <span>let's stay in touch.</span></h2>
                <form onSubmit={sendEmail}>
                    <div className="contacts__form">
                        <div className="contacts__area contacts__area--subject">
                            <h3 className="contacts__subtitle">Subject</h3>
                            <input type="text" className="contacts__control contacts__control--subject" placeholder="subject" name="subject" />
                        </div>
                        <div className="contacts__form--info" >
                            <div className="contacts__area contacts__area--name">
                                <h3 className="contacts__subtitle contacts__subtitle--name">Full Name</h3>
                                <input type="text" className="contacts__control contacts__control--name" placeholder="full name" name="name" />
                            </div>
                            <div className="contacts__area contacts__area--email" >
                                <h3 className="contacts__subtitle contacts__subtitle--email">Email</h3>
                                <input type="text" className="contacts__control contacts__control--email" placeholder="email address" name="email" />
                            </div>
                        </div>
                        <div className="contacts__area contacts__area--message">
                            <h3 className="contacts__subtitle contacts__subtitle--message" >Message</h3>
                            <textarea placeholder="type your message here" name="message" />
                        </div>
                        <div className="contacts__area--send" >
                            <input type="submit" className="contacts__area--send__button" value="send" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contacts;