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
                        <h3>Make a difference in your Life</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='image-bg'>
                    <img
                        className="d-block w-100 img-fluid"
                        src={financial2}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='margin-bottom'>
                        <h3>Make a difference in your Life</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BannerPage;