import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div style={{ minHeight: "75vh" }} className="d-flex justify-content-center">
            <div>
                <h2 className='mt-4 mb-5 text-center fw-bolder title fs-1'>About Me</h2>
                <div>
                    <p className='fs-5'>Hi! I am <span className='fw-bold'>Harina Wilma</span>. I am a professional <span className='fw-bold'>Financial Coach</span>. </p>
                </div>
            </div>
        </div>
    );
};

export default About;