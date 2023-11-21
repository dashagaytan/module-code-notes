import React from "react";
import logo from "../images/ruta-logo.png"

const Footer = () => {
    return (
        <div className="footer">
            <img src={logo} alt='logo' className='ruta-logo'/>
            <p>Copyright © 2023 | <a className="dg-link" href="https://dashagaytan.netlify.app/" target="balck">Dasha Gaytan Technologies</a> | Made with Love </p>
            {/* add Ruta's social links if any */}
        </div>
    )
}

export default Footer;

