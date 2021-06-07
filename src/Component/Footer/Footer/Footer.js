import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Programming" , link: "#"},
        {name: "Education and Teaching" , link: "#"},
        {name: "Social Science" , link: "#"},
        {name: "Health And Medicine" , link: "#"},
        {name: "Business" , link: "#"}
    ]
    const ourAddress = [
        {name: "England" , link: "//google.com/map"},
        {name: "Northern Ireland" , link: "//google.com/map"},
        {name: "London" , link: "//google.com/map"},
    ]
    const courses = [
        {name: "Science" , link: "#"},
        {name: "Mathematics" , link: "#"},
        {name: "Physical Education" , link: "#"},
        {name: "Art and Music" , link: "#"},
        {name: "Humanities" , link: "#"},
    ]
    return (
        <footer className="footer-area clear-both mt-5 pt-5">
            <div className="container pt-5">
                <div className="row py-5 d-flex justify-content-center">
                    <FooterCol key={1} menuTitle={"Paid Courses"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Free Courses" menuItems={courses}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterCol>
                    <h4 className="text-warning pb-3 pt-3 d-flex justify-content-center">Call now</h4>
                    <div className="mt-2 d-flex justify-content-center">
                           
                            <button className="btn btn-light">+1234567789</button>
                            <button className="btn btn-light ms-3">+1234567789</button>
                        </div>
                </div>
                <div className="copyRight text-center text-warning py-3">
                    <h5>Copyright @{(new Date()).getFullYear()} All Rights Reserved</h5>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;