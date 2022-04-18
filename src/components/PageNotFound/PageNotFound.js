import React from 'react';
import notFound from '../../images/notFound.jpg';

const PageNotFound = () => {
    return (
        <div className='w-100 mx-auto d-flex justify-content-center align-items-center ' style={{ minHeight: "80vh" }}>
            <div className='d-flex justify-content-center align-items-center w-100'>
                <img className=' w-50 fluid' src={notFound} alt="notFoundImage" />
            </div>
        </div>
    );
};

export default PageNotFound;