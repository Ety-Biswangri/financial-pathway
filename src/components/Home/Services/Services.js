import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';
import "./Services.css";
import { Container } from 'react-bootstrap';
import { Row } from "react-bootstrap";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            {<Container>
                <h1 className='text-center mt-5 mb-5' style={{ color: "#6f2dbd" }}>My Services</h1>
                <Row xs={1} md={2} lg={3} className="gy-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Row>
            </Container>}
        </div>
    );
};

export default Services;