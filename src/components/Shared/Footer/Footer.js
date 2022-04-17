import React from 'react';
import "./Footer.css";
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h6>All rights reserved &copy; {new Date().getFullYear()}</h6>
                <span>Visit me on social networks</span>
                <br />
                <span> <BsFacebook></BsFacebook></span>
                <span> <BsTwitter></BsTwitter></span>
                <span> <FaInstagramSquare></FaInstagramSquare></span>
            </div >
        </div >
    );
};

export default Footer;