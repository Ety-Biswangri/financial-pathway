import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" style={{ backgroundColor: "#e0c3fc" }}>
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ color: "black", fontWeight: "700" }}>Financial Pathway</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home" style={{ color: "black", fontWeight: "500" }}> Home </Nav.Link>

                            <Nav.Link as={Link} to="/home#services" style={{ color: "black", fontWeight: "500" }}> Services </Nav.Link>

                            <Nav.Link as={Link} to="/blogs" style={{ color: "black", fontWeight: "500" }}>Blogs</Nav.Link>

                            <Nav.Link as={Link} to="/about" style={{ color: "black", fontWeight: "500" }}>About</Nav.Link>

                            <Nav.Link as={Link} to="/login" style={{ color: "black", fontWeight: "500" }}>Login</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;