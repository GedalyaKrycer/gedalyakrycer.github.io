import React, { useEffect, useRef, useState } from 'react';
import './topNavbar.css';
import { gsap } from "gsap";
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaDev } from 'react-icons/fa';
import resumeFile from "../../../gedalya-krycer-resume.pdf";



function TopNavbar() {

    const [toggleBurgerMenu, setToggleBurgerMenu] = useState(true);

    // Toggles if the nav button is open or closes animation
    const handleBurgerMenu = () => {
        toggleBurgerMenu ? setToggleBurgerMenu(false) : setToggleBurgerMenu(true);
    }


    // Closes the nav button if a link is clicked 
    const handleLinkClick = () => {
        setToggleBurgerMenu(true)
    }



    // Ref for logo
    const navContainerRef = useRef(null);

    // Ref for logo
    const logoRef = useRef(null);

    // Ref for left links
    const leftLinksRef = useRef(null);

    // Ref for resume button
    const rightLinksRef = useRef(null);

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

        tl.from(rightLinksRef.current, {
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
        <nav
            className="nav__container"
            ref={navContainerRef}
        >

            {/* Mobile Logo */}
            <Link
                exact="true"
                to="/"
                className="nav__logo-container--mobile"
            >

                <img
                    src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg"
                    alt="GK Logo"
                    className="nav__logo-mobile"
                />

            </Link>


            {/* Toggle Menu Button */}
            <button
                aria-controls="responsive-navbar-nav"
                onClick={handleBurgerMenu}
                className={`nav__toggle-btn 
                    ${!toggleBurgerMenu
                        ? "open"
                        : null}`}
            >
                <div className="nav__toggle-btn__burger">
                </div>
            </button>


            {/* Left Page Link Menu */}
            <ul className="nav__link-container"
                ref={leftLinksRef} >
                <li>
                    <NavLink
                        className="nav__link"
                        activeClassName="nav__link--active"
                        exact
                        to="/"
                        onClick={handleLinkClick}
                    >Portfolio</NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav__link"
                        activeClassName="nav__link--active"
                        to="/articles"
                        onClick={handleLinkClick}
                    >Articles</NavLink>
                </li>
            </ul>

            {/* Desktop Logo */}
            <Link
                exact="true"
                to="/"
                className="nav__logo-container--desktop">
                <img
                    className="nav__logo-desktop"
                    ref={logoRef}
                    src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo-white.svg"
                    alt="GK Logo"
                />

            </Link>

            {/* Right Page Link Menu */}
            <ul className="nav__link-container nav__link-container--right"
                ref={rightLinksRef} >
                <li>
                    <NavLink
                        className="nav__link"
                        activeClassName="nav__link--active"
                        exact
                        to="/about"
                        onClick={handleLinkClick}
                    >About</NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav__link"
                        activeClassName="nav__link--active"
                        to="/contact"
                        onClick={handleLinkClick}
                    >Contact</NavLink>
                </li>
            </ul>



            <div className="nav__social" ref={mobileSocialRef}>

                <ul className="nav__social--display">
                    <li>
                        <a
                            className="nav__link"
                            href="https://www.linkedin.com/in/gedalyakrycer/"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FaLinkedinIn /></a>
                    </li>
                    <li>
                        <a
                            className="nav__link"
                            href="https://github.com/GedalyaKrycer"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FaGithub /></a>
                    </li>
                    <li>
                        <a
                            className="nav__link"
                            href="https://dev.to/gedalyakrycer"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FaDev /></a>
                    </li>
                    <li>
                        <a ref={rightLinksRef}
                            href={resumeFile}
                            download={true}
                            target="_blank" rel="noopener noreferrer"
                            className="nav__resume"><h6>View Resume</h6></a>
                    </li>
                </ul>

            </div>

        </nav>


    )
}


export default TopNavbar;