import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { FaGithub, FaLinkedinIn, FaBehance, FaReact } from 'react-icons/fa';
import './style.css';

// This is static top section of the page and gives it semantic value.
function TopNavbar() {
    return (
        <footer >
            <div className="d-flex justify-content-between">
                <LinkContainer to="/">
                    <img src="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/46e78fe53858d535b8db1d9e7e42455fa0a8b090/gk-portfolio/public/assets/images/img-links/gk-logo.svg" alt="GK Logo" className="footer__logo" />
                </LinkContainer>


                <a href="https://raw.githubusercontent.com/GedalyaKrycer/gedalyakrycer.github.io/react/gk-portfolio/public/assets/pdfs/Gedalya%20Krycer%20Resume.pdf" target="_blank" rel="noopener noreferrer" className="footer__resume "><h6>Download Resume</h6></a>


                <div className="d-flex justify-content-md-between">
                    <a href="https://www.linkedin.com/in/gedalyakrycer/" target="_blank" rel="noopener noreferrer" className="footer__social-icons"><FaLinkedinIn /></a>
                    <a href="https://github.com/GedalyaKrycer" target="_blank" rel="noopener noreferrer" className="footer__social-icons"><FaGithub /></a>
                    <a href="https://www.behance.net/gedalyakrycer" target="_blank" rel="noopener noreferrer" className="footer__social-icons"><FaBehance /></a>

                </div>
            </div>


            <a href="https://github.com/GedalyaKrycer/gedalyakrycer.github.io" target="_blank" rel="noopener noreferrer" className="footer__built-with"><h6>Built with <span className="footer__emoji">💖</span> and <FaReact className="footer__react" /></h6></a>




        </footer>
    )
}


export default TopNavbar;