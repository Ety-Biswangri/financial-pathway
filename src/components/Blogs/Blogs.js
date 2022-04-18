import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div style={{ minHeight: "75vh", marginBottom: "50px" }}>
            {<Container>
                <h1 className='mt-3 text-center fs-1 fw-bolder' style={{ color: "#b5179e" }}>Core Concepts of Authentication</h1>
                <div>
                    <Card className='my-4'>
                        <Card.Body>
                            <Card.Title>Difference between authorization and authentication.</Card.Title>
                            <Card.Text className='mt-4' style={{ textAlign: "justify" }}>
                                <p>The differences between authorization and authenticatiion are given below:</p>
                                <ul>
                                    <li className='mb-2'>The process of verifying a user's identity is known as authentication. On the other hand, the process of checking or validating what they have access to is known as authorization.</li>
                                    <li className='mb-2'>
                                        Authentication decides whether or not someone is a user. On the contrary, Authorization decides whether or not the user have the permission.
                                    </li>
                                    <li>
                                        Example of Authentication: A user can login to a website using her/his email and password.
                                        <br />
                                        Example of Authorization: Providing individual users with administrative access to an applicatiion.
                                    </li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='my-4'>
                        <Card.Body>
                            <Card.Title>Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                            <Card.Text className='mt-4' style={{ textAlign: "justify" }}>
                                <p>
                                    I am using Firebase because it provides functionalities such as Authentication which helps with the backend development of my Web Applications. Firebase Authentication supports authentication using email, password, different third party providers like Google, Facebook etc.
                                </p>
                                <p>Other options to implement authenticatiion are listed below:</p>
                                <ul>
                                    <li>Stytch</li>
                                    <li>Ory</li>
                                    <li>Supabase</li>
                                    <li>Okta</li>
                                    <li>PingIdentity</li>
                                    <li>Keycloak</li>
                                    <li>Frontegg</li>
                                    <li>Authress</li>
                                    <li>Auth0</li>
                                    <li>Amazon Cognito</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className='my-4'>
                        <Card.Body>
                            <Card.Title>What other services does firebase provide other than authentication?</Card.Title>
                            <Card.Text className='mt-4' style={{ textAlign: "justify" }}>
                                <p>The other services which Firebase provides other than authentication are listed below:</p>
                                <ul>
                                    <li>Hosting</li>
                                    <li>Google Analytics</li>
                                    <li>Realtime Database</li>
                                    <li>Cloud Firestore</li>
                                    <li>Cloud Functions</li>
                                    <li>Cloud Storage</li>
                                    <li>Predictions</li>
                                    <li>Cloud Messaging</li>
                                    <li>Dynamic Links</li>
                                    <li>Remote Config</li>
                                    <li>Crashlytics</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            </Container>}
        </div>
    );
};

export default Blogs;