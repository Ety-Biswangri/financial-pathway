import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate('/home');
    }

    const handleRegister = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='w-50 mx-auto my-5'>
            <Container>
                <h1 className='text-center mb-4'>Please Register</h1>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={handleEmailChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={handlePasswordChange} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" required onChange={handleConfirmPasswordChange} />
                    </Form.Group>

                    <Button style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }} type="submit">
                        Register
                    </Button>
                </Form>
                <p className='mt-3 text-center'>Already have an account? <Link to="/login" className='text-decoration-none'>Login!</Link></p>
                <div>
                    <SocialLogin></SocialLogin>
                </div>
            </Container>
        </div>
    );
};

export default Register;