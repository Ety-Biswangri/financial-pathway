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
        <div className=' mb-5'>
            {/* Single Service */}
            <Col style={{ height: "550px", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px" }}>
                <CardGroup className='h-100'>
                    <Card>
                        <Card.Img variant="top" src={img} className="image-style fluid" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: "22px", fontWeight: "650" }}>{name}</Card.Title>
                            <Card.Text style={{ fontSize: "20px", fontWeight: "500" }}>
                                ${price}
                            </Card.Text>
                            <Card.Text style={{ textAlign: "justify", fontSize: "17px" }}>
                                {description}
                            </Card.Text>
                        </Card.Body>
                        {<Button style={{ backgroundColor: "#dab6fc", color: "black", fontWeight: "600", border: "none" }} onClick={() => handleButton()}>Book Now</Button>}
                    </Card>
                </CardGroup>
            </Col>
        </div >
    );
};

export default Service;