import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>

            <div>
                <button
                    className='btn w-50 d-flex justify-content-center align-items-center mx-auto my-2' style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }}>
                    <FcGoogle className='fs-3'></FcGoogle>
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button
                    className='btn w-50 d-flex justify-content-center align-items-center mx-auto my-2' style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }}>
                    <BsFacebook className='fs-3'></BsFacebook>
                    <span className='px-2'>Facebook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;