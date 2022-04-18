import React from 'react';
import "./About.css";

const About = () => {
    return (
        <div style={{ minHeight: "75vh" }} className="d-flex justify-content-center mb-5">
            <div>
                <h2 className='mt-4 mb-5 text-center fw-bolder title fs-1'>About Me</h2>
                <div className='w-50 mx-auto' style={{ textAlign: "justify" }}>
                    <p className='fs-5'>Hi! I am <span className='fw-bold'>
                        Harina Wilma</span>. I am a <span className='fw-bold'>Financial Coach</span>. I help people reach their financial goals by teaching them money management skills, such as how to build savings or pay down debt.
                    </p>
                    <p className='fs-5 mt-4'>
                        There are some goals of my coaching:
                        <ul>
                            <li>Help clients practice new behaviors and monitors those behaviors over time</li>
                            <li>Address immediate issues</li>
                            <li>Facilitate decision-making</li>
                        </ul>
                    </p>
                    <p className='fs-5 mt-4'>
                        To achieve these goals I will
                        <ul>
                            <li>define my ideal client</li>
                            <li>develop action plan</li>
                            <li>emphasize on decision-making skill</li>
                            <li>improve money management skill and listening skill</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;