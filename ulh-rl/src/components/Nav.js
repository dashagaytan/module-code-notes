import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-bar">
                <li><Link className="link" to="/">Welcome</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/booking">Services</Link></li>
                <li><Link className="link" to="/certs">Certificates</Link></li>
                {/* <li><Link className="link" to="/topics">Topics</Link></li>  */}
            </div>
            {/* <div className="social-icons">
                <a className="social" href="#"><i className="fa fa-instagram"></i></a>
                <a className="social" href="#"><i className="fa fa-facebook"></i></a>
                <a className="social" href="#"><i className="fa fa-linkedin"></i></a>
                <a className="social" href="#"><i className="fa fa-envelope"></i></a>
            </div> */}
            <hr/>
        </div>
    )
}

export default Nav;
