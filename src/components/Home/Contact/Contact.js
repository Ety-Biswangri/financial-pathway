import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div id='talk'>
            {/* Talk to Me section */}
            <Container>
                <div>
                    <h1 className='text-center mb-4 fs-1' style={{ color: "#b5179e" }}>Talk to Me</h1>
                    <div className='w-50 mx-auto'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" aria-label="With textarea" placeholder='Your message' />
                        </Form.Group>

                        <Button variant="primary" type="submit" style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }}>
                            Send
                        </Button>
                    </div>
                </div >
            </Container>
        </div>
    );
};

export default Contact;