import React from 'react';
import BannerPage from '../BannerPage/BannerPage';
import Services from '../Services/Services';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <BannerPage></BannerPage>
            <div className='my-5'>
                <Services></Services>
            </div>
        </div>
    );
};

export default Home;