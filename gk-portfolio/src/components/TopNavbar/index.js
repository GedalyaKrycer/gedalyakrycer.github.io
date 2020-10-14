import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import resumeFile from "../../gedalya-krycer-resume.pdf";

// This is static top section of the page and gives it semantic value.
function TopNavbar() {
    return (
        <div className="sticky-top nav__container">

                {/* <div className="menu-btn">
                    <div className="menu-btn__burger">
                    </div>
                </div> */}
            <Navbar collapseOnSelect expand="md">

                <LinkContainer to="/" className="d-md-none">
                    <Navbar.Brand>
                        <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg" alt="GK Logo" className="nav__logo-mobile" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link >Dev</Nav.Link>
                        </LinkContainer>
                        <Nav.Link href="http://gedalya.myportfolio.com/" target="_blank" rel="noopener noreferrer">Design <FiArrowUpRight /> </Nav.Link>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about#contact" className="nav__contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <LinkContainer to="/" className="d-none d-md-block">
                    <Navbar.Brand>
                        <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg" alt="GK Logo" className="nav__logo-desktop" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Collapse className="g_justify-end nav__dropdown-vh">
                    <Nav className="nav__social">
                        <div className="nav__social--display">
                            <Nav.Link href="https://www.linkedin.com/in/gedalyakrycer/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Nav.Link>
                            <Nav.Link href="https://github.com/GedalyaKrycer" target="_blank" rel="noopener noreferrer" ><FaGithub /></Nav.Link>
                            <Nav.Link href="https://www.behance.net/gedalyakrycer" target="_blank" rel="noopener noreferrer"><FaBehance /></Nav.Link>
                        </div>


                    </Nav>
                    <a href={resumeFile} download={true} className="nav__resume"><h6>View Resume</h6></a>
                </Navbar.Collapse>



            </Navbar>
        </div>
    )
}


export default TopNavbar;