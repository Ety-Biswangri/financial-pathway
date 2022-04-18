import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col, Button } from "react-bootstrap";
import './Service.css';
import CardGroup from 'react-bootstrap/CardGroup'
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { name, price, img, description } = service;
    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/checkout');
    }

    return (
        <div>
            <Col>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img} className="image-style fluid" />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                ${price}
                            </Card.Text>
                            <Card.Text>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        {<Button style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }} onClick={() => handleButton()}>Explore Now</Button>}
                    </Card>
                </CardGroup>
            </Col>
        </div>
    );
};

export default Service;