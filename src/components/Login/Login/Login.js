import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Login.css";
import { MdError } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    let errorMessage;
    if (error) {
        errorMessage = <p className='text-danger text-center'><MdError></MdError> {error?.message}</p>
    }

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email is sent');
        }
        else {
            toast('Please provide your email address');
        }
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <Container>
                <h1 className='text-center mb-4'>Please Login</h1>

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={handleEmailChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={handlePasswordChange} />
                    </Form.Group>

                    <Button style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }} type="submit">
                        Login
                    </Button>
                </Form>
                {errorMessage}

                <p className='mt-3 text-center'>Don't have an account? <Link to="/register" className='text-decoration-none'> Create an account!</Link></p>

                <p className='mt-3 text-center'>Forget Password? <button onClick={handleResetPassword} className='btn btn-link text-decoration-none'> Reset Password</button></p>

                <div>
                    <SocialLogin></SocialLogin>
                    <ToastContainer></ToastContainer>
                </div>
            </Container>
        </div>
    );
};

export default Login;