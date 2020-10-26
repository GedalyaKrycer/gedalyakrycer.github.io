import React, { useEffect, useRef } from 'react';
import './style.css';
import { gsap } from "gsap";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from "react-router-bootstrap";
import { FaGithub, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import resumeFile from "../../gedalya-krycer-resume.pdf";
import { usePortfolioContext } from '../../utils/PortfolioContext';

// This is static top section of the page and gives it semantic value.
function TopNavbar() {
    // Imports states from context
    const { toggleBurgerMenu, setToggleBurgerMenu } = usePortfolioContext();

    // Toggles if the nav button is open or closes animation
    const handleBurgerMenu = () => {
        toggleBurgerMenu ? setToggleBurgerMenu(false) : setToggleBurgerMenu(true);
    }


    // Closes the nav button if a link is clicked 
    const handleLinkClick = (e) => {
        setToggleBurgerMenu(true)
    }





    // Ref for logo
    const navContainerRef = useRef(null);

    // Ref for logo
    const logoRef = useRef(null);

    // Ref for left links
    const leftLinksRef = useRef(null);

    // Ref for resume button
    const resumeButtonRef = useRef(null);

    // Ref for mobile social links
    const mobileSocialRef = useRef(null);


    useEffect(() => {

            // GSAP ANIMATIONS
    const tl = gsap.timeline();

        tl.from(navContainerRef.current, {
            duration: 1,
            autoAlpha: 0,
            y: -20,
            ease: 'back.out(2)'
        })

        tl.from(logoRef.current, {
            duration: 1,
            autoAlpha: 0,
            y: -20,
            ease: 'back.out(2)'
        }, '-=.7')

        tl.from(leftLinksRef.current, {
            duration: .5,
            autoAlpha: 0,
            y: -20,
            ease: 'back.out(2)',
        }, '-=.7')

        tl.from(resumeButtonRef.current, {
            duration: .5,
            autoAlpha: 0,
            y: -20,
            ease: 'back.out(2)',
        }, '-=.8')

        tl.from(mobileSocialRef.current, {
            duration: .5,
            autoAlpha: 0,
            y: -20,
            ease: 'back.out(2)',
        }, '-=.8')


    }, [])


    return (
        <div className="sticky-top nav__container" ref={navContainerRef}>


            <Navbar collapseOnSelect expand="md">

                <LinkContainer to="/" className="d-md-none">
                    <Navbar.Brand>
                        <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg" alt="GK Logo" className="nav__logo-mobile" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" >
                    <div onClick={handleBurgerMenu}
                        className={`nav__toggle-btn ${!toggleBurgerMenu ? "open" : null}`}>
                        <div className="nav__toggle-btn__burger">
                        </div>
                    </div>
                </Navbar.Toggle>



                <Navbar.Collapse id="responsive-navbar-nav" ref={leftLinksRef}>
                    <Nav className="mr-auto" >
                        <LinkContainer to="/" onClick={handleLinkClick}>
                            <Nav.Link>Portfolio</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about" onClick={handleLinkClick}>
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <LinkContainer
                    to="/"
                    className="d-none d-md-block">
                    <Navbar.Brand>
                        <img ref={logoRef} src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg" alt="GK Logo" className="nav__logo-desktop" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Collapse className="g_justify-end nav__dropdown-vh">
                    <Nav className="nav__social" ref={mobileSocialRef}>
                        <div className="nav__social--display">
                            <Nav.Link href="https://www.linkedin.com/in/gedalyakrycer/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></Nav.Link>
                            <Nav.Link href="https://github.com/GedalyaKrycer" target="_blank" rel="noopener noreferrer" ><FaGithub /></Nav.Link>
                            <Nav.Link href="https://www.behance.net/gedalyakrycer" target="_blank" rel="noopener noreferrer"><FaBehance /></Nav.Link>
                        </div>


                    </Nav>
                    <a ref={resumeButtonRef}
                        href={resumeFile}
                        download={true}
                        className="nav__resume"><h6>View Resume</h6></a>
                </Navbar.Collapse>



            </Navbar>
        </div>
    )
}


export default TopNavbar;