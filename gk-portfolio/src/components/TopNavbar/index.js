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
            <LinkContainer to="/" className="d-lg-none">
                <Navbar.Brand>
                    <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg" alt="GK Logo" />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <LinkContainer to="/" className="d-none d-lg-block">
                <Navbar.Brand>
                    <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg" alt="GK Logo" />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse className="justify-end">
                <Nav>
                    <Nav.Link href="https://www.linkedin.com/in/gedalyakrycer/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Nav.Link>
                    <Nav.Link href="https://github.com/GedalyaKrycer" target="_blank" rel="noopener noreferrer"><FaGithub /></Nav.Link>
                    <Nav.Link href="https://www.behance.net/gedalyakrycer" target="_blank" rel="noopener noreferrer"><FaBehance /></Nav.Link>

                </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />


        </Navbar>
    )
}


export default TopNavbar;