import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
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
                        <p>I help business owners and entrepreneurs to maximize their profits and build confidence with their finances.</p>
                        <Button type="submit" style={{ color: "black", fontWeight: "600", border: "none" }} className="button">Make an Appoinment</Button>
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
                        <p> I help others just like you to learn to take control of your business and personal finances so that you can live the life you have been dreaming about. </p>
                        <Button style={{ color: "black", fontWeight: "600", border: "none" }} className="button">Make an Appoinment</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerPage;