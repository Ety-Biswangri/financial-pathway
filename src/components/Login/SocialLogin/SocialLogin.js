import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { MdError } from 'react-icons/md';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'><MdError></MdError> {error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: "1px", backgroundColor: "#cbb2fe" }} className='w-25'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px", backgroundColor: "#cbb2fe" }} className='w-25'></div>
            </div>
            {errorMessage}

            <div>
                <button onClick={handleGoogleSignIn}
                    className='btn w-50 d-flex justify-content-center align-items-center mx-auto my-2' style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }}>
                    <FcGoogle className='fs-3'></FcGoogle>
                    <span className='px-2'>Google Sign In</span>
                </button>

                <button
                    className='btn w-50 d-flex justify-content-center align-items-center mx-auto my-2' style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }}>
                    <BsFacebook className='fs-4 text-primary'></BsFacebook>
                    <span className='px-2'>Facebook Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;