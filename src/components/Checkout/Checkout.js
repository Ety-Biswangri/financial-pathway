import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div>
            <h1 className='text-center mt-5 mb-4'>Checkout</h1>
            <Container>
                <Form className='w-50 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone number" />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }}>
                        Checkout
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default Checkout;