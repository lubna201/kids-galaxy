import React from 'react';
import emailjs from 'emailjs-com';

const ContactSend = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_p5ag00o', e.target, 'user_tdcDOBbbex8KKVryIMCzG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="container justify-content-center mt-5">
            <h1 className="text-center mt-5 pt-5 fs-1 fw-bold">Get In Touch</h1>
                <form className="box mx-5 px-5 pt-5 contact-form" onSubmit={sendEmail}>
                    <div className="mb-3">
                        <input type="text" name="name" className="form-control fs-3" placeholder="Your Name" id="exampleInputname" aria-describedby="nameHelp" />
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="email" name="email" className="form-control fs-3" placeholder="Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="text" name="subject" className="form-control fs-3" placeholder="Subject" id="exampleInputsubject" />
                    </div>
                    <div className="mb-3 mt-4">
                        <input type="text" name="message" className="form-control fs-3" placeholder="Your Message" style={{ height: "100px" }} id="exampleInputmessage" />
                    </div>
                    <div className="d-grid gap-2 mt-4">
                        <button className="btn btn-warning fs-3 text-white p-2 fw-bold" type="submit">Send</button>
                    </div>
                </form>
        </div>
    );
};

export default ContactSend;