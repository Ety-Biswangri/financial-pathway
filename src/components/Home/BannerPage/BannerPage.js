import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./BannerPage.css";
import financial1 from "../../../images/financial1.jpg";
import financial2 from "../../../images/financial2.jpg";

const BannerPage = () => {
    return (
        <div className='banner-container'>
            <Carousel>
                <Carousel.Item className='image-bg'>
                    <img
                        className="d-block w-100 fluid"
                        src={financial1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='margin-bottom'>
                        <h3>MAKE A DIFFERENCE IN YOUR LIFE</h3>
                        <p> I help business owners and entrepreneurs to improve their relationship with money and stay on track to meet their financial goals.</p>
                        <button style={{ color: "black", fontWeight: "700", border: "none" }}>Make an Appointment</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='image-bg'>
                    <img
                        className="d-block w-100 img-fluid"
                        src={financial2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='margin-bottom'>
                        <h3>MAKE YOUR PASSION COME TRUE </h3>
                        <p> I help others just like you to identify the problem areas or challenges in your finances and develop strategies to overcome them. </p>
                        <button style={{ color: "black", fontWeight: "700", border: "none" }}>
                            Make an Appointment
                        </button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerPage;