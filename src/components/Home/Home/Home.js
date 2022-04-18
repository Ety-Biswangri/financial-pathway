import React from 'react';
import BannerPage from '../BannerPage/BannerPage';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <BannerPage></BannerPage>
            <div className='my-2' id='services'>
                <Services></Services>
            </div>
            <div className='mb-5'>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;