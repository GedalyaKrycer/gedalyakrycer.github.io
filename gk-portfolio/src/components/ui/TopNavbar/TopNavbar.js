import React, { useEffect, useRef, useState } from 'react';
import './topNavbar.css';
import { gsap } from "gsap";
import { Link, NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaDev } from 'react-icons/fa';
import resumeFile from "../../../gedalya-krycer-resume.pdf";
import Logo from '../../ui/Logo/Logo';


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



    // Ref for nav container
    const navContainerRef = useRef(null);

    // Ref for logo
    const logoRef = useRef(null);

    // Ref for left links
    const leftLinksRef = useRef(null);

    // Ref for right links
    const rightLinksRef = useRef(null);


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
        }, '-=.6')


    }, [])


    return (
        <nav
            ref={navContainerRef}
            className={`nav__container ${toggleBurgerMenu
                ? null
                : "nav__container--mobile"}`}

            aria-label="main navigation"
        >

            {/* Mobile Logo */}
            <Link
                exact="true"
                to="/"
                className="nav__logo-container--mobile"
            >
                <Logo
                    cssClass="nav__logo--mobile"
                    fillOne="white"
                    fillTwo="white"
                    animation={logoRef}
                />

            </Link>


            {/* Toggle Menu Button */}
            <button
                aria-controls="responsive-navbar-nav"
                aria-label="Toggle navigation"
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
            <ul
                className={`nav__link-container 
                ${toggleBurgerMenu
                        ? null
                        : "open--grid"}`}
                ref={leftLinksRef}
            >
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
                className="nav__logo-container--desktop"
            >

                <Logo
                    cssClass="nav__logo--desktop"
                    fillOne="white"
                    fillTwo="white"
                    animation={logoRef}
                />

            </Link>

            {/* Right Page Link Menu */}
            <ul
                className={`nav__link-container nav__link-container--justify 
                ${toggleBurgerMenu
                        ? null
                        : "open--grid"}`}
                ref={rightLinksRef}
            >
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


            <ul
                className={`nav__social ${toggleBurgerMenu
                    ? null
                    : "open--grid"}`}

            >
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
                    <a
                        href={resumeFile}
                        download={true}
                        target="_blank" rel="noopener noreferrer"
                        className="nav__resume"><h6>View Resume</h6></a>
                </li>
            </ul>


        </nav>


    )
}


export default TopNavbar;