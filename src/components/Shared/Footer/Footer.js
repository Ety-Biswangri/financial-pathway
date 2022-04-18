import React from 'react';
import "./Footer.css";
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h6>All rights reserved &copy; {new Date().getFullYear()}</h6>
                <span>Visit me on</span>
                <br />
                <span className='me-2 fw-bolder'> <BsFacebook></BsFacebook></span>
                <span className='me-2 fw-bolder'> <BsTwitter></BsTwitter></span>
                <span className='fw-bolder'> <FaInstagramSquare></FaInstagramSquare></span>
            </div >
        </div >
    );
};

export default Footer;