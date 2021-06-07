import React from 'react';
import bg from '../../../images/1.png'
import logo from '../../../images/favicon.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="row container mt-5 pt-5 d-flex align-items-center">
            <div className="col-md-4">
                <img src={logo} alt="" srcSet="" style={{width:"30%"}}/>
                <h1 className="pt-4 fw-bold fs-1 text-dark">Kids Galaxy</h1>
                <h2 className=" lh-base">Access 100 free online courses.Gain new skills and earn a certificate of completion</h2>
                <div className="d-flex pt-4" >
                    <button className="btn btn-warning  fw-bold fs-5 ms-1" type="button"><Link className="text-white" to="/courses" style={{textDecoration:"none"}}>Login</Link></button>
                    <button className="btn btn-warning  fw-bold fs-5 ms-1" type="button"><Link className="text-white" to="/contact" style={{textDecoration:"none"}}>Get In Touch</Link></button>
                </div>
            </div>
            <div className="col-md-8">
                <img src={bg} alt="" style={{width:"100%"}}></img>
            </div>
        </div>
    );
};

export default Header;