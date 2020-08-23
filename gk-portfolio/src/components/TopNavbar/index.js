import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import './style.css';

// This is static top section of the page and gives it semantic value.
function TopNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/gedalyakrycer/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Nav.Link>
                    <Nav.Link href="https://github.com/GedalyaKrycer" target="_blank" rel="noopener noreferrer"><FaGithub /></Nav.Link>
                    <Nav.Link href="https://www.behance.net/gedalyakrycer" target="_blank" rel="noopener noreferrer"><FaBehance /></Nav.Link>

                </Nav>
            </Navbar.Collapse>


        </Navbar>
    )
}


export default TopNavbar;