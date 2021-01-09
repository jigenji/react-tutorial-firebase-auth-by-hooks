import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#signin">Sign In</Nav.Link>
                    <Nav.Link href="#signup">Sign Up</Nav.Link>
                    <Nav.Link href="#signout">Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar
