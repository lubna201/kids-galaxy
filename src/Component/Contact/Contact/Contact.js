import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import contact from '../../../images/contact.jpg';
import ContactSend from '../ContactSend/ContactSend';

const Contact = () => {
    return (
        <div className="container mt-5 pt-5">
            <div className="row pt-5 d-flex align-items-center">
                <div className="col-md-5">
                    <h2 className="fw-bold mb-4">Address</h2>
                    <h3>England</h3>
                    <h3>Northern Ireland</h3>
                    <h3>London</h3>
                    <div className="mt-5">
                        <h2 className="fw-bold pb-3">Call now</h2>
                        <button className="btn btn-warning text-white fw-bold fs-5 p-2">+1234567789</button>
                        <button className="btn btn-warning text-white fw-bold ms-1 fs-5 p-2">+1234567789</button>
                    </div>
                    <ul className="social-media list-inline mt-5">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon1 active-icon1" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon1" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon1" icon={faInstagram} /></a></li>
                        </ul>
                </div>
                <div className="col-md-7">
                    <img src={contact} alt="" srcSet="" style={{ width: "100%" }} />
                </div>
            </div>
            <ContactSend></ContactSend>
        </div>
    );
};

export default Contact;